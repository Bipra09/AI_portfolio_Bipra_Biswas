# Friday AI - Online/Offline Mode Setup

This document explains how to set up and use the Friday AI online/offline mode functionality.

## 🚀 Quick Start

### Offline Mode (Default)
- **No setup required** - works out of the box
- Uses local knowledge base about Bipra's portfolio
- Fast, reliable responses without internet dependency

### Online Mode Setup

#### Option 1: Backend Server (Recommended for Testing)

1. **Install Node.js** (if not already installed)
   ```bash
   # Download from https://nodejs.org/
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-reload:
   npm run dev
   ```

4. **Verify server is running**
   - Open: http://localhost:3000/api/health
   - Should see: `{"status":"online","message":"Friday AI Backend Server is running!"}`

#### Option 2: Hugging Face Integration

1. **Get Hugging Face API Token**
   - Sign up at https://huggingface.co/
   - Go to Settings → Access Tokens
   - Create a new token

2. **Update the API token**
   - Open `friday-ai-enhanced.js`
   - Find line with `'Authorization': 'Bearer hf_your_token_here'`
   - Replace `hf_your_token_here` with your actual token

## 🎯 How to Use

### Switching Modes

1. **Open your portfolio** (http://localhost:8000)
2. **Click the "Online Mode" button** in the hero section
3. **Choose your preferred mode:**
   - **Enable Online Mode**: Connects to backend server + Hugging Face
   - **Enable Offline Mode**: Uses local knowledge base only

### Testing the Modes

#### Offline Mode Testing
- Ask Friday questions about Bipra's projects, skills, experience
- Responses come from local knowledge base
- Fast, consistent responses

#### Online Mode Testing
- Ensure backend server is running (`npm start`)
- Switch to online mode via the modal
- Ask Friday questions - responses now come from backend server
- If backend fails, automatically falls back to local mode

## 🔧 Technical Details

### Online Mode Flow
1. **User asks question** → Friday AI processes in online mode
2. **Try backend server first** → `http://localhost:3000/api/chat`
3. **If backend fails** → Try Hugging Face Gamma AI
4. **If both fail** → Fallback to local knowledge base

### Backend API Endpoints
- **POST** `/api/chat` - Send messages to AI
  ```json
  {
    "message": "Tell me about Bipra's projects",
    "context": "portfolio-assistant"
  }
  ```
- **GET** `/api/health` - Check server status

### Configuration
- **Backend URL**: `FRIDAY_CONFIG.backendUrl` in `friday-ai-enhanced.js`
- **Hugging Face Model**: Currently using `microsoft/DialoGPT-large`
- **Timeouts**: 10s for backend, 15s for Hugging Face

## 🛠️ Customization

### Adding Your Own Backend
1. **Modify `ai-backend-server.js`**
   - Add your own AI model integration
   - Customize response generation
   - Add authentication if needed

2. **Update the frontend**
   - Modify `askBackendAI()` method in `friday-ai-enhanced.js`
   - Adjust API endpoints and request format

### Using Different AI Models
1. **Hugging Face Models**
   - Change model URL in `askHuggingFaceAI()` method
   - Adjust parameters for different models

2. **Other AI Services**
   - Add new methods like `askOpenAI()`, `askClaudeAI()`, etc.
   - Update `getOnlineAIResponse()` to try multiple services

## 📊 Status Indicators

### Visual Feedback
- **Online Mode Active**: Green glow effects, rotating AI orb border
- **Offline Mode Active**: Standard appearance
- **Mode Switch**: Button changes appearance and text

### Console Logging
- `🌐 Attempting online AI response...` - Trying online mode
- `✅ Got response from backend server` - Backend success
- `🤗 Connecting to Hugging Face Gamma AI...` - HF attempt
- `⚠️ Online AI unavailable, falling back to local` - Fallback mode
- `📱 Using local knowledge base` - Offline mode

## 🚨 Troubleshooting

### Backend Server Issues
```bash
# Check if server is running
curl http://localhost:3000/api/health

# Check server logs
npm start
# Look for error messages in console
```

### Hugging Face Issues
- **401 Unauthorized**: Check your API token
- **503 Service Unavailable**: Model is loading, try again in a few minutes
- **Rate Limited**: Wait a bit or upgrade your HF account

### Frontend Issues
- **Open browser console** (F12)
- **Look for Friday AI logs** - they show which mode is active
- **Check network tab** for failed API requests

## 🎉 Success Indicators

✅ **Offline Mode Working**: Friday responds instantly with portfolio knowledge
✅ **Backend Server Working**: Health check returns status "online"  
✅ **Online Mode Working**: Console shows "Got response from backend server"
✅ **Hugging Face Working**: Console shows "Got response from Hugging Face Gamma AI"
✅ **Fallback Working**: Online mode falls back to local when services fail

## 📞 Support

If you encounter issues:
1. Check the console logs for error messages
2. Verify backend server is running on port 3000
3. Test the health endpoint: http://localhost:3000/api/health
4. Make sure your Hugging Face token is valid (if using HF mode)

The system is designed to gracefully handle failures and always provide a response, even if online services are unavailable!
