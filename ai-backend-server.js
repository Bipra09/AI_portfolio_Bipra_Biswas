// Friday AI Backend Server
// Simple Node.js server for testing online mode functionality
// Run with: node ai-backend-server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Simple AI responses for portfolio context
const portfolioKnowledge = {
    "projects": "Bipra has worked on several impressive projects including SafeOut (health monitoring), VisionX (AI surveillance), Virtual Whiteboard ML, IoT Smart Lock System, and ROS Obstacle Detection Bot.",
    "skills": "Bipra specializes in AI/ML, fullstack development, Python, JavaScript, React, Node.js, IoT, robotics, and has experience with cloud technologies.",
    "experience": "Computer Science graduate from VIT with permanent residency in Japan, experienced in international collaboration and cross-cultural communication.",
    "contact": "You can reach Bipra through the contact form on his portfolio, LinkedIn, GitHub, or email at bipra.biswas309@gmail.com"
};

// Simple keyword-based response system
function generateResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('project') || msg.includes('work')) {
        return "I can tell you about Bipra's amazing projects! He's built SafeOut for health monitoring, VisionX for AI surveillance, a Virtual Whiteboard with ML, an IoT Smart Lock System, and a ROS-based obstacle detection robot. Which project interests you most?";
    }
    
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech')) {
        return "Bipra is skilled in AI/ML, fullstack development with React and Node.js, Python programming, IoT systems, robotics with ROS, and cloud technologies. He's particularly passionate about combining AI with practical applications!";
    }
    
    if (msg.includes('experience') || msg.includes('background')) {
        return "Bipra is a Computer Science graduate from VIT specializing in AI and Robotics. He has permanent residency in Japan and brings unique international perspective to his work. His experience spans from academic excellence to real-world project implementation.";
    }
    
    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email')) {
        return "You can connect with Bipra through multiple channels: use the contact form on this website, reach out via LinkedIn, check his GitHub projects, or email him directly at bipra.biswas309@gmail.com. He's always open to discussing new opportunities!";
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! I'm Friday, Bipra's AI assistant running in online mode with enhanced capabilities! I can help you learn about his projects, skills, experience, and how to get in touch. What would you like to know?";
    }
    
    if (msg.includes('online') || msg.includes('mode')) {
        return "Great! I'm now running in online mode, which means I have access to enhanced AI processing and can provide more detailed responses about Bipra's portfolio. How can I assist you today?";
    }
    
    // Default response for unrecognized queries
    return `I'm Friday, running in online mode! I can help you learn about Bipra's impressive portfolio including his AI projects, fullstack development skills, international experience, and how to connect with him. What specific aspect interests you?`;
}

// API endpoint for chat
app.post('/api/chat', (req, res) => {
    try {
        const { message, context } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }
        
        console.log(`📨 Received: ${message}`);
        
        // Generate response
        const response = generateResponse(message);
        
        console.log(`🤖 Responding: ${response}`);
        
        res.json({
            response: response,
            mode: 'online',
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('❌ Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'online',
        message: 'Friday AI Backend Server is running!',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Friday AI Backend Server running at http://localhost:${port}`);
    console.log(`📡 Ready to handle online AI requests!`);
    console.log(`🔍 Health check: http://localhost:${port}/api/health`);
    console.log(`💬 Chat endpoint: POST http://localhost:${port}/api/chat`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Friday AI Backend Server...');
    process.exit(0);
});
