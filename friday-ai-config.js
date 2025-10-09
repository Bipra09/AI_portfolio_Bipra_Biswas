// Friday AI Configuration - Easy Mode Switching
// Change the mode below to switch between offline and online

const FRIDAY_AI_CONFIG = {
    // 🚀 MODE SETTINGS - Change this to switch modes
    MODE: 'OFFLINE', // Options: 'OFFLINE' or 'ONLINE'
    
    // 🔧 OFFLINE MODE SETTINGS
    OFFLINE: {
        enabled: true,
        useLocalKnowledgeBase: true,
        noExternalAPIs: true,
        instantResponses: true,
        completePrivacy: true
    },
    
    // 🌐 ONLINE MODE SETTINGS
    ONLINE: {
        enabled: false,
        backendUrl: 'http://localhost:3000',
        useHuggingFace: true,
        useGemma: true,
        fallbackToLocal: true
    },
    
    // 📍 BACKEND CONFIGURATION (for online mode)
    BACKEND: {
        port: 3000,
        corsOrigin: '*',
        hfModel: 'google/gemma-3-270m',
        timeout: 30000
    },
    
    // 🎯 FEATURES CONFIGURATION
    FEATURES: {
        voiceRecognition: true,
        textToSpeech: true,
        animations: true,
        confirmations: true,
        websiteControl: true,
        interactiveActivities: true
    }
};

// 🔄 Mode Switching Functions
const FridayAIModeManager = {
    // Get current mode
    getCurrentMode() {
        return FRIDAY_AI_CONFIG.MODE;
    },
    
    // Check if offline mode is active
    isOfflineMode() {
        return FRIDAY_AI_CONFIG.MODE === 'OFFLINE';
    },
    
    // Check if online mode is active
    isOnlineMode() {
        return FRIDAY_AI_CONFIG.MODE === 'ONLINE';
    },
    
    // Switch to offline mode
    switchToOffline() {
        FRIDAY_AI_CONFIG.MODE = 'OFFLINE';
        FRIDAY_AI_CONFIG.OFFLINE.enabled = true;
        FRIDAY_AI_CONFIG.ONLINE.enabled = false;
        console.log('🔄 Friday AI switched to OFFLINE MODE');
        this.updateUI();
        return 'OFFLINE';
    },
    
    // Switch to online mode
    switchToOnline() {
        FRIDAY_AI_CONFIG.MODE = 'ONLINE';
        FRIDAY_AI_CONFIG.OFFLINE.enabled = false;
        FRIDAY_AI_CONFIG.ONLINE.enabled = true;
        console.log('🌐 Friday AI switched to ONLINE MODE');
        this.updateUI();
        return 'ONLINE';
    },
    
    // Toggle between modes
    toggleMode() {
        if (this.isOfflineMode()) {
            return this.switchToOnline();
        } else {
            return this.switchToOffline();
        }
    },
    
    // Update UI to reflect current mode
    updateUI() {
        const statusElement = document.querySelector('.friday-header .status');
        if (statusElement) {
            if (this.isOfflineMode()) {
                statusElement.textContent = '🔄 Offline Mode - Local Knowledge Base';
                statusElement.style.color = '#00d4ff';
            } else {
                statusElement.textContent = '🌐 Online Mode - AI Backend Connected';
                statusElement.style.color = '#00ff88';
            }
        }
        
        // Update console
        console.log(`🎯 Friday AI Mode: ${this.getCurrentMode()}`);
        console.log(`📊 Features: ${JSON.stringify(FRIDAY_AI_CONFIG.FEATURES)}`);
    },
    
    // Get configuration for current mode
    getConfig() {
        return this.isOfflineMode() ? FRIDAY_AI_CONFIG.OFFLINE : FRIDAY_AI_CONFIG.ONLINE;
    },
    
    // Get backend URL for online mode
    getBackendUrl() {
        if (this.isOnlineMode()) {
            return FRIDAY_AI_CONFIG.ONLINE.backendUrl;
        }
        return null;
    }
};

// 🌟 Quick Mode Switching Commands
window.FridayAIModeManager = FridayAIModeManager;

// Add these commands to Friday AI for easy mode switching
window.FridayAIModeCommands = {
    'switch to offline': () => FridayAIModeManager.switchToOffline(),
    'switch to online': () => FridayAIModeManager.switchToOnline(),
    'toggle mode': () => FridayAIModeManager.toggleMode(),
    'show mode': () => FridayAIModeManager.getCurrentMode(),
    'offline mode': () => FridayAIModeManager.switchToOffline(),
    'online mode': () => FridayAIModeManager.switchToOnline()
};

// 📋 Configuration Summary
console.log('⚙️ Friday AI Configuration Loaded:');
console.log(`🎯 Current Mode: ${FRIDAY_AI_CONFIG.MODE}`);
console.log(`🔧 Offline Features: ${FRIDAY_AI_CONFIG.OFFLINE.enabled ? '✅ Enabled' : '❌ Disabled'}`);
console.log(`🌐 Online Features: ${FRIDAY_AI_CONFIG.ONLINE.enabled ? '✅ Enabled' : '❌ Disabled'}`);
console.log(`🎨 All Features: ${Object.values(FRIDAY_AI_CONFIG.FEATURES).every(f => f) ? '✅ All Enabled' : '⚠️ Some Disabled'}`);

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FRIDAY_AI_CONFIG, FridayAIModeManager };
}
