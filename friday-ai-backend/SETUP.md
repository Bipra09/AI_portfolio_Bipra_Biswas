# Friday AI Backend Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the `friday-ai-backend/` directory:
   ```env
   # Hugging Face API Configuration
   # Get your token from: https://huggingface.co/settings/tokens
   HF_TOKEN=your_actual_huggingface_token_here
   
   # Server Configuration
   PORT=3000
   
   # Environment
   NODE_ENV=development
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

## 🔑 Getting Your Hugging Face Token

1. Go to [Hugging Face Settings](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "Friday AI")
4. Select "Read" permissions
5. Copy the token and paste it in your `.env` file

## 🤖 AI Model Configuration

### Current Model: Google Gemma 3 270M
- **Model**: `google/gemma-3-270m`
- **Type**: Instruction-tuned, multimodal
- **Context**: 32K tokens
- **Languages**: 140+ languages
- **Features**: Text generation, image understanding

### Why Gemma 3?
- ✅ **More reliable** than Mistral models
- ✅ **Google's infrastructure** - better uptime
- ✅ **Smaller, faster** - 270M parameters
- ✅ **Multimodal** - handles text + images
- ✅ **Open weights** - free to use

## 🔧 Troubleshooting

### Common Issues:

#### 1. "HF API error: 404 - Not Found"
**Solution**: 
- ✅ **Fixed**: Updated to Gemma 3 model
- ✅ **Fixed**: Proper prompt formatting
- ✅ **Fixed**: Correct response parsing

#### 2. "Token configured: No"
**Solution**: 
- Create `.env` file with your `HF_TOKEN`
- Restart the server after adding the token

#### 3. "AI service not configured"
**Solution**: 
- Check your `.env` file exists
- Verify `HF_TOKEN` is set correctly
- Restart the server

#### 4. "Embedding service not available"
**Solution**: 
- Start local embedding server: `docker-compose up -d huggingface-embedding-server`
- Or ensure `HF_TOKEN` is set for fallback

## 📡 API Endpoints

- **Health Check**: `GET /api/health`
- **AI Chat**: `POST /api/ask`
- **Text Embedding**: `POST /api/embed`
- **Text Similarity**: `POST /api/similarity`

## 🐳 Docker Alternative

If you prefer using local models:
```bash
# Start local embedding server
docker-compose up -d huggingface-embedding-server

# Check logs
docker-compose logs -f huggingface-embedding-server
```

## 🧪 Testing

Test your setup with:
```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test AI endpoint
curl -X POST http://localhost:3000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "Hello, how are you?"}'
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HF_TOKEN` | Hugging Face API token | ✅ Yes |
| `PORT` | Server port | ❌ No (default: 3000) |
| `NODE_ENV` | Environment mode | ❌ No (default: development) |

## 🔄 Model Updates

To switch to different Gemma 3 models:
- **270M**: `google/gemma-3-270m` (current - fastest)
- **1B**: `google/gemma-3-1b` (balanced)
- **4B**: `google/gemma-3-4b` (better quality)
- **12B**: `google/gemma-3-12b` (high quality)
- **27B**: `google/gemma-3-27b` (best quality, slowest)

Update the `HF_MODEL_URL` in `server.js` to change models.
