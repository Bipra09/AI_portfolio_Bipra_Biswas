# Friday AI Backend

Backend server for Friday AI with Mistral-7B integration via Hugging Face API.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the root directory with:
   ```
   HF_TOKEN=your_huggingface_token_here
   PORT=5000
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/ask` - Send questions to AI model

### Example usage:
```bash
curl -X POST http://localhost:5000/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is artificial intelligence?"}'
```

## Environment Variables

- `HF_TOKEN`: Your Hugging Face API token (required)
- `PORT`: Server port (optional, defaults to 5000)

## Security

⚠️ **Important**: Never expose your HF_TOKEN in frontend code. Always use this backend as a proxy to call the Hugging Face API securely.
