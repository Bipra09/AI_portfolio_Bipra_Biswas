// Frontend Configuration for Different Environments
const config = {
  // Development (local)
  development: {
    backendUrl: 'http://localhost:3000',
    apiTimeout: 30000,
    enableDebug: true
  },
  
  // Production (GitHub Pages + Vercel)
  production: {
    backendUrl: 'https://your-backend-url.vercel.app', // Update this with your actual backend URL
    apiTimeout: 30000,
    enableDebug: false
  }
};

// Auto-detect environment (treat file:// and empty hostname as development)
const isLocalHost = (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname === '' ||
  window.location.protocol === 'file:'
);

const isProduction = !isLocalHost;

const currentConfig = config[isProduction ? 'production' : 'development'];

// Export configuration
window.FridayAIConfig = currentConfig;

// Helper function to get backend URL
window.getBackendUrl = () => currentConfig.backendUrl;

// Helper function to check if debug is enabled
window.isDebugEnabled = () => currentConfig.enableDebug;

console.log(`🚀 Friday AI Frontend initialized in ${isProduction ? 'production' : 'development'} mode`);
console.log(`🔗 Backend URL: ${currentConfig.backendUrl}`);
