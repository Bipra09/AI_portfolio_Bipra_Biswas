# 🚀 Friday AI Online Mode Setup Guide

Welcome to the Friday AI Online Mode Setup! This guide will help you transform your portfolio's AI assistant from offline mode to a powerful online AI powered by Hugging Face models.

## 🌟 What You'll Get

- **Enhanced AI Responses**: Access to cutting-edge AI models like Google Gemma, Meta Llama, and Mistral
- **Real-time Processing**: Instant AI responses with fallback to local knowledge base
- **Seamless Integration**: Works seamlessly with your existing Friday AI portfolio
- **Secure**: Your Hugging Face token is stored locally and never shared

## 📋 Prerequisites

1. **Node.js** (version 16 or higher)
2. **Hugging Face Account** with API access
3. **Basic Terminal Knowledge**

## 🚀 Quick Start

### Step 1: Get Your Hugging Face Token

1. Visit [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "Friday AI Portfolio")
4. Select "Read" permissions
5. Copy the generated token (starts with `hf_`)

### Step 2: Start the Backend Server

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Verify Server is Running**
   - Open: http://localhost:3000/api/health
   - You should see: `{"status":"online","message":"Friday AI Backend Server is running!"}`

### Step 3: Configure AI Mode Setup

1. **Open the Setup Page**
   - Click the "AI Mode Setup" button in your portfolio
   - Or navigate to: `ai-mode-setup.html`

2. **Enter Your Configuration**
   - **Hugging Face Token**: Paste your `hf_` token
   - **Model Selection**: Choose your preferred AI model
   - **Server Settings**: Use default port 3000

3. **Test Your Setup**
   - Click "Validate Token" to verify your Hugging Face access
   - Click "Test Connection" to verify server connectivity
   - Click "Test Complete Setup" to run full validation

4. **Go Online!**
   - Once all requirements are met, click "Activate Online Mode"
   - Friday AI will now connect to Hugging Face models

## 🔧 Configuration Options

### AI Models Available

| Model Type | Parameters | Context Length | License |
|------------|------------|----------------|---------|
| **Google Gemma** | 2B, 7B, 9B | 8192 | Gemma License |
| **Meta Llama** | 7B, 13B, 30B, 70B | 4096 | Meta License |
| **Mistral AI** | 7B, 8x7B | 8192/32768 | Apache 2.0 |
| **Custom Models** | Any | Variable | Model-specific |

### Advanced Settings

- **Temperature**: Controls creativity (0.0 = focused, 2.0 = very creative)
- **Top P**: Nucleus sampling for response quality
- **Max Tokens**: Maximum response length
- **Timeout**: Request timeout in milliseconds
- **Fallback**: Automatic fallback to local knowledge base

## 🎯 How It Works

### Online Mode Flow
1. **User asks question** → Friday AI processes in online mode
2. **Try Hugging Face first** → Get response from selected AI model
3. **If API fails** → Automatically fallback to local knowledge base
4. **Seamless experience** → User doesn't notice the difference

### Offline Mode Flow
1. **User asks question** → Friday AI uses local knowledge base
2. **Fast response** → No internet dependency
3. **Reliable** → Always available

## 🛠️ Troubleshooting

### Common Issues

#### "Cannot connect to server"
- **Solution**: Make sure the backend server is running (`npm start`)
- **Check**: Port 3000 is not used by other applications

#### "Invalid token"
- **Solution**: Verify your Hugging Face token is correct
- **Check**: Token has read permissions and is not expired

#### "Model not responding"
- **Solution**: Check if the selected model is available
- **Alternative**: Try a different model or size

### Server Logs

The backend server provides detailed logging:
```bash
🚀 Friday AI Backend Server running on port 3000
📡 Health check: http://localhost:3000/api/health
⚙️  Configuration: http://localhost:3000/api/config
💬 Chat endpoint: http://localhost:3000/api/chat
🌐 CORS enabled for all origins
🟢 Online mode: ENABLED
🤖 AI Model: google/gemma-7b-it
```

## 🔒 Security & Privacy

- **Local Storage**: Your Hugging Face token is stored locally in your browser
- **No External Sharing**: Token is never sent to external servers (except Hugging Face API)
- **Secure Communication**: All API calls use HTTPS
- **Fallback Protection**: If online mode fails, automatically switches to offline

## 📱 Mobile & Responsive

The setup page is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔄 Switching Between Modes

### To Online Mode
1. Complete the setup process
2. Click "Activate Online Mode"
3. Friday AI will connect to Hugging Face

### To Offline Mode
1. Go to the setup page
2. Click "Deactivate Online Mode"
3. Friday AI will use local knowledge base

## 📊 Performance

### Online Mode
- **Response Time**: 1-3 seconds (depending on model and complexity)
- **Quality**: High-quality AI responses
- **Features**: Advanced AI capabilities

### Offline Mode
- **Response Time**: Instant (< 100ms)
- **Quality**: Local knowledge base responses
- **Features**: Portfolio-specific information

## 🆘 Getting Help

### Check These First
1. **Server Status**: http://localhost:3000/api/health
2. **Configuration**: http://localhost:3000/api/config
3. **Browser Console**: Check for JavaScript errors
4. **Network Tab**: Verify API calls are working

### Still Having Issues?
1. **Restart the server**: `Ctrl+C` then `npm start`
2. **Clear browser cache**: Hard refresh the page
3. **Check Node.js version**: `node --version` (should be ≥16)
4. **Verify dependencies**: `npm list` to check installed packages

## 🎉 Success Indicators

When everything is working correctly, you'll see:
- ✅ **Token Status**: Valid token for [your-username]
- ✅ **Server Status**: Connected to localhost:3000
- ✅ **Model Status**: AI model selected and configured
- 🚀 **Go Online Button**: Enabled and ready to activate
- 🟢 **Status Banner**: Shows "Online Mode Active"

## 🔮 Future Enhancements

Planned features for upcoming versions:
- **Multiple Model Support**: Switch between models on the fly
- **Custom Prompts**: Personalized AI behavior
- **Response History**: Track and review AI interactions
- **Performance Analytics**: Monitor response times and quality
- **Model Fine-tuning**: Customize models for your specific needs

---

## 🚀 Ready to Go Online?

1. **Start your backend server**: `npm start`
2. **Open the setup page**: Click "AI Mode Setup" in your portfolio
3. **Configure your settings**: Enter token, select model, test connection
4. **Activate online mode**: Click "Activate Online Mode"
5. **Enjoy enhanced AI**: Friday AI is now powered by Hugging Face!

**Happy AI-ing! 🤖✨**
