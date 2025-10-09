<<<<<< HEAD
# 🚀 Friday AI - Fullstack Developer Portfolio with AI Integration

A modern, responsive portfolio website featuring AI-powered chat capabilities, built with cutting-edge technologies.

## ✨ Features

- 🤖 **AI Chat Integration** - Powered by Google's Gemma 3 model
- 🎨 **Modern UI/UX** - Responsive design with smooth animations
- 🌐 **Multilingual Support** - English and Japanese
- 📱 **Mobile-First Design** - Optimized for all devices
- 🔒 **Security Features** - Rate limiting, CORS protection, security headers
- 🚀 **Production Ready** - GitHub Actions, Vercel deployment

## 🛠️ Tech Stack

### Frontend
- **HTML5/CSS3** - Semantic markup and modern styling
- **JavaScript (ES6+)** - Vanilla JS with modern features
- **Responsive Design** - CSS Grid, Flexbox, Media Queries
- **Animations** - CSS transitions and JavaScript animations

### Backend
- **Node.js** - Server-side runtime
- **Express.js** - Web framework
- **Hugging Face API** - AI model integration
- **Security Middleware** - Rate limiting, CORS, security headers

### AI & ML
- **Google Gemma 3** - 270M parameter language model
- **Text Embeddings** - BGE model for semantic search
- **Real-time Chat** - Interactive AI conversations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+
- Hugging Face account and API token

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/friday-ai.git
   cd friday-ai
   ```

2. **Install dependencies**
   ```bash
   cd friday-ai-backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the template
   cp env.template .env
   
   # Edit .env with your Hugging Face token
   HF_TOKEN=your_actual_token_here
   ```

4. **Start the backend**
   ```bash
   npm start
   ```

5. **Open the frontend**
   - Open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

## 🌐 Deployment

### GitHub Pages (Frontend)
The frontend automatically deploys to GitHub Pages via GitHub Actions.

### Vercel (Backend)
The backend deploys to Vercel for production API access.

### Required Secrets
Set these in your GitHub repository settings:

- `HF_TOKEN` - Your Hugging Face API token
- `VERCEL_TOKEN` - Vercel deployment token
- `ORG_ID` - Vercel organization ID
- `PROJECT_ID` - Vercel project ID

## 🔧 Configuration

### Environment Variables
```env
# Required
HF_TOKEN=your_huggingface_token

# Optional
PORT=3000
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
```

### CORS Settings
Update `friday-ai-frontend/config.js` with your production backend URL.

## 📁 Project Structure

```
friday-ai/
├── 📁 friday-ai-backend/     # Backend API server
├── 📁 friday-ai-frontend/    # Frontend configuration
├── 📄 index.html             # Main portfolio page
├── 📄 style.css              # Main styles
├── 📄 script.js              # Main functionality
├── 📄 friday-ai-*.js         # AI integration modules
├── 📄 .github/               # GitHub Actions
├── 📄 vercel.json            # Vercel configuration
└── 📄 README.md              # This file
```

## 🔒 Security Features

- **Rate Limiting** - 10 requests per minute per IP
- **Security Headers** - XSS protection, content type validation
- **CORS Protection** - Configurable origin restrictions
- **Input Validation** - Request size limits and sanitization

## 🧪 Testing

### Backend Tests
```bash
cd friday-ai-backend
npm test
```

### Frontend Tests
Open `test-simple.html` in your browser to test API endpoints.

## 🚨 Important Notes

### File Size Limits
- **GitHub**: 100MB file limit
- **Large model files** are excluded from Git (see .gitignore)
- **Personal files** (resumes, photos) are excluded

### AI Model Access
- Requires valid Hugging Face API token
- Model: `google/gemma-3-270m`
- Fallback to local embedding server if available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google** - Gemma 3 language model
- **Hugging Face** - AI model hosting and API
- **Express.js** - Web framework
- **Community** - Open source contributions

## 📞 Support

- **Discussions**: [GitHub Discussions](https://github.com/yourusername/friday-ai/discussions)
- **Email**: biprobiswas15@gmail.com

---

**Made with ❤️ by Bipra Biswas**

*Fullstack Developer & AI Enthusiast*
=======
# AI_Portfolio
Friday
>>>>>>> 54c1ebc9f3ee17437b64851b2ed9c0e31cfcadcb
