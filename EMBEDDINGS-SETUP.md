# 🚀 Friday AI - Local Text Embeddings Setup

This guide will help you set up a local Hugging Face Text Embedding Server using Docker, allowing you to generate text embeddings without relying on external APIs.

## 📋 Prerequisites

- **Docker Desktop** installed and running
- **Node.js** (for the Friday AI backend)
- **Git** (for cloning the repository)

## 🐳 Quick Start with Docker Compose

### 1. Start the Embedding Server

**Windows (Batch):**
```bash
start-embeddings.bat
```

**Windows (PowerShell):**
```powershell
.\start-embeddings.ps1
```

**Manual Docker Compose:**
```bash
docker-compose up -d huggingface-embedding-server
```

### 2. Verify the Server is Running

The embedding server will be available at: **http://localhost:8001**

You can test it with:
```bash
curl -X POST http://localhost:8001/embed \
  -H "Content-Type: application/json" \
  -d '{"inputs": "Hello, world!", "normalize": true}'
```

## 🔧 Manual Docker Setup

If you prefer to run the Docker command manually:

```bash
docker run -p 8001:80 -d --rm --name friday-ai-embeddings \
  ghcr.io/huggingface/text-embeddings-inference:cpu-0.3.0 \
  --model-id BAAI/bge-small-en-v1.5 --revision main
```

## 📊 Model Information

- **Model**: `BAAI/bge-small-en-v1.5`
- **Type**: Text Embeddings
- **Dimensions**: 384
- **Language**: English
- **Performance**: Optimized for semantic similarity and retrieval

## 🌐 API Endpoints

### Local Embedding Server (Port 8001)

- **POST** `/embed` - Generate text embeddings
- **GET** `/health` - Health check

### Friday AI Backend (Port 5000)

- **POST** `/api/embed` - Generate embeddings (with fallback)
- **POST** `/api/similarity` - Calculate text similarity
- **GET** `/api/health` - Backend health check

## 🧪 Testing the Setup

1. **Start the embedding server** using one of the methods above
2. **Start the Friday AI backend**:
   ```bash
   cd friday-ai-backend
   npm start
   ```
3. **Open the test page**: `test-embeddings.html`
4. **Test embedding generation** and **text similarity** calculations

## 📝 Example Usage

### Generate Embeddings

```javascript
const response = await fetch('http://localhost:5000/api/embed', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: 'Your text here' })
});

const data = await response.json();
console.log('Embedding dimensions:', data.embeddings[0].length);
```

### Calculate Similarity

```javascript
const response = await fetch('http://localhost:5000/api/similarity', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    text1: 'First text', 
    text2: 'Second text' 
  })
});

const data = await response.json();
console.log('Similarity score:', data.similarity);
```

## 🔄 Fallback Configuration

The system automatically falls back to Hugging Face's API if:
1. Local embedding server is down
2. Local server returns an error
3. You have `HF_TOKEN` configured in your `.env` file

## 🛠️ Troubleshooting

### Common Issues

1. **Port 8001 already in use**
   ```bash
   # Find the process using the port
   netstat -ano | findstr :8001
   
   # Kill the process or change the port in docker-compose.yml
   ```

2. **Docker not running**
   - Start Docker Desktop
   - Wait for it to fully initialize

3. **Out of memory errors**
   - Reduce memory limits in `docker-compose.yml`
   - Close other applications using significant RAM

4. **Model download issues**
   - Check internet connection
   - Verify Docker has access to ghcr.io
   - Clear Docker cache: `docker system prune -a`

### Logs and Debugging

```bash
# View embedding server logs
docker-compose logs -f huggingface-embedding-server

# Check container status
docker ps -a

# Restart the service
docker-compose restart huggingface-embedding-server
```

## 📈 Performance Tips

1. **First run**: The model will download (~100MB) - this may take a few minutes
2. **Memory usage**: The server uses ~2-4GB RAM
3. **CPU**: Multi-threading is automatically enabled
4. **Batch processing**: Send multiple texts in one request for better throughput

## 🔒 Security Considerations

- The local server runs on `localhost` only
- No authentication required for local development
- Consider firewall rules for production deployments
- The model files are cached locally in Docker volumes

## 🚀 Production Deployment

For production use, consider:

1. **Reverse proxy** (nginx, Apache)
2. **Load balancing** for multiple instances
3. **Health checks** and **auto-restart**
4. **Monitoring** and **logging**
5. **Resource limits** and **scaling**

## 📚 Additional Resources

- [Hugging Face Text Embeddings Inference](https://github.com/huggingface/text-embeddings-inference)
- [BGE Model Documentation](https://huggingface.co/BAAI/bge-small-en-v1.5)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Friday AI Project Documentation](README.md)

## 🤝 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review Docker and container logs
3. Verify all prerequisites are met
4. Check the Friday AI backend logs

---

**Happy embedding! 🎉**
