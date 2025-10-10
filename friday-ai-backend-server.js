const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Configuration
let config = {
    huggingFace: {
        token: process.env.HF_TOKEN || '',
        model: 'google/gemma-7b-it',
        maxTokens: 512,
        temperature: 0.7,
        topP: 0.9,
        timeout: 30000
    },
    server: {
        port: PORT,
        host: 'localhost',
        corsOrigin: '*'
    },
    features: {
        fallbackToLocal: true,
        onlineMode: false
    }
};

// Load configuration from file if exists
function loadConfig() {
    try {
        if (fs.existsSync('friday-ai-config.json')) {
            const configData = fs.readFileSync('friday-ai-config.json', 'utf8');
            const savedConfig = JSON.parse(configData);
            config = { ...config, ...savedConfig };
            console.log('Configuration loaded from file');
        }
    } catch (error) {
        console.log('No saved configuration found, using defaults');
    }
}

// Save configuration to file
function saveConfig() {
    try {
        fs.writeFileSync('friday-ai-config.json', JSON.stringify(config, null, 2));
        console.log('Configuration saved to file');
    } catch (error) {
        console.error('Error saving configuration:', error);
    }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        message: 'Friday AI Backend Server is running!',
        timestamp: new Date().toISOString(),
        config: {
            onlineMode: config.features.onlineMode,
            model: config.huggingFace.model,
            serverPort: config.server.port
        }
    });
});

// Configuration endpoint
app.get('/api/config', (req, res) => {
    res.json({
        success: true,
        config: config
    });
});

// Update configuration endpoint
app.post('/api/config', (req, res) => {
    try {
        const newConfig = req.body;
        
        // Validate required fields
        if (newConfig.huggingFace && newConfig.huggingFace.token) {
            config.huggingFace = { ...config.huggingFace, ...newConfig.huggingFace };
        }
        
        if (newConfig.server) {
            config.server = { ...config.server, ...newConfig.server };
        }
        
        if (newConfig.features) {
            config.features = { ...config.features, ...newConfig.features };
        }
        
        // Save configuration
        saveConfig();
        
        res.json({
            success: true,
            message: 'Configuration updated successfully',
            config: config
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating configuration',
            error: error.message
        });
    }
});

// Chat endpoint for AI responses
app.post('/api/chat', async (req, res) => {
    try {
        const { message, context = 'portfolio-assistant' } = req.body;
        
        if (!message) {
            return res.status(400).json({
                success: false,
                message: 'Message is required'
            });
        }
        
        // Check if online mode is enabled
        if (!config.features.onlineMode) {
            return res.json({
                success: true,
                response: "I'm currently in offline mode. Please activate online mode through the setup page to connect with Hugging Face models.",
                mode: 'offline',
                fallback: true
            });
        }
        
        // Check if Hugging Face token is available
        if (!config.huggingFace.token) {
            return res.json({
                success: true,
                response: "I'm in online mode but no Hugging Face token is configured. Please add your token in the setup page.",
                mode: 'online',
                fallback: true
            });
        }
        
        // Try to get response from Hugging Face
        try {
            const aiResponse = await getHuggingFaceResponse(message, context);
            res.json({
                success: true,
                response: aiResponse,
                mode: 'online',
                model: config.huggingFace.model,
                fallback: false
            });
        } catch (hfError) {
            console.error('Hugging Face API error:', hfError);
            
            if (config.features.fallbackToLocal) {
                // Fallback to local response
                const localResponse = getLocalResponse(message, context);
                res.json({
                    success: true,
                    response: localResponse,
                    mode: 'online-fallback',
                    fallback: true,
                    fallbackReason: 'Hugging Face API error'
                });
            } else {
                res.status(500).json({
                    success: false,
                    message: 'AI service unavailable and fallback disabled',
                    error: hfError.message
                });
            }
        }
        
    } catch (error) {
        console.error('Chat endpoint error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
});

// Activate online mode endpoint
app.post('/api/activate-online', (req, res) => {
    try {
        const { token, model, port, host } = req.body;
        
        if (token) {
            config.huggingFace.token = token;
        }
        
        if (model) {
            config.huggingFace.model = model;
        }
        
        if (port) {
            config.server.port = port;
        }
        
        if (host) {
            config.server.host = host;
        }
        
        config.features.onlineMode = true;
        
        // Save configuration
        saveConfig();
        
        res.json({
            success: true,
            message: 'Online mode activated successfully!',
            config: config
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error activating online mode',
            error: error.message
        });
    }
});

// Deactivate online mode endpoint
app.post('/api/deactivate-online', (req, res) => {
    try {
        config.features.onlineMode = false;
        saveConfig();
        
        res.json({
            success: true,
            message: 'Online mode deactivated. Friday AI is now in offline mode.',
            config: config
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deactivating online mode',
            error: error.message
        });
    }
});

// Hugging Face API integration
async function getHuggingFaceResponse(message, context) {
    // This is a simplified implementation
    // In a real scenario, you would use the Hugging Face Inference API
    
    if (!config.huggingFace.token) {
        throw new Error('No Hugging Face token configured');
    }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, return a simulated response
    // In production, you would make actual API calls to Hugging Face
    const responses = [
        `Based on your question about "${message}", I can help you with that using my enhanced AI capabilities.`,
        `I'm processing your request: "${message}" through my online AI models for the best possible response.`,
        `Thanks for your question! I'm now using my online AI integration to provide you with enhanced assistance regarding "${message}".`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Local fallback responses
function getLocalResponse(message, context) {
    const localResponses = {
        'portfolio-assistant': `I'm currently in offline mode, but I can still help you with information about Bipra's portfolio, projects, and skills. What would you like to know?`,
        'general': `I'm working in offline mode right now. I can help you with local information and basic assistance.`,
        'default': `I'm available in offline mode. How can I help you today?`
    };
    
    return localResponses[context] || localResponses['default'];
}

// Test Hugging Face token endpoint
app.post('/api/test-token', async (req, res) => {
    try {
        const { token } = req.body;
        
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Token is required'
            });
        }
        
        // Test token with Hugging Face API
        const response = await fetch('https://huggingface.co/api/whoami', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (response.ok) {
            const userData = await response.json();
            res.json({
                success: true,
                message: 'Token is valid',
                user: userData.name || 'user'
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid token'
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error testing token',
            error: error.message
        });
    }
});

// Start server
function startServer() {
    loadConfig();
    
    app.listen(PORT, () => {
        console.log(`🚀 Friday AI Backend Server running on port ${PORT}`);
        console.log(`📡 Health check: http://localhost:${PORT}/api/health`);
        console.log(`⚙️  Configuration: http://localhost:${PORT}/api/config`);
        console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
        console.log(`🌐 CORS enabled for all origins`);
        console.log(`📁 Static files served from: ${__dirname}`);
        
        if (config.features.onlineMode) {
            console.log(`🟢 Online mode: ENABLED`);
            console.log(`🤖 AI Model: ${config.huggingFace.model}`);
        } else {
            console.log(`🔴 Online mode: DISABLED`);
        }
    });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Friday AI Backend Server...');
    saveConfig();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down Friday AI Backend Server...');
    saveConfig();
    process.exit(0);
});

// Start the server
startServer();

module.exports = app;
