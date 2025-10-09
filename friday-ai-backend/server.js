import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security middleware
app.use((req, res, next) => {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Rate limiting (basic)
  if (req.path === '/api/ask' && req.method === 'POST') {
    // Simple rate limiting for AI endpoint
    const clientIP = req.ip || req.connection.remoteAddress;
    if (!app.locals.rateLimit) app.locals.rateLimit = new Map();
    
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxRequests = 10; // 10 requests per minute
    
    if (app.locals.rateLimit.has(clientIP)) {
      const userRequests = app.locals.rateLimit.get(clientIP);
      const validRequests = userRequests.filter(time => now - time < windowMs);
      
      if (validRequests.length >= maxRequests) {
        return res.status(429).json({ 
          error: 'Rate limit exceeded', 
          details: 'Too many requests, please try again later' 
        });
      }
      
      validRequests.push(now);
      app.locals.rateLimit.set(clientIP, validRequests);
    } else {
      app.locals.rateLimit.set(clientIP, [now]);
    }
  }
  
  next();
});

app.use(cors({
  origin: NODE_ENV === 'production' 
    ? ['https://yourusername.github.io', 'https://yourdomain.com'] 
    : true,
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));

// Updated to use Google's reliable Gemma 3 model
const HF_MODEL_URL = 'https://api-inference.huggingface.co/models/google/gemma-3-270m';

// Local embedding server configuration
const LOCAL_EMBEDDING_URL = 'http://localhost:8001/embed';
const EMBEDDING_MODEL = 'BAAI/bge-small-en-v1.5';

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Friday AI Backend is running' });
});

// Text embedding endpoint
app.post('/api/embed', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required for embedding' });
    }

    console.log(`Generating embedding for text: ${text.substring(0, 100)}...`);

    // Try local embedding server first
    try {
      const embeddingResponse = await fetch(LOCAL_EMBEDDING_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          inputs: text,
          normalize: true
        })
      });

      if (embeddingResponse.ok) {
        const embeddingData = await embeddingResponse.json();
        console.log('Local embedding generated successfully');
        
        res.json({
          embeddings: embeddingData,
          model: EMBEDDING_MODEL,
          source: 'local',
          timestamp: new Date().toISOString()
        });
        return;
      }
    } catch (localError) {
      console.log('Local embedding server not available, skipping...');
    }

    // Fallback to Hugging Face API if local server is not available
    if (!process.env.HF_TOKEN) {
      return res.status(500).json({ 
        error: 'Embedding service not available',
        details: 'Local embedding server is down and no HF token configured'
      });
    }

    const hfEmbeddingResponse = await fetch('https://api-inference.huggingface.co/models/BAAI/bge-small-en-v1.5', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        inputs: text,
        normalize: true
      })
    });

    if (!hfEmbeddingResponse.ok) {
      const errorText = await hfEmbeddingResponse.text();
      console.error(`HF Embedding API error: ${hfEmbeddingResponse.status} - ${errorText}`);
      return res.status(500).json({ 
        error: 'Embedding service error',
        details: `HTTP ${hfEmbeddingResponse.status}: ${errorText}`
      });
    }

    const hfEmbeddingData = await hfEmbeddingResponse.json();
    console.log('HF API embedding generated successfully');
    
    res.json({
      embeddings: hfEmbeddingData,
      model: EMBEDDING_MODEL,
      source: 'huggingface',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in /api/embed:', error);
    res.status(500).json({ 
      error: 'Something went wrong', 
      details: error.message 
    });
  }
});

// Text similarity endpoint
app.post('/api/similarity', async (req, res) => {
  try {
    const { text1, text2 } = req.body;
    
    if (!text1 || !text2) {
      return res.status(400).json({ error: 'Both text1 and text2 are required' });
    }

    console.log(`Calculating similarity between texts...`);

    // Generate embeddings for both texts
    const embedding1Response = await fetch(`${req.protocol}://${req.get('host')}/api/embed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text1 })
    });

    const embedding2Response = await fetch(`${req.protocol}://${req.get('host')}/api/embed`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text2 })
    });

    if (!embedding1Response.ok || !embedding2Response.ok) {
      return res.status(500).json({ error: 'Failed to generate embeddings' });
    }

    const embedding1 = await embedding1Response.json();
    const embedding2 = await embedding2Response.json();

    // Calculate cosine similarity
    const similarity = calculateCosineSimilarity(embedding1.embeddings[0], embedding2.embeddings[0]);

    res.json({
      similarity: similarity,
      text1: text1.substring(0, 100),
      text2: text2.substring(0, 100),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in /api/similarity:', error);
    res.status(500).json({ 
      error: 'Something went wrong', 
      details: error.message 
    });
  }
});

// Helper function to calculate cosine similarity
function calculateCosineSimilarity(vec1, vec2) {
  if (!Array.isArray(vec1) || !Array.isArray(vec2) || vec1.length !== vec2.length) {
    return 0;
  }

  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;

  for (let i = 0; i < vec1.length; i++) {
    dotProduct += vec1[i] * vec2[i];
    norm1 += vec1[i] * vec1[i];
    norm2 += vec2[i] * vec2[i];
  }

  norm1 = Math.sqrt(norm1);
  norm2 = Math.sqrt(norm2);

  if (norm1 === 0 || norm2 === 0) {
    return 0;
  }

  return dotProduct / (norm1 * norm2);
}

// Main AI endpoint
app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    // Local fallback generator when HF token is missing or HF call fails
    const generateLocalResponse = (q) => {
      const text = String(q || '').toLowerCase();
      if (!text.trim()) {
        return "I'm here and listening. Ask me anything!";
      }
      if (/(hello|hi|hey|greetings)/.test(text)) {
        return "Hello! I'm Friday. How can I help you today?";
      }
      if (/(joke|funny|laugh)/.test(text)) {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "I told my computer I needed a break, and it said: 'No problem, I'll go to sleep.'",
          "There are only 10 kinds of people: those who understand binary and those who don't."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      }
      if (/(help|what can you do|capabilities)/.test(text)) {
        return "I can chat, tell jokes, summarize, and answer general questions. For deeper answers, enable the Hugging Face token.";
      }
      return "I'm running in local mode right now, so here's a basic response: I received your message and I'm ready to help. Add your HF token for full AI answers.";
    };

    // If no HF token, immediately serve a local response so the UI still replies
    if (!process.env.HF_TOKEN) {
      console.warn('HF_TOKEN not found; serving local fallback response');
      return res.json({ 
        answer: generateLocalResponse(question),
        model: 'local-fallback',
        timestamp: new Date().toISOString()
      });
    }

    console.log(`Received question: ${question}`);

    // Format the prompt for Gemma 3
    const formattedPrompt = `<start_of_turn>user
${question}<end_of_turn>
<start_of_turn>model
`;

    const response = await fetch(HF_MODEL_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HF_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        inputs: formattedPrompt,
        parameters: {
          max_new_tokens: 500,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true,
          return_full_text: false
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`HF API error: ${response.status} - ${errorText}`);
      
      // Graceful fallback so the chat always replies
      const fallback = generateLocalResponse(question);
      return res.json({ 
        answer: fallback,
        model: response.status === 401 ? 'local-fallback-auth' : 'local-fallback',
        timestamp: new Date().toISOString()
      });
    }

    const data = await response.json();
    console.log('HF API response:', data);

    // Handle different response formats from Hugging Face
    let answer;
    if (Array.isArray(data) && data.length > 0) {
      answer = data[0]?.generated_text || "No answer received";
    } else if (data.generated_text) {
      answer = data.generated_text;
    } else if (data[0]?.generated_text) {
      answer = data[0].generated_text;
    } else {
      answer = "No answer received";
    }

    // Clean up the response (remove the prompt part for Gemma 3)
    if (answer && answer.includes('<start_of_turn>model')) {
      answer = answer.split('<start_of_turn>model')[1]?.trim() || answer;
    }
    if (answer && answer.includes('<end_of_turn>')) {
      answer = answer.split('<end_of_turn>')[0]?.trim() || answer;
    }

    res.json({ 
      answer,
      model: 'google/gemma-3-270m',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in /api/ask:', error);
    res.status(500).json({ 
      error: 'Something went wrong', 
      details: error.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Friday AI Backend running on port ${PORT}`);
  console.log(`📡 AI Model: ${HF_MODEL_URL}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🤖 AI endpoint: http://localhost:${PORT}/api/ask`);
  console.log(`🔑 Token configured: ${process.env.HF_TOKEN ? 'Yes' : 'No'}`);
  console.log(`💡 Note: Create a .env file with HF_TOKEN for AI to work`);
});
