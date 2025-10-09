import fetch from 'node-fetch';

const BACKEND_URL = 'http://localhost:3000';

async function testBackend() {
  console.log('🧪 Testing Friday AI Backend with Gemma 3...\n');

  try {
    // Test 1: Health Check
    console.log('1️⃣ Testing Health Check...');
    const healthResponse = await fetch(`${BACKEND_URL}/api/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData);
    console.log('');

    // Test 2: AI Chat
    console.log('2️⃣ Testing AI Chat...');
    const chatResponse = await fetch(`${BACKEND_URL}/api/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: 'Hello! Can you introduce yourself?' })
    });

    if (chatResponse.ok) {
      const chatData = await chatResponse.json();
      console.log('✅ AI Response:', chatData);
    } else {
      const errorText = await chatResponse.text();
      console.log('❌ AI Error:', chatResponse.status, errorText);
    }
    console.log('');

    // Test 3: Embedding
    console.log('3️⃣ Testing Text Embedding...');
    const embedResponse = await fetch(`${BACKEND_URL}/api/embed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: 'This is a test sentence for embedding.' })
    });

    if (embedResponse.ok) {
      const embedData = await embedResponse.json();
      console.log('✅ Embedding Generated:', {
        source: embedData.source,
        model: embedData.model,
        vectorLength: embedData.embeddings?.[0]?.length || 'N/A'
      });
    } else {
      const errorText = await embedResponse.text();
      console.log('❌ Embedding Error:', embedResponse.status, errorText);
    }

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run tests
testBackend();
