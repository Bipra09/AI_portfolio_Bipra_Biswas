# Friday AI Backend - Deployment Guide

## Local Development

1. **Start the backend server:**
   ```bash
   cd friday-ai-backend
   npm start
   ```

2. **Test the API:**
   - Open `test-ai.html` in your browser
   - Or use curl: `curl -X POST http://localhost:5000/api/ask -H "Content-Type: application/json" -d '{"question": "Hello"}'`

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   cd friday-ai-backend
   vercel
   ```

3. **Set environment variables in Vercel dashboard:**
   - `HF_TOKEN`: `your_huggingface_token_here`

### Option 2: Render

1. **Connect your GitHub repository**
2. **Create a new Web Service**
3. **Set environment variables:**
   - `HF_TOKEN`: `your_huggingface_token_here`
4. **Build command:** `npm install`
5. **Start command:** `npm start`

### Option 3: Railway

1. **Connect your GitHub repository**
2. **Add environment variables:**
   - `HF_TOKEN`: `your_huggingface_token_here`
3. **Deploy automatically**

### Option 4: Heroku

1. **Install Heroku CLI**
2. **Create app:**
   ```bash
   heroku create your-friday-ai-backend
   ```
3. **Set environment variables:**
   ```bash
   heroku config:set HF_TOKEN=your_huggingface_token_here
   ```
4. **Deploy:**
   ```bash
   git push heroku main
   ```

## Environment Variables

All deployments require these environment variables:

- `HF_TOKEN`: Your Hugging Face API token
- `PORT`: Server port (optional, platforms usually set this automatically)

## Frontend Integration

After deployment, update your frontend to use the new backend URL:

```javascript
// Replace localhost:5000 with your deployed backend URL
const BACKEND_URL = 'https://your-backend.vercel.app';
```

## Security Notes

✅ **Secure practices:**
- Token stored in backend environment variables
- Frontend never sees the API token
- CORS enabled for frontend communication

⚠️ **Remember:**
- Never commit `.env` files to Git
- Use HTTPS in production
- Monitor API usage and costs
