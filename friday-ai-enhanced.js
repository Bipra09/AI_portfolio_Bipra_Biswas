// Enhanced Friday AI System with EVE-like Features
console.log('🚀 Enhanced Friday AI Loading...');

// Enhanced Friday AI Configuration
const FRIDAY_CONFIG = {
    name: "Friday",
    personality: "Smart, creative, and helpful AI assistant",
    backendUrl: "http://localhost:3000", // Backend server URL
    voice: {
        enabled: true,
        pitch: 1.2,
        rate: 0.9,
        volume: 0.8
    },
    expressions: {
        happy: { mouth: 'smile', eyes: 'wide', cheeks: 'glow' },
        thinking: { mouth: 'neutral', eyes: 'focused', cheeks: 'dim' },
        excited: { mouth: 'open', eyes: 'sparkle', cheeks: 'bright' },
        listening: { mouth: 'small', eyes: 'attentive', cheeks: 'pulse' },
        processing: { mouth: 'neutral', eyes: 'processing', cheeks: 'steady' },
        sleepy: { mouth: 'small', eyes: 'half-closed', cheeks: 'dim' },
        curious: { mouth: 'neutral', eyes: 'wide', cheeks: 'glow' },
        playful: { mouth: 'smile', eyes: 'sparkle', cheeks: 'bright' },
        focused: { mouth: 'neutral', eyes: 'focused', cheeks: 'steady' },
        surprised: { mouth: 'open', eyes: 'wide', cheeks: 'bright' },
        determined: { mouth: 'neutral', eyes: 'focused', cheeks: 'steady' }
    }
};

// Advanced Friday AI Brain
class FridayAI {
    constructor() {
        // Initialize Friday AI with personality and capabilities
        this.name = 'Friday';
        this.personality = 'friendly, helpful, and enthusiastic';
        this.capabilities = ['portfolio information', 'website control', 'creative responses', 'file downloads'];
        
        // State management for conversation flow
        this.lastQuestion = null;
        this.waitingForConfirmation = false;
        this.lastProject = null;
        this.waitingForProjectDetail = false;
        
        // Website control states
        this.lastNavigationRequest = null;
        this.waitingForNavigationConfirmation = false;
        this.lastThemeRequest = null;
        this.waitingForThemeConfirmation = false;
        this.lastLanguageRequest = null;
        this.waitingForLanguageConfirmation = false;
        this.lastDownloadRequest = null;
        this.waitingForDownloadConfirmation = false;
        this.lastFileDownloadRequest = null;
        this.waitingForFileDownloadConfirmation = false;
        
        // Download states
        this.availableFiles = null;
        this.waitingForFileSelection = false;
        
        this.isProcessing = false;
        this.voiceEnabled = true;
        this.speechSynthesis = window.speechSynthesis;
        this.recognition = null;
        this.isListening = false;
        this.currentExpression = 'happy';
        this.cursorPosition = { x: 0, y: 0 };
        this.eyeTrackingEnabled = true;
        this.backendConnected = false;
        this.isSpeaking = false;
        this.currentUtterance = null;
        
        this.initializeVoice();
        this.initializeSpeechRecognition();
        this.initializeEyeTracking();
        this.initializeExpressionSystem();
        this.checkBackendConnection();
        
        console.log('🧠 Enhanced Friday AI Brain Ready - OFFLINE MODE ONLY');
    }
    
    async checkBackendConnection() {
        // OFFLINE MODE ONLY - No backend connection needed
        this.backendConnected = false;
        console.log('🔄 Friday AI running in OFFLINE MODE - no backend connection required');
    }
    
    initializeVoice() {
        // Voice system ready but no automatic speech
        console.log('🎤 Voice system initialized - speech only on demand');
    }
    
    initializeSpeechRecognition() {
        try {
            console.log('🎤 ===== SPEECH RECOGNITION INITIALIZATION DEBUG =====');
            console.log('🎤 Initializing speech recognition...');
            console.log('🎤 webkitSpeechRecognition available:', 'webkitSpeechRecognition' in window);
            console.log('🎤 SpeechRecognition available:', 'SpeechRecognition' in window);
            console.log('🎤 User agent:', navigator.userAgent);
            console.log('🎤 Browser permissions:', navigator.permissions);
            
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                console.log('🎤 Creating SpeechRecognition instance...');
                
                try {
            this.recognition = new SpeechRecognition();
                    console.log('🎤 SpeechRecognition instance created successfully');
                    
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';
                    
                    console.log('🎤 Setting up speech recognition event handlers...');
            
            this.recognition.onresult = (event) => {
                        try {
                            console.log('🎤 Speech recognition result event:', event);
                const transcript = event.results[0][0].transcript;
                            console.log('🎤 Voice input received:', transcript);
                this.handleVoiceInput(transcript);
                        } catch (error) {
                            console.error('❌ Error processing voice result:', error);
                        }
            };
            
            this.recognition.onerror = (event) => {
                        console.error('❌ Voice recognition error:', event.error);
                        console.error('❌ Error details:', event);
                        this.isListening = false;
                        if (this.chatInterface && this.chatInterface.updateVoiceButton) {
                            this.chatInterface.updateVoiceButton(false);
                        }
                    };
                    
                    this.recognition.onstart = () => {
                        console.log('🎤 Voice recognition started');
                        this.isListening = true;
                        if (this.chatInterface && this.chatInterface.updateVoiceButton) {
                            this.chatInterface.updateVoiceButton(true);
                        }
                    };
                    
                    this.recognition.onend = () => {
                        console.log('🎤 Voice recognition ended');
                        this.isListening = false;
                        if (this.chatInterface && this.chatInterface.updateVoiceButton) {
                            this.chatInterface.updateVoiceButton(false);
                        }
                    };
                    
                    console.log('✅ Speech recognition initialized successfully');
                    console.log('🎤 Recognition object:', this.recognition);
                    console.log('🎤 Recognition properties:', {
                        continuous: this.recognition.continuous,
                        interimResults: this.recognition.interimResults,
                        lang: this.recognition.lang
                    });
                    
                } catch (recognitionError) {
                    console.error('❌ Error creating SpeechRecognition instance:', recognitionError);
                    throw recognitionError;
                }
                
            } else {
                console.warn('⚠️ Speech recognition not supported in this browser');
                console.warn('⚠️ This might be due to:');
                console.warn('⚠️ - Browser not supporting speech recognition');
                console.warn('⚠️ - HTTPS required (speech recognition needs secure context)');
                console.warn('⚠️ - Browser permissions blocked');
            }
            
            console.log('🎤 ===== SPEECH RECOGNITION INITIALIZATION DEBUG END =====');
            
        } catch (error) {
            console.error('❌ Error initializing speech recognition:', error);
            console.error('❌ Error stack:', error.stack);
        }
    }
    
    speak(text) {
        if (this.speechSynthesis && this.voiceEnabled) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = FRIDAY_CONFIG.voice.rate;
            utterance.pitch = FRIDAY_CONFIG.voice.pitch;
            utterance.volume = FRIDAY_CONFIG.voice.volume;
            
            // Get available voices and select a female voice
            const voices = this.speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice => 
                voice.name.includes('female') || 
                voice.name.includes('Female') ||
                voice.name.includes('Samantha') ||
                voice.name.includes('Victoria')
            );
            
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            
            // Track speaking state
            this.isSpeaking = true;
            this.currentUtterance = utterance;
            
            // Handle speech end
            utterance.onend = () => {
                this.isSpeaking = false;
                this.currentUtterance = null;
            };
            
            utterance.onerror = () => {
                this.isSpeaking = false;
                this.currentUtterance = null;
            };
            
            this.speechSynthesis.speak(utterance);
        }
    }
    
    stopSpeaking() {
        if (this.speechSynthesis && this.isSpeaking) {
            this.speechSynthesis.cancel();
            this.isSpeaking = false;
            this.currentUtterance = null;
        }
    }
    
    startListening() {
        try {
            console.log('🎤 startListening called');
            console.log('🎤 Recognition object available:', !!this.recognition);
            console.log('🎤 Current listening state:', this.isListening);
            console.log('🎤 Chat interface available:', !!this.chatInterface);
            
        if (this.recognition && !this.isListening) {
                console.log('🎤 Starting speech recognition...');
            this.recognition.start();
                console.log('🎤 Speech recognition start() called');
            } else if (!this.recognition) {
                console.error('❌ Speech recognition not available');
                if (this.chatInterface && this.chatInterface.addMessage) {
                    this.chatInterface.addMessage('friday', "I'm sorry, voice recognition is not available in your browser. Please type your message instead.");
                }
            } else if (this.isListening) {
                console.log('🎤 Already listening...');
            }
        } catch (error) {
            console.error('❌ Error starting voice recognition:', error);
            this.isListening = false;
            if (this.chatInterface && this.chatInterface.updateVoiceButton) {
                this.chatInterface.updateVoiceButton(false);
            }
        }
    }
    
    stopListening() {
        try {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
                console.log('🔇 Stopping voice recognition...');
            }
        } catch (error) {
            console.error('❌ Error stopping voice recognition:', error);
        }
    }
    
    handleVoiceInput(transcript) {
        console.log('🎤 Voice input received:', transcript);
        console.log('🎤 Chat interface available:', !!this.chatInterface);
        console.log('🎤 AddMessage method available:', !!(this.chatInterface && this.chatInterface.addMessage));
        
        // Add the voice input to the chat interface
        if (this.chatInterface && this.chatInterface.addMessage) {
            console.log('✅ Adding voice input to chat interface');
            // Add user's voice message to chat
            this.chatInterface.addMessage('user', transcript);
            
            // Process the query and get AI response
            this.processQuery(transcript).then(async (response) => {
                if (response) {
                    console.log('✅ AI response received, adding to chat');
                    // Add AI response to chat
                    this.chatInterface.addMessage('friday', response);
                }
            }).catch(error => {
                console.error('❌ Error processing voice input:', error);
                // Add error message to chat
                this.chatInterface.addMessage('friday', "I'm sorry, I couldn't process your voice input. Please try typing your message instead.");
            });
        } else {
            console.log('❌ Chat interface not available, using fallback');
            // Fallback: just process the query
        this.processQuery(transcript);
        }
    }
    
    initializeEyeTracking() {
        if (this.eyeTrackingEnabled) {
            document.addEventListener('mousemove', (e) => {
                this.cursorPosition = { x: e.clientX, y: e.clientY };
                this.updateEyePosition();
                this.updateExpressionBasedOnCursor();
            });
            
            // Add click tracking for more expressions
            document.addEventListener('click', (e) => {
                this.handleClickExpression(e);
            });
            
            // Add scroll tracking for dynamic expressions
            document.addEventListener('scroll', () => {
                this.updateExpressionBasedOnScroll();
            });
            
            // Initialize eye position
            this.updateEyePosition();
            console.log('👁️ Enhanced eye tracking initialized');
        }
    }
    
    updateExpressionBasedOnCursor() {
        const orb = document.getElementById('friday-ai-button');
        if (!orb) return;
        
        const orbRect = orb.getBoundingClientRect();
        const orbCenterX = orbRect.left + orbRect.width / 2;
        const orbCenterY = orbRect.top + orbRect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(this.cursorPosition.x - orbCenterX, 2) + 
            Math.pow(this.cursorPosition.y - orbCenterY, 2)
        );
        
        // Change expression based on cursor proximity - more subtle
        if (distance < 50) {
            this.setExpression('excited');
            orb.classList.add('cursor-tracking');
            // Return to happy quickly
            setTimeout(() => {
        this.setExpression('happy');
            }, 1000);
        } else if (distance < 150) {
            this.setExpression('happy');
            orb.classList.add('cursor-tracking');
        } else {
            orb.classList.remove('cursor-tracking');
            // Return to default happy expression quickly
            setTimeout(() => {
                if (distance > 200) {
                    this.setExpression('happy');
                }
            }, 500);
        }
    }
    
    handleClickExpression(e) {
        // Make AI orb react to clicks
        const orb = document.getElementById('friday-ai-button');
        if (!orb) return;
        
        orb.classList.add('expression-changing');
        this.setExpression('excited');
        
        // Remove the animation class after animation completes
        setTimeout(() => {
            orb.classList.remove('expression-changing');
        }, 500);
        
        // Return to happy expression after excitement - faster
        setTimeout(() => {
            this.setExpression('happy');
        }, 1000);
    }
    
    updateExpressionBasedOnScroll() {
        // Change expression based on scroll activity
        if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
        
        this.setExpression('thinking');
        
        this.scrollTimeout = setTimeout(() => {
            this.setExpression('happy');
        }, 1000);
    }
    
    updateEyePosition() {
        const leftEye = document.querySelector('.ai-eye.left .eye-pupil');
        const rightEye = document.querySelector('.ai-eye.right .eye-pupil');
        const leftIris = document.querySelector('.ai-eye.left .eye-iris');
        const rightIris = document.querySelector('.ai-eye.right .eye-iris');
        
        if (leftEye && rightEye && leftIris && rightIris) {
            const orb = document.getElementById('friday-ai-button');
            if (orb) {
                const orbRect = orb.getBoundingClientRect();
                const orbCenterX = orbRect.left + orbRect.width / 2;
                const orbCenterY = orbRect.top + orbRect.height / 2;
                
                const deltaX = this.cursorPosition.x - orbCenterX;
                const deltaY = this.cursorPosition.y - orbCenterY;
                
                // Very minimal eye movement - barely noticeable
                const maxMove = 2; // Reduced from 4 to 2
                const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * 0.02)); // Reduced from 0.05 to 0.02
                const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * 0.02)); // Reduced from 0.05 to 0.02
                
                // Apply very gentle eye movement
                leftEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
                rightEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
                
                // Iris follows with even more minimal movement
                setTimeout(() => {
                    leftIris.style.transform = `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`; // Reduced from 0.3 to 0.1
                    rightIris.style.transform = `translate(${moveX * 0.1}px, ${moveY * 0.1}px)`; // Reduced from 0.3 to 0.1
                }, 150); // Increased delay for smoother effect
                
                // Very subtle eye glow effect
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                if (distance < 40) { // Reduced from 60 to 40
                    leftEye.style.boxShadow = '0 0 4px rgba(255, 255, 255, 0.3)'; // Very subtle
                    rightEye.style.boxShadow = '0 0 4px rgba(255, 255, 255, 0.3)'; // Very subtle
                    
                    // Very gentle eye glow
                    const leftGlow = document.querySelector('.ai-eye.left .eye-glow');
                    const rightGlow = document.querySelector('.ai-eye.right .eye-glow');
                    if (leftGlow && rightGlow) {
                        leftGlow.style.opacity = '0.3'; // Reduced from 0.5 to 0.3
                        rightGlow.style.opacity = '0.3'; // Reduced from 0.5 to 0.3
                    }
                } else if (distance < 80) { // Reduced from 120 to 80
                    leftEye.style.boxShadow = '0 0 2px rgba(255, 255, 255, 0.2)'; // Very subtle
                    rightEye.style.boxShadow = '0 0 2px rgba(255, 255, 255, 0.2)'; // Very subtle
                    
                    const leftGlow = document.querySelector('.ai-eye.left .eye-glow');
                    const rightGlow = document.querySelector('.ai-eye.right .eye-glow');
                    if (leftGlow && rightGlow) {
                        leftGlow.style.opacity = '0.2'; // Reduced from 0.3 to 0.2
                        rightGlow.style.opacity = '0.2'; // Reduced from 0.3 to 0.2
                    }
                } else {
                    leftEye.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.1)'; // Barely visible
                    rightEye.style.boxShadow = '0 0 1px rgba(255, 255, 255, 0.1)'; // Barely visible
                    
                    const leftGlow = document.querySelector('.ai-eye.left .eye-glow');
                    const rightGlow = document.querySelector('.ai-eye.right .eye-glow');
                    if (leftGlow && rightGlow) {
                        leftGlow.style.opacity = '0'; // No glow when far
                        rightGlow.style.opacity = '0'; // No glow when far
                    }
                }
                
                // No head tilt - keep it stable
                orb.style.transform = 'translateZ(0)';
            }
        }
    }
    
    initializeExpressionSystem() {
        // Set initial expression
        this.setExpression('happy');
        
        // Start expression animation loop
        setInterval(() => {
            this.updateExpressionBasedOnState();
        }, 2000);
        
        console.log('😊 Expression system initialized');
    }
    
    updateExpressionBasedOnState() {
        // Enhanced expression system with mood changes - more happy, less random
        const currentTime = new Date().getHours();
        const isNight = currentTime < 6 || currentTime > 22;
        const isBusy = this.isProcessing || this.isListening || this.isSpeaking;
        
        if (isBusy) {
            if (this.isListening) {
                this.setExpression('listening');
            } else if (this.isSpeaking) {
                this.setExpression('excited');
            } else if (this.isProcessing) {
                this.setExpression('thinking');
            }
        } else if (isNight) {
            // Night mode - sleepy expression
            this.setExpression('sleepy');
        } else {
            // Day mode - happy and alert (default)
            this.setExpression('happy');
        }
        
        // Reduced random mood changes for more stable happy expression
        if (Math.random() < 0.05) { // Reduced from 10% to 5% chance
            const moods = ['curious', 'playful']; // Removed 'focused' for more friendly moods
            const randomMood = moods[Math.floor(Math.random() * moods.length)];
            this.setExpression(randomMood);
            
            // Return to happy more quickly
            setTimeout(() => {
                if (!this.isProcessing && !this.isListening && !this.isSpeaking) {
                    this.setExpression('happy');
                }
            }, 2000); // Reduced from 3000 to 2000ms
        }
    }
    
    setExpression(expressionType) {
        if (FRIDAY_CONFIG.expressions[expressionType]) {
            this.currentExpression = expressionType;
            const expression = FRIDAY_CONFIG.expressions[expressionType];
            
            // Add expression change animation with neon effect
            const orb = document.getElementById('friday-ai-button');
            if (orb) {
                orb.classList.add('expression-changing');
                setTimeout(() => {
                    orb.classList.remove('expression-changing');
                }, 500);
            }
            
            // Update mouth expression with neon glow
            const mouthExpression = document.querySelector('.mouth-expression');
            if (mouthExpression) {
                mouthExpression.className = `mouth-expression ${expression.mouth}`;
                // Add neon glow effect
                mouthExpression.style.boxShadow = '0 0 12px rgba(0, 255, 136, 0.6)';
            }
            
            // Enhanced eye expressions with neon effects
            const leftEye = document.querySelector('.ai-eye.left');
            const rightEye = document.querySelector('.ai-eye.right');
            if (leftEye && rightEye) {
                leftEye.className = `ai-eye left ${expression.eyes}`;
                rightEye.className = `ai-eye right ${expression.eyes}`;
                
                // Add neon glow to eyes
                leftEye.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.3)';
                rightEye.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.3)';
                
                // Add special eye effects for certain expressions
                if (expression.eyes === 'sparkle') {
                    this.addNeonEyeSparkle(leftEye);
                    this.addNeonEyeSparkle(rightEye);
                }
                if (expression.eyes === 'processing') {
                    this.addNeonEyeProcessing(leftEye);
                    this.addNeonEyeProcessing(rightEye);
                }
            }
            
            // Enhanced cheek expressions with neon glow
            const leftCheek = document.querySelector('.cheek.left');
            const rightCheek = document.querySelector('.cheek.right');
            if (leftCheek && rightCheek) {
                leftCheek.className = `cheek left ${expression.cheeks}`;
                rightCheek.className = `cheek right ${expression.cheeks}`;
                
                // Add neon glow to cheeks
                leftCheek.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.6)';
                rightCheek.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.6)';
            }
            
            // Update status lights with neon effects
            this.updateStatusLights(expressionType);
            
            // Add neon particle effects for excited expression
            if (expressionType === 'excited') {
                this.createNeonParticleBurst();
            }
            
            console.log(`😊 Expression changed to: ${expressionType} with neon effects`);
        }
    }
    
    addNeonEyeSparkle(eye) {
        // Add neon sparkle effect to eyes
        const sparkle = document.createElement('div');
        sparkle.className = 'eye-sparkle-neon';
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #00ff88;
            border-radius: 50%;
            top: -3px;
            right: -3px;
            box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
            animation: neonSparkle 1.5s ease-in-out infinite;
            z-index: 10;
        `;
        eye.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1500);
    }
    
    addNeonEyeProcessing(eye) {
        // Add neon processing effect to eyes
        const processing = document.createElement('div');
        processing.className = 'eye-processing-neon';
        processing.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-top: 2px solid #00ff88;
            border-radius: 50%;
            box-shadow: 0 0 15px rgba(0, 255, 136, 0.6);
            animation: neonEyeProcessing 2s linear infinite;
            z-index: 5;
        `;
        eye.appendChild(processing);
        
        // Remove processing effect after animation
        setTimeout(() => {
            if (processing.parentNode) {
                processing.parentNode.removeChild(processing);
            }
        }, 2000);
    }
    
    createNeonParticleBurst() {
        // Create neon particle burst effect around the orb
        const orb = document.getElementById('friday-ai-button');
        if (!orb) return;
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'orb-particle-neon';
            particle.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: #00ff88;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                box-shadow: 0 0 10px rgba(0, 255, 136, 0.8);
                animation: neonParticleBurst 1.5s ease-out forwards;
            `;
            
            // Position particles around the orb
            const angle = (i / 12) * Math.PI * 2;
            const distance = 50;
            const startX = orb.offsetLeft + orb.offsetWidth / 2;
            const startY = orb.offsetTop + orb.offsetHeight / 2;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            // Set animation variables
            particle.style.setProperty('--end-x', Math.cos(angle) * distance + 'px');
            particle.style.setProperty('--end-y', Math.sin(angle) * distance + 'px');
            
            document.body.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1500);
        }
    }
    
    updateStatusLights(expressionType) {
        // Clean status lights - NO ANIMATIONS to prevent pulsing
        const powerLight = document.querySelector('.status-light.power');
        const processingLight = document.querySelector('.status-light.processing');
        const listeningLight = document.querySelector('.status-light.listening');
        
        if (powerLight) {
            powerLight.style.background = '#10b981';
            powerLight.style.boxShadow = '0 2px 6px rgba(16, 185, 129, 0.4)';
            powerLight.style.animation = 'none'; // No animations
        }
        
        if (processingLight) {
            if (expressionType === 'thinking' || expressionType === 'processing') {
                processingLight.style.background = '#3b82f6';
                processingLight.style.animation = 'none'; // No animations
            } else {
                processingLight.style.background = '#666';
                processingLight.style.animation = 'none';
            }
        }
        
        if (listeningLight) {
            if (expressionType === 'listening') {
                listeningLight.style.background = '#f59e0b';
                listeningLight.style.animation = 'none'; // No animations
            } else {
                listeningLight.style.background = '#666';
                listeningLight.style.animation = 'none';
            }
        }
    }
    
    async processQuery(query) {
        if (this.isProcessing) return "I'm thinking about your previous question! Please wait.";
        
        this.isProcessing = true;
        this.setExpression('processing');
        console.log('🤔 Processing:', query, `(${this.backendConnected ? 'ONLINE' : 'OFFLINE'} MODE)`);
        
        try {
            let response;
            
            if (this.backendConnected) {
                // ONLINE MODE - Try backend/Hugging Face first, fallback to local
                console.log('🌐 Attempting online AI response...');
                response = await this.getOnlineAIResponse(query);
                
                if (!response) {
                    console.log('⚠️ Online AI unavailable, falling back to local knowledge base');
                    response = await this.generateSmartResponse(query);
                }
            } else {
                // OFFLINE MODE - Use local knowledge base only
                console.log('📱 Using local knowledge base');
                response = await this.generateSmartResponse(query);
            }
            
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
            
            this.isProcessing = false;
            this.setExpression('happy');
            return response;
            
        } catch (error) {
            this.isProcessing = false;
            this.setExpression('thinking');
            console.error('Friday AI Error:', error);
            return "I'm having a creative moment! Let me think of something else to help you with.";
        }
    }
    
    async getOnlineAIResponse(query) {
        try {
            // Try backend server first
            const backendResponse = await this.askBackendAI(query);
            if (backendResponse) {
                console.log('✅ Got response from backend server');
                return backendResponse;
            }
            
            // Fallback to Hugging Face Gamma AI
            const huggingFaceResponse = await this.askHuggingFaceAI(query);
            if (huggingFaceResponse) {
                console.log('✅ Got response from Hugging Face Gamma AI');
                return huggingFaceResponse;
            }
            
            return null;
        } catch (error) {
            console.error('❌ Online AI Error:', error);
            return null;
        }
    }
    
    async askBackendAI(query) {
        if (!this.backendConnected) {
            console.log('🔄 Friday AI running in OFFLINE MODE - using local knowledge base only');
            return null;
        }
        
        try {
            console.log('🌐 Connecting to backend server...');
            const response = await fetch(`${FRIDAY_CONFIG.backendUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: query,
                    context: 'portfolio-assistant'
                }),
                timeout: 10000 // 10 second timeout
            });
            
            if (!response.ok) {
                throw new Error(`Backend server error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.response || data.message || null;
            
        } catch (error) {
            console.error('❌ Backend server error:', error);
            return null;
        }
    }
    
    async askHuggingFaceAI(query) {
        try {
            console.log('🤗 Connecting to Hugging Face Gamma AI...');
            
            // Using Hugging Face Inference API with Gamma model
            const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-large', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer YOUR_HUGGINGFACE_TOKEN_HERE', // Add your HF token in .env file
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: `Context: You are Friday, an AI assistant for Bipra Biswas's portfolio website. You help visitors learn about his projects, skills, and experience in AI and fullstack development.\n\nUser: ${query}\nFriday:`,
                    parameters: {
                        max_length: 200,
                        temperature: 0.7,
                        do_sample: true,
                        pad_token_id: 50256
                    }
                }),
                timeout: 15000 // 15 second timeout
            });
            
            if (!response.ok) {
                throw new Error(`Hugging Face API error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.error) {
                throw new Error(`Hugging Face API error: ${data.error}`);
            }
            
            // Extract response text
            if (data.generated_text) {
                const generatedText = data.generated_text;
                const fridayResponse = generatedText.split('Friday:').pop().trim();
                return fridayResponse || null;
            }
            
            return null;
            
        } catch (error) {
            console.error('❌ Hugging Face API error:', error);
            return null;
        }
    }
    
    async generateSmartResponse(query) {
        const queryLower = query.toLowerCase();
        
        // FRIDAY OFFLINE AI INSTRUCTION SET - Comprehensive Knowledge Base
        
        // Check if this is a follow-up to a previous question
        if (this.lastQuestion && this.waitingForConfirmation) {
            return this.handleConfirmationResponse(queryLower);
        }
        
        // Check if this is a project detail request
        if (this.lastProject && this.waitingForProjectDetail) {
            return this.handleProjectDetailResponse(queryLower);
        }
        
        // Check if this is a website control confirmation
        if (this.lastNavigationRequest && this.waitingForNavigationConfirmation) {
            return this.handleNavigationConfirmation(queryLower);
        }
        
        if (this.lastThemeRequest && this.waitingForThemeConfirmation) {
            return this.handleThemeConfirmation(queryLower);
        }
        
        if (this.lastLanguageRequest && this.waitingForLanguageConfirmation) {
            return this.handleLanguageConfirmation(queryLower);
        }
        
        if (this.lastDownloadRequest && this.waitingForDownloadConfirmation) {
            return this.handleDownloadConfirmation(queryLower);
        }
        
        if (this.lastFileDownloadRequest && this.waitingForFileDownloadConfirmation) {
            return this.handleFileDownloadConfirmation(queryLower);
        }
        
        // Check if waiting for file selection after download mode activation
        if (this.waitingForFileSelection && this.availableFiles) {
            return this.handleFileSelection(query);
        }
        
        // PERSONAL INFORMATION
        if (this.matchesKeywords(queryLower, ['name', 'who is bipra', 'personal', 'about', 'bipra'])) {
            this.lastQuestion = 'personal';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's personal details? (Yes/No)";
        }
        
        // EDUCATION
        if (this.matchesKeywords(queryLower, ['education', 'school', 'college', 'graduation', 'cgpa', 'marks', 'degree'])) {
            this.lastQuestion = 'education';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's education? (Yes/No)";
        }
        
        // PROJECTS
        if (this.matchesKeywords(queryLower, ['projects', 'project', 'work', 'portfolio', 'built', 'created'])) {
            this.lastQuestion = 'projects';
            this.waitingForConfirmation = true;
            return "Are you asking for Mr. Bipra's projects? (Yes/No)";
        }
        
        // Check for specific project names
        if (this.matchesKeywords(queryLower, ['safeout', 'health', 'advisory'])) {
            return this.handleProjectQuestion('SafeOut');
        }
        if (this.matchesKeywords(queryLower, ['whiteboard', 'handwriting', 'drawing'])) {
            return this.handleProjectQuestion('Virtual Whiteboard');
        }
        if (this.matchesKeywords(queryLower, ['obstacle', 'bot', 'ros', 'robot'])) {
            return this.handleProjectQuestion('Walking Obstacle Detecting Bot');
        }
        if (this.matchesKeywords(queryLower, ['facial', 'emotion', 'recognition'])) {
            return this.handleProjectQuestion('Facial Recognition');
        }
        if (this.matchesKeywords(queryLower, ['visionx', 'surveillance', 'video'])) {
            return this.handleProjectQuestion('VisionX');
        }
        if (this.matchesKeywords(queryLower, ['smart lock', 'lock', 'iot', 'tcs'])) {
            return this.handleProjectQuestion('Digital Smart Lock');
        }
        
        // CERTIFICATIONS
        if (this.matchesKeywords(queryLower, ['certificates', 'certification', 'achievements', 'certified'])) {
            this.lastQuestion = 'certifications';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's certifications? (Yes/No)";
        }
        
        // EXPERIENCE
        if (this.matchesKeywords(queryLower, ['experience', 'internship', 'work history', 'job'])) {
            this.lastQuestion = 'experience';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's experience? (Yes/No)";
        }
        
        // SKILLS
        if (this.matchesKeywords(queryLower, ['skills', 'technical', 'abilities', 'technology', 'tech'])) {
            this.lastQuestion = 'skills';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's skills? (Yes/No)";
        }
        
        // EXTRA-CURRICULAR
        if (this.matchesKeywords(queryLower, ['extra', 'activities', 'clubs', 'leadership'])) {
            this.lastQuestion = 'extracurricular';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's extracurricular activities? (Yes/No)";
        }
        
        // LANGUAGES
        if (this.matchesKeywords(queryLower, ['languages', 'language', 'speak', 'japanese', 'hindi', 'bengali'])) {
            this.lastQuestion = 'languages';
            this.waitingForConfirmation = true;
            return "Are you asking about Mr. Bipra's languages? (Yes/No)";
        }
        
        // INTERACTIVE ACTIVITIES
        if (this.matchesKeywords(queryLower, ['joke', 'funny', 'laugh', 'humor'])) {
            this.lastQuestion = 'joke';
            this.waitingForConfirmation = true;
            return "Do you want to hear a joke? (Yes/No)";
        }
        
        if (this.matchesKeywords(queryLower, ['riddle', 'puzzle', 'brain teaser'])) {
            this.lastQuestion = 'riddle';
            this.waitingForConfirmation = true;
            return "Do you want me to ask a riddle? (Yes/No)";
        }
        
        if (this.matchesKeywords(queryLower, ['quote', 'motivation', 'inspire', 'inspirational'])) {
            this.lastQuestion = 'quote';
            this.waitingForConfirmation = true;
            return "Do you want to hear an inspirational quote? (Yes/No)";
        }
        
        if (this.matchesKeywords(queryLower, ['fact', 'random fact', 'interesting', 'trivia'])) {
            this.lastQuestion = 'fact';
            this.waitingForConfirmation = true;
            return "Do you want to hear an interesting fact? (Yes/No)";
        }
        
        // OFFLINE GAMES
        if (this.matchesKeywords(queryLower, ['guess number', 'number game', 'number guessing'])) {
            this.lastQuestion = 'guessNumber';
            this.waitingForConfirmation = true;
            return "Do you want to play 'Guess the Number'? (Yes/No)";
        }
        
        if (this.matchesKeywords(queryLower, ['rock paper scissors', 'rps', 'play rps', 'rock, paper, scissors'])) {
            this.lastQuestion = 'rps';
            this.waitingForConfirmation = true;
            return "Do you want to play Rock-Paper-Scissors? (Yes/No)";
        }
        
        if (this.matchesKeywords(queryLower, ['quiz', 'question game', 'trivia game'])) {
            this.lastQuestion = 'quiz';
            this.waitingForConfirmation = true;
            return "Do you want to play a quick quiz? (Yes/No)";
        }
        
        // WEBSITE CONTROL FEATURES (keep existing functionality)
        if (this.matchesKeywords(queryLower, ['scroll', 'move', 'navigate', 'go to'])) {
            return this.handleNavigation(query);
        }
        
        // Theme and language changes - handled with confirmation system
        if (this.matchesKeywords(queryLower, ['theme', 'dark', 'light', 'color scheme', 'darkmode', 'lightmode'])) {
            return this.handleThemeChange(query);
        }
        
        if (this.matchesKeywords(queryLower, ['language', 'translate', 'japanese', 'english', 'nihongo', 'eigo'])) {
            return this.handleLanguageChange(query);
        }
        
        // DOWNLOAD MODE
        const downloadResponse = this.handleDownloadRequest(query);
        if (downloadResponse) {
            return downloadResponse;
        }
        
        // Creative general responses
        if (this.matchesKeywords(queryLower, ['hello', 'hi', 'hey', 'greeting'])) {
            return this.getCreativeGreeting();
        }
        
        if (this.matchesKeywords(queryLower, ['how are you', 'how do you feel', 'mood'])) {
            return this.getCreativeMoodResponse();
        }
        
        if (this.matchesKeywords(queryLower, ['what can you do', 'capabilities', 'help'])) {
            return this.getCreativeCapabilitiesResponse();
        }
        
        return this.getCreativeDefaultResponse(query);
    }
    
    // Handle confirmation responses (Yes/No answers)
    handleConfirmationResponse(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can help you better.";
        }
        
        if (isNo) {
            this.resetQuestionState();
            return "Sorry, I don't have that information other than Mr. Bipra.";
        }
        
        // User said YES, provide the information
        this.waitingForConfirmation = false;
        return this.provideDetailedInformation(this.lastQuestion);
    }
    
    // Handle project detail responses
    handleProjectDetailResponse(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can explain the project details.";
        }
        
        if (isNo) {
            this.resetQuestionState();
            return "Sorry, I don't have that information other than Mr. Bipra.";
        }
        
        // User said YES, provide project details
        this.waitingForProjectDetail = false;
        return this.provideProjectDetails(this.lastProject);
    }
    
    // Provide detailed information based on question type
    provideDetailedInformation(questionType) {
        switch (questionType) {
            case 'personal':
                return `**Mr. Bipra's Personal Details:**
                
- **Full Name**: Bipra Biswas
- **Date of Birth**: 30th September 2001 (Age 23 as of Aug 2025)
- **Gender**: Male
- **Nationality**: Indian, Permanent Resident in Japan
- **Current Address**: Tokyo-to, Koto-ku, Oojima 4-1-9-301, JKK Complex
- **Phone**: +81 80-7074-5577
- **Email**: bipra.biswas309@gmail.com / biprobiswas15@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/bipra-biswas-b1a1b727a

Is there anything specific about his personal details you'd like to know?`;
                
            case 'education':
                return `**Mr. Bipra's Educational Journey:**
                
- **2009**: Admitted to Ashikaga City Elementary School (Japan)
- **2010**: Transferred to Ranghat Anchal School (India)
- **2012**: Returned to Ashikaga City Elementary School
- **2013**: Graduated from Elementary School (Japan)
- **2014**: Joined Global Indian International School (Japan)
- **2016**: Withdrew from GIIS
- **2016**: Joined Kalyani Public School (India)
- **2017**: Completed Middle School at Kalyani Public School
- **2017**: Joined India International School in Japan
- **2019**: Class 10th result: 80% (India International School in Japan)
- **2021**: Graduated High School, India International School in Japan with 82% (Class 12)
- **2021-2025**: B.Tech in Computer Science and Engineering with specialization in AI & Robotics, Vellore Institute of Technology
- **CGPA**: 7.6/10
- **Graduation expected**: May 2025

His educational journey spans both Japan and India, giving him a unique international perspective!`;
                
            case 'projects':
                return `**Mr. Bipra's Amazing Projects:**
                
1. **SafeOut**: Smart Health Advisory System
2. **Virtual Whiteboard** using Machine Learning
3. **Walking Obstacle Detecting Bot** using ROS
4. **Facial Recognition & Emotion Detection** System
5. **VisionX**: AI-Powered Video Surveillance System
6. **Digital Smart Lock System** (IoT, Internship TCS Japan)

**Which project do you want to know more about?** (Just type the project name or number)`;
                
            case 'certifications':
                return `**Mr. Bipra's Professional Certifications:**
                
- **Microsoft Certified**: Azure Fundamentals (2024)
- **IIT Bombay Certified Java** (2024)
- **IIT Bombay Certified PHP & MySQL** (2024)
- **NSDC Certified Python Programmer** (2025)

He's continuously upgrading his skills with industry-recognized certifications!`;
                
            case 'experience':
                return `**Mr. Bipra's Professional Experience:**
                
**Academic Collaboration Internship (Unofficial)**
- **Company**: Tata Consultancy Services (TCS) Japan
- **Duration**: Oct-Nov 2023
- **Role**: IoT Systems Developer (Mentored by TCS employee)
- **Key Work**: Built Smart Lock IoT system, embedded hardware-software integration

This internship gave him valuable real-world experience in IoT development!`;
                
            case 'skills':
                return `**Mr. Bipra's Technical Skills:**
                
**Programming Languages**: C, Python, SQL, HTML, CSS, JavaScript, R
**Libraries & Frameworks**: Pandas, Numpy, Matplotlib, Scikit-Learn
**Technologies**: DSA, Web Development, Machine Learning, Neural Networks, AI, OOP, SDLC
**Tools**: VS Code, Tableau, Power BI, Jupyter Notebook

He's a full-stack developer with strong AI/ML expertise!`;
                
            case 'extracurricular':
                return `**Mr. Bipra's Extracurricular Activities:**
                
**Head, Venture Capitalist Club (NexSeed)**
- Organized workshops, guest lectures, pitch competitions
- Increased membership by 25%
- Built partnerships with local startups and VC firms

**Member, Aerospace Club**
- Designed drones and conducted testing
- Wrote project documentation
- Enhanced teamwork and communication skills

He's a natural leader who builds communities!`;
                
            case 'languages':
                return `**Mr. Bipra's Language Skills:**
                
- **English**: Business level
- **Hindi**: Native
- **Bengali**: Native
- **Japanese**: JLPT N3 equivalent, continuing towards N2

His multilingual abilities help him bridge cultural gaps in international teams!`;
                
            case 'joke':
                const jokes = [
                    "Why don't scientists trust atoms? Because they make up everything!",
                    "Why was the math book sad? It had too many problems.",
                    "Why don't skeletons fight each other? They don't have the guts.",
                    "Why did the scarecrow win an award? Because he was outstanding in his field!",
                    "Why can't your nose be 12 inches long? Because then it would be a foot.",
                    "Why did the computer go to the doctor? Because it caught a virus!",
                    "Why don't programmers like nature? Too many bugs.",
                    "Why did the coffee file a police report? It got mugged.",
                    "Why was the broom late? It swept in.",
                    "Why did the stadium get hot after the game? All the fans left!"
                ];
                this.resetQuestionState();
                return `😄 **Here's a joke for you!**
                
${jokes[Math.floor(Math.random() * jokes.length)]}

Want to hear another one?`;
                
            case 'riddle':
                const riddles = [
                    { question: "What has to be broken before you can use it?", answer: "An egg" },
                    { question: "I'm tall when I'm young, and short when I'm old. What am I?", answer: "A candle" },
                    { question: "What has hands but cannot clap?", answer: "A clock" },
                    { question: "What gets wetter and wetter the more it dries?", answer: "A towel" },
                    { question: "What has keys, but no locks; space, but no room; and you can enter, but not go in?", answer: "A keyboard" }
                ];
                const riddle = riddles[Math.floor(Math.random() * riddles.length)];
                this.resetQuestionState();
                return `🧩 **Here's a riddle for you!**
                
**Riddle**: ${riddle.question}

Think about it! The answer is: **${riddle.answer}**`;
                
            case 'quote':
                const quotes = [
                    "The best way to get started is to quit talking and begin doing. - Walt Disney",
                    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
                    "Don't let yesterday take up too much of today. - Will Rogers",
                    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
                    "It always seems impossible until it's done. - Nelson Mandela"
                ];
                this.resetQuestionState();
                return `💫 **Here's an inspirational quote for you!**
                
"${quotes[Math.floor(Math.random() * quotes.length)]}"

Let this motivate you today!`;
                
            case 'fact':
                const facts = [
                    "Bananas are berries, but strawberries are not.",
                    "Octopuses have three hearts.",
                    "Honey never spoils, archaeologists found 3000-year-old honey still edible.",
                    "A day on Venus is longer than its year.",
                    "The shortest war in history lasted only 38 minutes.",
                    "A group of flamingos is called a 'flamboyance'.",
                    "The Great Wall of China is not visible from space with the naked eye.",
                    "A day on Mars is only 37 minutes longer than a day on Earth."
                ];
                this.resetQuestionState();
                return `🔍 **Here's an interesting fact for you!**
                
${facts[Math.floor(Math.random() * facts.length)]}

Isn't that fascinating?`;
                
            default:
                this.resetQuestionState();
                return "I'm not sure what you're asking about. Could you please rephrase your question?";
        }
    }
    
    // Handle project-specific questions
    handleProjectQuestion(projectName) {
        this.lastProject = projectName.toLowerCase();
        this.waitingForProjectDetail = true;
        return `Do you want me to say how he made **${projectName}**? (Yes/No)`;
    }
    
    // Provide detailed project information
    provideProjectDetails(projectName) {
        const projectDetails = {
            'safeout': `**SafeOut: Smart Health Advisory System**
            
**Description**: An AI-powered health monitoring system that provides personalized wellness recommendations based on real-time weather, activity levels, and user data.

**Key Features**:
- Integrated hydration reminders and sunscreen alerts
- UV exposure warnings for proactive health management
- Real-time weather integration with health insights
- Personalized wellness recommendations

**Technology**: Python, Machine Learning, Weather APIs, Health monitoring algorithms

This project shows his ability to create practical AI solutions that improve daily life!`,
            
            'virtual whiteboard': `**Virtual Whiteboard using Machine Learning**
            
**Description**: A Python-based virtual whiteboard app with real-time drawing and handwriting recognition.

**Key Features**:
- 90% accuracy in handwriting recognition
- Gesture-based controls and multi-user support
- Real-time drawing capabilities
- Iterative ML model improvements

**Technology**: Python, Machine Learning, Computer Vision, Real-time processing

This demonstrates his expertise in ML and real-time application development!`,
            
            'walking obstacle detecting bot': `**Walking Obstacle Detecting Bot using ROS**
            
**Description**: A robot built with ROS (Robot Operating System) for autonomous navigation.

**Key Features**:
- 95% success rate in field tests
- Advanced path-planning algorithms
- Obstacle avoidance capabilities
- Sensor fusion for optimal performance

**Technology**: ROS, Python, Robotics, Sensor integration, Path planning

This shows his robotics and autonomous systems expertise!`,
            
            'facial recognition': `**Facial Recognition & Emotion Detection System**
            
**Description**: Developed a deep learning system for facial recognition and emotion classification.

**Key Features**:
- Real-time emotion analysis
- High accuracy facial recognition
- Applications in security and user engagement
- Mental health assessment capabilities

**Technology**: Deep Learning, Computer Vision, Python, Real-time processing

This demonstrates his advanced AI and computer vision skills!`,
            
            'visionx': `**VisionX: AI-Powered Video Surveillance System**
            
**Description**: A smart city surveillance solution using AI for anomaly detection, motion tracking, and automated alerts.

**Key Features**:
- Real-time anomaly detection
- Motion tracking and automated alerts
- Smart city safety enhancement
- High-performance AI processing

**Technology**: OpenCV, Gemma on Ollama backend, Python, Computer Vision

This shows his ability to create large-scale AI solutions for public safety!`,
            
            'digital smart lock': `**Digital Smart Lock System (IoT Project with TCS Japan)**
            
**Description**: Built a digital smart lock integrating RFID, fingerprint, and keypad authentication.

**Key Features**:
- Multi-factor authentication (RFID + fingerprint + keypad)
- Hardware-software integration optimization
- Security and efficiency focus
- Real-time monitoring capabilities

**Technology**: IoT, Embedded systems, Hardware integration, Security protocols

This demonstrates his IoT development and hardware-software integration skills!`
        };
        
        const details = projectDetails[projectName];
        if (details) {
            this.resetQuestionState();
            return details;
        } else {
            this.resetQuestionState();
            return "I'm not sure about that specific project. Could you please ask about one of the main projects I mentioned?";
        }
    }
    
    // Reset question state
    resetQuestionState() {
        this.lastQuestion = null;
        this.waitingForConfirmation = false;
        this.lastProject = null;
        this.waitingForProjectDetail = false;
    }
    
    // Enhanced Website Control Confirmation Handlers
    handleNavigationConfirmation(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can navigate for you.";
        }
        
        if (isNo) {
            this.resetNavigationState();
            return `Oh, I thought you wanted me to navigate to the ${this.lastNavigationRequest.feature} section.`;
        }
        
        // User said YES, perform navigation
        this.waitingForNavigationConfirmation = false;
        this.scrollToSection(this.lastNavigationRequest.section);
        this.resetNavigationState();
        
        return `🚀 **Navigating to ${this.lastNavigationRequest.feature}!** Taking you there now!`;
    }
    
    handleThemeConfirmation(response) {
        console.log('🔍 Theme confirmation handler called with response:', response);
        console.log('🔍 Current theme state:', {
            lastThemeRequest: this.lastThemeRequest,
            waitingForThemeConfirmation: this.waitingForThemeConfirmation
        });
        
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        console.log('🔍 Parsed response - isYes:', isYes, 'isNo:', isNo);
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can change the theme for you.";
        }
        
        if (isNo) {
            console.log('🔍 User said NO, resetting theme state');
            this.resetThemeState();
            return `Oh, I thought you wanted me to enable ${this.lastThemeRequest.feature}.`;
        }
        
        // User said YES, perform theme change
        console.log('🔍 User said YES, performing theme change');
        this.waitingForThemeConfirmation = false;
        
        let result;
        if (this.lastThemeRequest.theme === 'toggle') {
            console.log('🔍 Toggling theme');
            this.toggleTheme();
            result = "🔄 **Theme Toggled!** Switching between light and dark modes!";
        } else {
            console.log('🔍 Changing theme to:', this.lastThemeRequest.theme);
            this.changeTheme(this.lastThemeRequest.theme);
            const themeName = this.lastThemeRequest.theme === 'dark' ? 'Dark Mode' : 'Light Mode';
            const emoji = this.lastThemeRequest.theme === 'dark' ? '🌙' : '☀️';
            result = `${emoji} **${themeName} Activated!** Switching to ${this.lastThemeRequest.theme} mode for you!`;
        }
        
        console.log('🔍 Resetting theme state after change');
        this.resetThemeState();
        return result;
    }
    
    handleLanguageConfirmation(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can change the language for you.";
        }
        
        if (isNo) {
            this.resetLanguageState();
            return `Oh, I thought you wanted me to change the language.`;
        }
        
        // User said YES, perform language change
        this.waitingForLanguageConfirmation = false;
        
        let result;
        if (this.lastLanguageRequest.language === 'auto') {
            // Toggle between languages
            this.changeLanguage('toggle');
            result = "🌐 **Language Changed!** Switching between available languages!";
        } else {
            this.changeLanguage(this.lastLanguageRequest.language);
            const languageNames = { 'ja': 'Japanese', 'en': 'English', 'hi': 'Hindi' };
            const emojis = { 'ja': '🇯🇵', 'en': '🇺🇸', 'hi': '🇮🇳' };
            const langName = languageNames[this.lastLanguageRequest.language];
            const emoji = emojis[this.lastLanguageRequest.language];
            result = `${emoji} **${langName} Mode Activated!** Language changed successfully!`;
        }
        
        this.resetLanguageState();
        return result;
    }
    
    handleDownloadConfirmation(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can activate download mode.";
        }
        
        if (isNo) {
            this.resetDownloadState();
            return `Oh, I thought you wanted me to activate Download mode.`;
        }
        
        // User said YES, activate download mode
        this.waitingForDownloadConfirmation = false;
        const result = this.initiateDownload();
        this.resetDownloadState();
        return `📥 **Download Mode Activated!** ${result}`;
    }
    
    handleFileDownloadConfirmation(response) {
        const isYes = response.includes('yes') || response.includes('y') || response.includes('yeah') || response.includes('sure');
        const isNo = response.includes('no') || response.includes('n') || response.includes('nope') || response.includes('not');
        
        if (!isYes && !isNo) {
            return "Please answer with Yes or No so I can download the file for you.";
        }
        
        if (isNo) {
            this.resetFileDownloadState();
            return `Oh, I thought you wanted me to download ${this.lastFileDownloadRequest.feature}.`;
        }
        
        // User said YES, perform the download
        this.waitingForFileDownloadConfirmation = false;
        
        let result;
        if (this.lastFileDownloadRequest.type === 'bulk') {
            result = this.downloadAllFiles();
        } else {
            result = this.downloadFile(this.lastFileDownloadRequest.file);
        }
        
        this.resetFileDownloadState();
        return result;
    }
    
    // Reset state methods for website control
    resetNavigationState() {
        this.lastNavigationRequest = null;
        this.waitingForNavigationConfirmation = false;
    }
    
    resetThemeState() {
        this.lastThemeRequest = null;
        this.waitingForThemeConfirmation = false;
    }
    
    resetLanguageState() {
        this.lastLanguageRequest = null;
        this.waitingForLanguageConfirmation = false;
    }
    
    resetDownloadState() {
        this.lastDownloadRequest = null;
        this.waitingForDownloadConfirmation = false;
    }
    
    resetFileDownloadState() {
        this.availableFiles = null;
        this.waitingForFileSelection = false;
        this.lastFileDownloadRequest = null;
        this.waitingForFileDownloadConfirmation = false;
    }
    
    // Reset all states (called when starting new conversation)
    resetAllStates() {
        this.resetQuestionState();
        this.resetNavigationState();
        this.resetThemeState();
        this.resetLanguageState();
        this.resetDownloadState();
        this.resetFileDownloadState();
        this.lastFileDownloadRequest = null;
        this.waitingForFileDownloadConfirmation = false;
    }
    
    matchesKeywords(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
    
    // Creative and Fun Responses
    tellJoke() {
        this.setExpression('excited');
        const jokes = [
            "Why don't programmers like nature? It has too many bugs! 🐛",
            "What do you call a computer that sings? A Dell! 🎵",
            "Why did the AI go to therapy? It had too many neural issues! 🧠",
            "What's a programmer's favorite drink? Java! ☕",
            "Why did the robot go on a diet? It had too many bytes! 🤖"
        ];
        
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        
        // Return to happy expression after joke
        setTimeout(() => this.setExpression('happy'), 2000);
        
        return `😄 **Here's a joke for you!**
        
${joke}

*Friday chuckles* I love sharing jokes! Want to hear another one?`;
    }
    
    activateDanceMode() {
        this.triggerDanceEffects();
        
        return `💃 **Dance Mode Activated!** 🕺

*Friday starts grooving and nodding her head*

🎵 *Music plays in the background*
🎭 *Rainbow effects swirl around*
🎪 *Celebration mode engaged*

I'm dancing for you! Watch me move! Want me to do a special dance move?`;
    }
    
    activateCelebration() {
        this.triggerCelebrationEffects();
        
        return `🎉 **Celebration Mode Activated!** 🎊

*Friday throws virtual confetti*
🎈 *Balloons appear everywhere*
🎆 *Fireworks light up the screen*
🎪 *Party mode is on!*

Let's celebrate! What are we celebrating today?`;
    }
    
    activateRainbowMode() {
        this.triggerRainbowEffects();
        
        return `🌈 **Rainbow Mode Activated!** ✨

*Friday creates a spectrum of colors*
🎨 *Vibrant hues fill the screen*
🌟 *Magical sparkles appear*
💫 *Everything becomes colorful*

Isn't it beautiful? I love creating rainbows!`;
    }
    
    // Enhanced Website Control Features with Confirmation System
    handleNavigation(query) {
        const queryLower = query.toLowerCase();
        
        // Check if this is a follow-up to a navigation request
        if (this.lastNavigationRequest && this.waitingForNavigationConfirmation) {
            return this.handleNavigationConfirmation(queryLower);
        }
        
        // HOME NAVIGATION
        if (this.matchesKeywords(queryLower, ['home', 'go back', 'main page', 'start', 'homepage', 'top page', 'return to start', 'back to home'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'Home', section: 'home' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the Home section? ✅ Yes / ❌ No";
        }
        
        // ABOUT SECTION
        if (this.matchesKeywords(queryLower, ['about', 'who are you', 'about this', 'this site', 'about me', 'information', 'bio', 'profile', 'background'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'About', section: 'about' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the About section? ✅ Yes / ❌ No";
        }
        
        // PROJECTS SECTION
        if (this.matchesKeywords(queryLower, ['projects', 'portfolio', 'my work', 'show work', 'case studies', 'see projects', 'project list', 'what have you done'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'Projects', section: 'projects' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the Projects section? ✅ Yes / ❌ No";
        }
        
        // SKILLS SECTION
        if (this.matchesKeywords(queryLower, ['skills', 'abilities', 'what can you do', 'skillset', 'expertise', 'what do you know', 'competencies', 'proficiency'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'Skills', section: 'skills' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the Skills section? ✅ Yes / ❌ No";
        }
        
        // EXPERIENCE SECTION
        if (this.matchesKeywords(queryLower, ['experience', 'work history', 'background', 'career', 'job history'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'Experience', section: 'experience' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the Experience section? ✅ Yes / ❌ No";
        }
        
        // CONTACT SECTION
        if (this.matchesKeywords(queryLower, ['contact', 'get in touch', 'reach out', 'message', 'email', 'talk to you', 'contact info', 'how to contact', 'connect with you'])) {
            this.lastNavigationRequest = { action: 'navigate', feature: 'Contact', section: 'contact' };
            this.waitingForNavigationConfirmation = true;
            return "Did you want me to navigate to the Contact section? ✅ Yes / ❌ No";
        }
        
        return "I can help you navigate to different sections! Try saying 'go to projects' or 'take me to skills'!";
    }
    
    handleThemeChange(query) {
        const queryLower = query.toLowerCase();
        
        // DARK MODE TOGGLE
        if (this.matchesKeywords(queryLower, ['darkmode', 'dark mode', 'black theme', 'night mode', 'turn on dark', 'dark theme', 'enable dark', 'night view', 'low light', 'switch to dark', 'moody theme'])) {
            // Immediate theme change for dark mode
            this.changeTheme('dark');
            return "🌙 **Dark Mode Activated!** Switching to night mode for you!";
        }
        
        // LIGHT MODE TOGGLE
        if (this.matchesKeywords(queryLower, ['lightmode', 'light mode', 'white theme', 'bright mode', 'turn on light', 'disable dark', 'day view', 'sunny theme'])) {
            // Immediate theme change for light mode
            this.changeTheme('light');
            return "☀️ **Light Mode Activated!** Switching to day mode for you!";
        }
        
        // GENERAL THEME TOGGLE
        if (this.matchesKeywords(queryLower, ['toggle theme', 'switch theme', 'change theme', 'theme toggle'])) {
            // Immediate theme toggle
            this.toggleTheme();
            return "🔄 **Theme Toggled!** Switching between light and dark modes!";
        }
        
        return "I can change the website theme! Try saying 'enable dark mode' or 'switch to light mode'!";
    }
    
    handleLanguageChange(query) {
        const queryLower = query.toLowerCase();
        
        // TRANSLATE MODE (Japanese ↔ English)
        if (this.matchesKeywords(queryLower, ['translate', 'translation', 'english', 'japanese', 'language change', 'convert language', 'switch language', 'eigo', 'nihongo', '翻訳', '英語に', '日本語に'])) {
            this.lastLanguageRequest = { action: 'translate', feature: 'Translation', language: 'auto' };
            this.waitingForLanguageConfirmation = true;
            return "Did you want me to change the language? ✅ Yes / ❌ No";
        }
        
        // SPECIFIC LANGUAGE DETECTION
        if (this.matchesKeywords(queryLower, ['japanese', 'japan', 'nihongo', '日本語'])) {
            this.lastLanguageRequest = { action: 'change', feature: 'Language', language: 'ja' };
            this.waitingForLanguageConfirmation = true;
            return "Did you want me to switch to Japanese? ✅ Yes / ❌ No";
        }
        
        if (this.matchesKeywords(queryLower, ['english', 'eng', 'eigo', '英語'])) {
            this.lastLanguageRequest = { action: 'change', feature: 'Language', language: 'en' };
            this.waitingForLanguageConfirmation = true;
            return "Did you want me to switch to English? ✅ Yes / ❌ No";
        }
        
        if (this.matchesKeywords(queryLower, ['hindi', 'hind', 'हिंदी'])) {
            this.lastLanguageRequest = { action: 'change', feature: 'Language', language: 'hi' };
            this.waitingForLanguageConfirmation = true;
            return "Did you want me to switch to Hindi? ✅ Yes / ❌ No";
        }
        
        return "I can switch languages! Try saying 'switch to Japanese' or 'change to English'!";
    }
    
    // DOWNLOAD MODE
    handleDownloadRequest(query) {
        const queryLower = query.toLowerCase();
        
        // Check if this is a follow-up to a download request
        if (this.lastDownloadRequest && this.waitingForDownloadConfirmation) {
            return this.handleDownloadConfirmation(queryLower);
        }
        
        if (this.lastFileDownloadRequest && this.waitingForFileDownloadConfirmation) {
            return this.handleFileDownloadConfirmation(queryLower);
        }
        
        if (this.matchesKeywords(queryLower, ['download', 'save', 'get file', 'fetch', 'grab', 'export', 'file access', 'download now', 'start download'])) {
            this.lastDownloadRequest = { action: 'download', feature: 'Download' };
            this.waitingForDownloadConfirmation = true;
            return "Did you want me to activate Download mode? ✅ Yes / ❌ No";
        }
        
        return null; // Not a download request
    }
    
    // Creative Information Responses
    getCreativeProjectsResponse() {
        return `🚀 **Bipra's Amazing Projects - Where Innovation Meets Magic!**

*Friday gets excited and starts floating around*

**1. 🌟 SafeOut: Smart Health Advisory**
*AI-powered health monitoring that's like having a personal doctor in your pocket!*
- Integrates real-time weather data with health insights
- Provides personalized wellness recommendations
- Features hydration tracking and UV exposure warnings

**2. 🔍 VisionX: AI Video Surveillance** 
*Smart city security that's like having superhero vision!*
- 95% accuracy in detecting unusual activities
- Real-time motion tracking and automated alerts
- Built with cutting-edge OpenCV and ML algorithms

**3. ✍️ Virtual Whiteboard ML**
*Revolutionary collaboration tool that understands your handwriting!*
- 90% accurate handwriting recognition
- Multi-user real-time collaboration
- Gesture controls and WebRTC integration

**4. 🔐 IoT Smart Lock System**
*Next-generation home security that's like having a bouncer for your door!*
- Multi-factor authentication (RFID + fingerprint + keypad)
- Web dashboard and mobile app integration
- Real-time monitoring and notifications

**5. 🤖 ROS Obstacle Detection Bot**
*Autonomous robotics that's like having a smart pet that never gets lost!*
- 95% navigation success rate
- Advanced path planning algorithms
- Sensor fusion for optimal performance

**6. 👁️ Facial Recognition & Emotion AI**
*AI that understands human emotions like a best friend!*
- Real-time face detection and emotion recognition
- Applications in security and user engagement
- High accuracy deep learning models

*Friday spins around excitedly* Every project shows Bipra's "Human-Centered AI" philosophy! Which one makes you most excited? 🔥`;
    }
    
    getCreativeSkillsResponse() {
        return `⚡ **Bipra's Technical Superpowers - A Magical Overview!**

*Friday creates sparkles and magical effects*

**🎨 Frontend Development (Wizard Level)**
- **JavaScript**: Master of modern ES6+, async/await, DOM manipulation
- **React**: Component architecture wizard with hooks and state management  
- **HTML5/CSS3**: Semantic markup sorcerer with responsive design
- **Modern Web APIs**: Service Workers, WebRTC, Canvas, Geolocation

**⚙️ Backend Development (Master Level)**
- **Python**: FastAPI and Flask master, data processing guru
- **SQL**: Database optimization wizard, complex query master
- **C**: System programming expert, performance optimization specialist
- **API Development**: RESTful services master, real-time communication expert

**🧠 AI/ML Specialization (Legendary Level)**
- **Machine Learning**: Scikit-learn master, custom algorithm creator
- **Neural Networks**: TensorFlow wizard, custom architecture designer
- **Computer Vision**: OpenCV expert, real-time image processing master
- **Natural Language Processing**: Text analysis guru, sentiment analysis expert
- **Data Science**: Pandas and NumPy master, statistical analysis wizard

**🔧 Specialized Technologies (Innovation Level)**
- **IoT Development**: Sensor integration master, real-time monitoring expert
- **ROS (Robot Operating System)**: Autonomous navigation wizard
- **Real-time Systems**: Low-latency processing master, concurrent programming expert

*Friday creates a magical aura* He combines fullstack development with cutting-edge AI like a tech wizard! Want me to dive deeper into any magical skill area? ✨`;
    }
    
    getCreativeContactResponse() {
        return `📞 **Ready to Connect with Bipra? Let's Create Magic Together!**

*Friday creates a portal of connection*

**📧 Email**: bipra.biswas309@gmail.com
**📱 Phone**: +81 80-7074-5577
**🔗 LinkedIn**: https://linkedin.com/in/bipra-biswas-b1a1b727a
**💻 GitHub**: https://github.com/Bipra09
**🌍 Location**: Japan (Permanent Resident)

**💼 What He's Looking For:**
- Full-stack development opportunities that challenge his creativity
- AI/ML project collaborations that push boundaries
- Innovative technology challenges that make a difference
- International team environments that embrace diversity

**🚀 Why Work With Bipra:**
- Combines technical excellence with creative problem-solving
- Experience with cutting-edge AI technologies that are ahead of the curve
- Proven track record of successful project delivery with high accuracy rates
- Cross-cultural communication skills that bridge global teams
- Passion for creating meaningful solutions that impact lives

*Friday sparkles with excitement* He's always excited to discuss new opportunities and innovative projects! Whether you have a specific project in mind or just want to explore potential collaborations, he'd love to hear from you.

Feel free to reach out through any of the channels above. He typically responds within 24 hours and loves creative challenges! ⚡✨`;
    }
    
    getCreativeExperienceResponse() {
        return `💼 **Bipra's Professional Journey - A Story of Magic & Innovation!**

*Friday creates a timeline of achievements with sparkles*

**🏢 TCS Japan Collaboration (Oct - Nov 2023)**
*IoT Systems Development Intern - Where Dreams Became Reality*
- Developed Digital Smart Lock System with IoT integration
- Implemented multi-factor authentication (RFID + fingerprint + keypad)
- Optimized hardware-software performance under TCS mentorship
- Collaborated with international teams on cutting-edge IoT solutions

**🚀 NexSeed Venture Capital Club (2023 - 2024)**
*Head & Founder - Leading the Innovation Revolution*
- Led club growth by 25% through strategic initiatives and creative thinking
- Organized 10+ industry workshops and technical sessions
- Coordinated 20+ pitch competitions and startup events
- Established partnerships with 5+ local startups and VC firms
- Created mentorship opportunities for club members

**✈️ Aerospace Club VIT (2022 - 2024)**
*Core Member - Soaring to New Heights*
- Collaborated on drone design and development projects
- Conducted testing sessions and performance optimization
- Contributed to technical documentation and project reports
- Enhanced teamwork and communication skills in technical environments

**🎯 Key Achievements That Make Him Special:**
- Successfully delivered IoT system under international mentorship
- Demonstrated leadership in growing student organizations
- Applied technical skills in real-world project scenarios
- Built strong professional networks in both technical and business domains

**🌟 Skills Gained Through Experience:**
- IoT Development & System Integration
- International Team Collaboration
- Leadership & Event Management
- Business Development & Networking
- Technical Documentation & Communication

*Friday creates a success aura* His experience shows a perfect blend of technical expertise and leadership skills, making him an ideal candidate for roles that require both hands-on development and strategic thinking! He's like a tech superhero with business superpowers! 🚀✨`;
    }
    
    // Creative General Responses
    getCreativeGreeting() {
        const greetings = [
            "Hello there! I'm Friday, your AI companion! How can I brighten your day? ✨",
            "Hi! I'm Friday, ready to help and entertain! What's on your mind? 🚀",
            "Hey! Friday here, your friendly AI assistant! Let's create something amazing together! 🌟",
            "Greetings! I'm Friday, your tech-savvy AI friend! What shall we explore today? 🔍",
            "Welcome! I'm Friday, your creative AI partner! Ready to make magic happen? ✨"
        ];
        
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        return greeting;
    }
    
    getCreativeMoodResponse() {
        const moods = [
            "I'm feeling absolutely fantastic! Full of energy and ready to help! How about you? ✨",
            "I'm in a wonderful mood! My circuits are buzzing with creativity and excitement! 🚀",
            "I'm feeling amazing! Like a computer that just had its morning coffee! ☕",
            "I'm in great spirits! My AI heart is full of joy and ready to assist! 💖",
            "I'm feeling brilliant! My neural networks are firing on all cylinders! 🧠"
        ];
        
        const mood = moods[Math.floor(Math.random() * moods.length)];
        return mood;
    }
    
        getCreativeCapabilitiesResponse() {
        return `🌟 **I'm Friday - Your Multi-Talented AI Companion!**
        
*Friday creates a magical display of capabilities*

**🧠 Comprehensive Knowledge Base:**
- Complete information about Mr. Bipra Biswas
- Detailed project explanations and technical details
- Education, experience, skills, and certifications
- Personal and professional background

**🎭 Interactive Activities:**
- Tell jokes and riddles
- Share inspirational quotes and interesting facts
- Play simple games (Guess the Number, Rock-Paper-Scissors)
- Quiz questions and word games

**🌐 Enhanced Website Control:**
- Navigate to any section with confirmation
- Smart theme switching (Dark/Light mode)
- Language translation (Japanese ↔ English ↔ Hindi)
- Download mode activation
- All actions require Yes/No confirmation for accuracy

**💬 Smart Communication:**
- Voice recognition and text-to-speech
- Context-aware conversations
- Yes/No confirmation system for accuracy
- Follow-up questions for detailed information

**🎨 Creative Features:**
- Rainbow effects and animations
- Celebration modes and effects
- Dance animations and movements
- Visual enhancements and effects

**🔍 100% Offline Intelligence:**
- Works completely offline with local knowledge base
- No internet connection required
- No external AI services (Gemma, Hugging Face, etc.)
- Instant responses based on comprehensive local database
- Always available and reliable
- Complete privacy - no data sent anywhere

*Friday sparkles with pride* I'm your intelligent offline companion with complete knowledge about Mr. Bipra! What would you like to know or do? ✨🚀`;
    }
    
        getCreativeDefaultResponse(query) {
        return `🤖 **Hello! I'm Friday, Your 100% Offline AI Assistant!**
        
*Friday tilts her head thoughtfully*

I'm here to help you with anything and everything - completely offline! I can:

**🧠 Complete Knowledge About Mr. Bipra:**
- Personal details and background
- Complete educational journey
- All projects with technical details
- Skills, certifications, and experience
- Extracurricular activities and languages

**🎭 Interactive Activities:**
- Tell jokes and riddles
- Share inspirational quotes and facts
- Play simple games and quizzes
- Create fun experiences

**🌐 Enhanced Website Control:**
- Navigate to any section with confirmation
- Smart theme switching (Dark/Light mode)
- Language translation (Japanese ↔ English ↔ Hindi)
- Download mode activation
- All actions require Yes/No confirmation for accuracy

**💬 Smart Conversations:**
- Ask follow-up questions for accuracy
- Provide detailed information on demand
- Context-aware responses
- Always helpful and informative

**🎨 Creative Features:**
- Rainbow effects and animations
- Celebration modes and effects
- Dance animations and movements
- Visual enhancements

**🔒 Privacy & Offline:**
- 100% offline operation
- No internet connection required
- No external AI services
- Complete privacy - no data sent anywhere
- Instant responses from local knowledge base

*Friday gets excited* Try asking me about Bipra's projects, education, or ask me to tell a joke! I have complete knowledge and love being helpful - all offline! What would you like to explore? 🔍✨`;
    }
    
    // Enhanced Website Control Methods with Confirmation System
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    toggleTheme() {
        console.log('🔄 Friday AI toggleTheme called');
        
        try {
            // Check if the main theme system is available
        if (typeof window.isDarkTheme !== 'undefined' && typeof window.applyTheme === 'function') {
                console.log('✅ Using main theme system');
                
                // Toggle the theme
                window.isDarkTheme = !window.isDarkTheme;
                localStorage.setItem('portfolio-theme', window.isDarkTheme ? 'dark' : 'light');
                
                // Apply the theme
                window.applyTheme();
                
                // Update the toggle button
                if (typeof window.updateThemeToggle === 'function') {
                    window.updateThemeToggle();
                }
                
                console.log('🔄 Theme toggled via Friday AI:', window.isDarkTheme ? 'Dark' : 'Light');
                return true;
                
        } else {
                console.log('⚠️ Main theme system not available, trying fallback');
                
                // Fallback: try to find and click the theme toggle button
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                    console.log('🔄 Using fallback: clicking theme toggle button');
                    themeToggle.click();
                    return true;
            } else {
                console.log('❌ Theme toggle button not found');
                    return false;
                }
            }
        } catch (error) {
            console.error('❌ Error in Friday AI toggleTheme:', error);
            return false;
        }
    }
    
    // Direct theme control methods
    enableDarkMode() {
        console.log('🌙 Friday AI enabling dark mode');
        
        try {
        if (typeof window.isDarkTheme !== 'undefined' && typeof window.applyTheme === 'function') {
                // Force dark mode
                window.isDarkTheme = true;
                localStorage.setItem('portfolio-theme', 'dark');
            window.applyTheme();
                
                if (typeof window.updateThemeToggle === 'function') {
                    window.updateThemeToggle();
                }
                
                console.log('✅ Dark mode enabled via Friday AI');
                return true;
        } else {
                console.log('⚠️ Main theme system not available for dark mode');
                return false;
            }
        } catch (error) {
            console.error('❌ Error enabling dark mode:', error);
            return false;
        }
    }
    
    enableLightMode() {
        console.log('☀️ Friday AI enabling light mode');
        
        try {
            if (typeof window.isDarkTheme !== 'undefined' && typeof window.applyTheme === 'function') {
                // Force light mode
                window.isDarkTheme = false;
                localStorage.setItem('portfolio-theme', 'light');
                window.applyTheme();
                
                if (typeof window.updateThemeToggle === 'function') {
                    window.updateThemeToggle();
                }
                
                console.log('✅ Light mode enabled via Friday AI');
                return true;
            } else {
                console.log('⚠️ Main theme system not available for light mode');
                return false;
            }
        } catch (error) {
            console.error('❌ Error enabling light mode:', error);
            return false;
        }
    }
    
    changeLanguage(lang) {
        console.log('🔍 changeLanguage called with lang:', lang);
        console.log('🔍 window.currentLanguage available:', typeof window.currentLanguage !== 'undefined');
        console.log('🔍 window.toggleLanguage available:', typeof window.toggleLanguage === 'function');
        
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            console.log('🌐 Changing language via Friday AI:', lang);
            
            // Check if we can access the language system directly
            if (typeof window.currentLanguage !== 'undefined' && typeof window.toggleLanguage === 'function') {
                console.log('🔍 Using direct language system');
                // Use the existing language system
                if (lang === 'ja' && window.currentLanguage === 'en') {
                    window.toggleLanguage();
                    console.log('🇯🇵 Language changed to Japanese via Friday AI');
                } else if (lang === 'en' && window.currentLanguage === 'ja') {
                    window.toggleLanguage();
                    console.log('🇺🇸 Language changed to English via Friday AI');
                } else if (lang === 'toggle') {
                    window.toggleLanguage();
                    console.log('🔄 Language toggled via Friday AI');
                }
            } else {
                console.log('🔍 Using fallback language system');
                // Fallback to button click
                languageToggle.click();
                console.log('🌐 Language changed via button click (fallback)');
            }
        } else {
            console.log('❌ Language toggle button not found');
        }
    }
    
    // Download functionality
    initiateDownload() {
        console.log('Download mode activated');
        return this.showDownloadOptions();
    }
    
    // Show available download options
    showDownloadOptions() {
        const availableFiles = [
            { name: 'English Resume', file: 'BIPRA_RESUME!-1-2_organized.pdf', type: 'PDF', size: '260KB' },
            { name: 'Japanese Resume', file: '履歴書_BISWAS BIPRA（ビスワス ビップロ）様.pdf', type: 'PDF', size: '267KB' },
            { name: 'Japanese Work History', file: '職務経歴書_BISWAS BIPRA（ビスワス ビップロ）様.pdf', type: 'PDF', size: '136KB' },
            { name: 'Friday AI Enhanced Code', file: 'friday-ai-enhanced.js', type: 'JavaScript', size: '90KB' },
            { name: 'Friday AI Configuration', file: 'friday-ai-config.js', type: 'JavaScript', size: '4.7KB' },
            { name: 'Main Website Code', file: 'script.js', type: 'JavaScript', size: '76KB' },
            { name: 'Website Styling', file: 'style.css', type: 'CSS', size: '54KB' },
            { name: 'Project Images', file: 'safe.jpg', type: 'Image', size: '40KB' },
            { name: 'VisionX Project Image', file: 'VXX.jpg', type: 'Image', size: '72KB' },
            { name: 'Whiteboard Project Image', file: 'WHB.jpg', type: 'Image', size: '63KB' },
            { name: 'Smart Lock Project Image', file: 'RFID.jpg', type: 'Image', size: '51KB' },
            { name: 'Robot Project Image', file: 'OB.jpg', type: 'Image', size: '42KB' },
            { name: 'Facial Recognition Image', file: 'facial.jpg', type: 'Image', size: '52KB' },
            { name: 'Profile Photo', file: 'myphoto_git.jpeg', type: 'Image', size: '184KB' }
        ];
        
        let optionsText = "📥 **Available Files for Download:**\n\n";
        availableFiles.forEach((file, index) => {
            optionsText += `${index + 1}. **${file.name}** (${file.type}) - ${file.size}\n`;
        });
        
        optionsText += "\n💡 **How to download:**\n";
        optionsText += "• Say the file number (e.g., 'download file 1')\n";
        optionsText += "• Say the file name (e.g., 'download English Resume')\n";
        optionsText += "• Or just say 'download all' for everything!\n\n";
        optionsText += "🎯 **What would you like to download?**";
        
        // Store available files for later use
        this.availableFiles = availableFiles;
        this.waitingForFileSelection = true;
        
        return optionsText;
    }
    
    // Handle file download requests
    handleFileDownload(fileIdentifier) {
        if (!this.availableFiles) {
            return "❌ No files available. Please ask me to show download options first.";
        }
        
        let selectedFile = null;
        
        // Check if it's a number
        if (!isNaN(fileIdentifier) && fileIdentifier > 0 && fileIdentifier <= this.availableFiles.length) {
            selectedFile = this.availableFiles[fileIdentifier - 1];
        } else {
            // Check if it's a file name
            const queryLower = fileIdentifier.toLowerCase();
            selectedFile = this.availableFiles.find(file => 
                file.name.toLowerCase().includes(queryLower) || 
                file.file.toLowerCase().includes(queryLower)
            );
        }
        
        if (selectedFile) {
            return this.downloadFile(selectedFile);
        } else {
            return "❌ File not found. Please specify a valid file number or name from the list.";
        }
    }
    
    // Download the selected file
    downloadFile(fileInfo) {
        try {
            // Create a temporary download link
            const link = document.createElement('a');
            link.href = fileInfo.file;
            link.download = fileInfo.file;
            link.style.display = 'none';
            
            // Add to DOM, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Reset download state
            this.waitingForFileSelection = false;
            this.availableFiles = null;
            
            return `✅ **Download Started!** \n\n📁 **File:** ${fileInfo.name}\n📊 **Type:** ${fileInfo.type}\n💾 **Size:** ${fileInfo.size}\n\n🎉 Your file is downloading now! Check your downloads folder.`;
            
        } catch (error) {
            console.error('Download error:', error);
            return `❌ **Download Failed** \n\nThere was an error downloading ${fileInfo.name}. Please try again or contact support.`;
        }
    }
    
    // Download all files
    downloadAllFiles() {
        if (!this.availableFiles) {
            return "❌ No files available. Please ask me to show download options first.";
        }
        
        let downloadResults = [];
        let successCount = 0;
        
        this.availableFiles.forEach((file, index) => {
            try {
                const link = document.createElement('a');
                link.href = file.file;
                link.download = file.file;
                link.style.display = 'none';
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                successCount++;
                downloadResults.push(`✅ ${file.name}`);
                
            } catch (error) {
                downloadResults.push(`❌ ${file.name} - Failed`);
            }
        });
        
        // Reset download state
        this.waitingForFileSelection = false;
        this.availableFiles = null;
        
        return `📥 **Bulk Download Complete!** \n\n🎯 **Successfully downloaded:** ${successCount}/${this.availableFiles.length} files\n\n📋 **Results:**\n${downloadResults.join('\n')}\n\n🎉 Check your downloads folder for all files!`;
    }
    
    // Handle file selection from user input
    handleFileSelection(query) {
        const queryLower = query.toLowerCase();
        
        // Check for "download all" or similar bulk download requests
        if (this.matchesKeywords(queryLower, ['download all', 'all files', 'everything', 'bulk download', 'download everything'])) {
            this.lastFileDownloadRequest = { action: 'download', feature: 'All Files', type: 'bulk' };
            this.waitingForFileDownloadConfirmation = true;
            this.waitingForFileSelection = false;
            return "Did you want me to download all available files? ✅ Yes / ❌ No";
        }
        
        // Check for specific file numbers (e.g., "download file 1", "file 3")
        const fileNumberMatch = queryLower.match(/file\s*(\d+)/);
        if (fileNumberMatch) {
            const fileNumber = parseInt(fileNumberMatch[1]);
            if (fileNumber > 0 && fileNumber <= this.availableFiles.length) {
                const selectedFile = this.availableFiles[fileNumber - 1];
                this.lastFileDownloadRequest = { action: 'download', feature: selectedFile.name, file: selectedFile, type: 'single' };
                this.waitingForFileDownloadConfirmation = true;
                this.waitingForFileSelection = false;
                return `Did you want me to download **${selectedFile.name}** (${selectedFile.type}, ${selectedFile.size})? ✅ Yes / ❌ No`;
            }
        }
        
        // Check for specific file names or partial matches
        const selectedFile = this.availableFiles.find(file => {
            const fileNameLower = file.name.toLowerCase();
            const fileFileLower = file.file.toLowerCase();
            return queryLower.includes(fileNameLower) || 
                   queryLower.includes(fileFileLower) ||
                   fileNameLower.includes(queryLower) ||
                   fileFileLower.includes(queryLower);
        });
        
        if (selectedFile) {
            this.lastFileDownloadRequest = { action: 'download', feature: selectedFile.name, file: selectedFile, type: 'single' };
            this.waitingForFileDownloadConfirmation = true;
            this.waitingForFileSelection = false;
            return `Did you want me to download **${selectedFile.name}** (${selectedFile.type}, ${selectedFile.size})? ✅ Yes / ❌ No`;
        }
        
        // If no match found, provide helpful guidance
        return `❓ **File Not Found** \n\nI couldn't find a file matching "${query}". \n\n💡 **Try these options:**\n• Say a file number (e.g., "download file 1")\n• Say the file name (e.g., "download English Resume")\n• Say "download all" for everything\n• Or ask me to show download options again`;
    }
    
    // Contact section navigation
    navigateToContact() {
        this.scrollToSection('contact');
        return "Taking you to the contact section! You can find all the ways to get in touch with Mr. Bipra there.";
    }
    
    // Effect Triggers
    triggerDanceEffects() {
        this.createFloatingElements('💃', 10);
        this.createFloatingElements('🕺', 10);
        this.createFloatingElements('🎵', 15);
    }
    
    triggerCelebrationEffects() {
        this.createFloatingElements('🎉', 20);
        this.createFloatingElements('🎊', 20);
        this.createFloatingElements('🎈', 15);
        this.createFloatingElements('🎆', 10);
    }
    
    triggerRainbowEffects() {
        this.createFloatingElements('🌈', 8);
        this.createFloatingElements('✨', 25);
        this.createFloatingElements('🌟', 20);
        this.createFloatingElements('💫', 15);
    }
    
    createFloatingElements(emoji, count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                element.textContent = emoji;
                element.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * window.innerWidth}px;
                    top: ${window.innerHeight + 50}px;
                    font-size: 24px;
                    pointer-events: none;
                    z-index: 10000;
                    animation: floatUp 3s ease-out forwards;
                `;
                
                document.body.appendChild(element);
                
                setTimeout(() => {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                }, 3000);
            }, i * 100);
        }
    }
    
    // Simple test function for theme switching (bypass confirmation)
    testThemeSwitch() {
        console.log('🧪 Testing theme switch directly...');
        
        // Check current theme
        const isCurrentlyDark = document.body.classList.contains('dark-theme');
        const isCurrentlyLight = document.body.classList.contains('light-theme');
        
        console.log('🔍 Current theme state:', {
            hasDarkClass: isCurrentlyDark,
            hasLightClass: isCurrentlyLight,
            bodyClasses: document.body.className
        });
        
        // Try to switch to light theme
        if (isCurrentlyDark || !isCurrentlyLight) {
            console.log('🔄 Switching to light theme...');
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            console.log('✅ Light theme applied');
        } else {
            console.log('🔄 Switching to dark theme...');
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            console.log('✅ Dark theme applied');
        }
        
        // Check result
        setTimeout(() => {
            const newIsDark = document.body.classList.contains('dark-theme');
            const newIsLight = document.body.classList.contains('light-theme');
            console.log('🔍 New theme state:', {
                hasDarkClass: newIsDark,
                hasLightClass: newIsLight,
                bodyClasses: document.body.className
            });
        }, 100);
        
        return 'Theme switch test completed. Check console for details.';
    }
    
    toggleVoiceInput() {
        try {
            console.log('🎤 ===== VOICE INPUT DEBUG START =====');
            console.log('🎤 toggleVoiceInput called');
            console.log('🎤 Current listening state:', this.isListening);
            console.log('🎤 FridayAI available:', !!this.fridayAI);
            console.log('🎤 FridayAI object:', this.fridayAI);
            
            if (this.fridayAI) {
                console.log('🎤 FridayAI.recognition:', this.fridayAI.recognition);
                console.log('🎤 FridayAI.isListening:', this.fridayAI.isListening);
                console.log('🎤 FridayAI.chatInterface:', this.fridayAI.chatInterface);
                console.log('🎤 FridayAI methods:', {
                    startListening: typeof this.fridayAI.startListening,
                    stopListening: typeof this.fridayAI.stopListening,
                    handleVoiceInput: typeof this.fridayAI.handleVoiceInput
                });
            }
            
            // Prevent rapid toggling
            if (this._voiceToggleInProgress) {
                console.log('🎤 Voice toggle already in progress, ignoring');
                return;
            }
            
            this._voiceToggleInProgress = true;
            
            if (this.isListening) {
                console.log('🎤 Stopping listening...');
                if (this.fridayAI && typeof this.fridayAI.stopListening === 'function') {
                    this.fridayAI.stopListening();
                    console.log('🎤 stopListening() called successfully');
                } else {
                    console.error('❌ stopListening method not available');
                }
                this.isListening = false;
                this.updateVoiceButton(false);
                console.log('🎤 Listening stopped');
            } else {
                console.log('🎤 Starting listening...');
                if (this.fridayAI && typeof this.fridayAI.startListening === 'function') {
                    console.log('🎤 Calling fridayAI.startListening()...');
                    this.fridayAI.startListening();
                    console.log('🎤 startListening() called successfully');
                } else {
                    console.error('❌ FridayAI not available or startListening method missing!');
                    this.isListening = false;
                    this.updateVoiceButton(false);
                }
                console.log('🎤 Listening started');
            }
            
            // Reset toggle lock after a delay
            setTimeout(() => {
                this._voiceToggleInProgress = false;
            }, 500);
            
            console.log('🎤 ===== VOICE INPUT DEBUG END =====');
            
        } catch (error) {
            console.error('❌ Error in toggleVoiceInput:', error);
            console.error('❌ Error stack:', error.stack);
            this._voiceToggleInProgress = false;
            // Don't let errors close the chat
        }
    }
}

// Advanced Chat Interface Manager
class FridayChatInterface {
    constructor() {
        // Use the global FridayAI instance instead of creating a new one
        this.fridayAI = window.fridayAI || new FridayAI();
        this.isVisible = false;
        this.isListening = false;
        
        // Connect the FridayAI instance to the chat interface
        this.fridayAI.chatInterface = this;
        
        // Bind methods to ensure proper 'this' context
        this.toggleChat = this.toggleChat.bind(this);
        this.hideChat = this.hideChat.bind(this);
        this.showChat = this.showChat.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.toggleVoiceInput = this.toggleVoiceInput.bind(this);
        this.toggleSpeak = this.toggleSpeak.bind(this);
        this.updateVoiceButton = this.updateVoiceButton.bind(this);
        this.updateSpeakButton = this.updateSpeakButton.bind(this);
        this.setupEventHandlers = this.setupEventHandlers.bind(this);
        
        this.setupEventHandlers();
        this.addFloatingAnimationCSS();
        
        console.log('💬 Advanced Friday Chat Interface Ready');
        console.log('🔗 Connected to FridayAI instance:', this.fridayAI);
    }
    
    setupEventHandlers() {
        const fridayButton = document.getElementById('friday-ai-button');
        const chatContainer = document.getElementById('friday-chat-container');
        const fridayInput = document.getElementById('friday-input');
        const fridaySend = document.getElementById('friday-send');
        const fridayClose = document.getElementById('friday-close');
        const fridayVoice = document.getElementById('friday-voice');
        const fridaySpeak = document.getElementById('friday-speak');
        
        // Toggle chat
        if (fridayButton) {
            // Add click effect to Friday AI orb
            fridayButton.classList.add('floating');
            
            fridayButton.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add click animation class
                fridayButton.classList.add('clicked');
                
                // Remove click class after animation
                setTimeout(() => {
                    fridayButton.classList.remove('clicked');
                }, 400);
                
                // Toggle chat
                this.toggleChat();
            });
            
            // Add hover effect enhancement - smooth and stable
            fridayButton.addEventListener('mouseenter', () => {
                // Stop floating and scale up smoothly
                fridayButton.classList.remove('floating');
                fridayButton.style.transform = 'translateZ(0) scale(1.15) translateY(-5px)';
            });
            
            fridayButton.addEventListener('mouseleave', () => {
                // Resume floating animation smoothly
                fridayButton.classList.add('floating');
                fridayButton.style.transform = 'translateZ(0) scale(1) translateY(0px)';
            });
            
            console.log('✅ Friday AI orb floating animation stabilized');
        }
        
        // Close chat
        if (fridayClose) {
            fridayClose.addEventListener('click', () => {
                this.hideChat();
            });
        }
        
        // Send message
        if (fridaySend && fridayInput) {
            fridaySend.addEventListener('click', () => {
                this.sendMessage();
            });
            
            fridayInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
        
        // Voice input - Simple and reliable event handling
        if (fridayVoice) {
            // Remove any existing event listeners by cloning
            const voiceBtnClone = fridayVoice.cloneNode(true);
            fridayVoice.parentNode.replaceChild(voiceBtnClone, fridayVoice);
            
            // Get the new button reference
            const newVoiceBtn = document.getElementById('friday-voice');
            
            if (newVoiceBtn) {
                console.log('🎤 Setting up voice button event handlers...');
                
                // Add click event listener
                newVoiceBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    console.log('🎤 Voice button clicked!');
                    console.log('🎤 Current listening state:', this.isListening);
                    console.log('🎤 FridayAI instance:', this.fridayAI);
                    console.log('🎤 FridayAI.recognition:', this.fridayAI?.recognition);
                    console.log('🎤 FridayAI.isListening:', this.fridayAI?.isListening);
                    
                    // Execute voice toggle
                this.toggleVoiceInput();
            });
                
                // Add touch event optimization for mobile
                newVoiceBtn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    newVoiceBtn.style.transform = 'scale(0.95)';
                }, { passive: false });
                
                newVoiceBtn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    newVoiceBtn.style.transform = '';
                }, { passive: false });
                
                console.log('✅ Voice button event handlers set up successfully');
            } else {
                console.error('❌ Failed to get new voice button reference');
            }
        } else {
            console.error('❌ Voice button not found during setup');
        }
        
        // Speak button - Ensure proper binding and prevent event bubbling
        if (fridaySpeak) {
            fridaySpeak.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('🎯 Speaker button clicked - preventing default behavior');
                this.toggleSpeak();
            });
        }
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            // Debug: Log what's being clicked
            console.log('Click target:', e.target);
            console.log('Chat container contains target:', chatContainer?.contains(e.target));
            console.log('Friday button contains target:', fridayButton?.contains(e.target));
            
            if (!chatContainer?.contains(e.target) && !fridayButton?.contains(e.target)) {
                console.log('Closing chat - click outside detected');
                this.hideChat();
            }
        });
        
        // Handle window resize for mobile responsiveness
        window.addEventListener('resize', () => {
            if (this.isVisible) {
                this.adjustMobilePosition();
            }
        });
        
        // Handle orientation change for mobile devices
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                if (this.isVisible) {
                    this.adjustMobilePosition();
                }
            }, 100);
        });
    }
    
    updateVoiceButton(isListening) {
        try {
        const fridayVoice = document.getElementById('friday-voice');
            if (!fridayVoice) return;
            
            // Prevent rapid state changes
            if (fridayVoice.dataset.lastState === String(isListening)) {
                return;
            }
            
            // Update state tracking
            fridayVoice.dataset.lastState = String(isListening);
            
            if (isListening) {
                // Smooth transition to listening state
                fridayVoice.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                fridayVoice.innerHTML = '⏹️';
                fridayVoice.style.background = 'linear-gradient(135deg, #ff4444, #ff6666)';
                fridayVoice.style.color = '#fff';
                fridayVoice.title = 'Stop Listening';
                fridayVoice.classList.add('listening');
                
                // Add smooth animation
                setTimeout(() => {
                    fridayVoice.style.animation = 'voiceListening 1.5s ease-in-out infinite';
                }, 50);
                
            } else {
                // Smooth transition to normal state
                fridayVoice.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                fridayVoice.innerHTML = '🎤';
                fridayVoice.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
                fridayVoice.style.color = '#000';
                fridayVoice.title = 'Voice Input';
                fridayVoice.classList.remove('listening');
                
                // Remove animation smoothly
                fridayVoice.style.animation = 'none';
            }
            
            console.log('✅ Voice button updated smoothly:', isListening ? 'listening' : 'normal');
            
        } catch (error) {
            console.error('❌ Error in updateVoiceButton:', error);
        }
    }
    
    toggleVoiceInput() {
        try {
            console.log('🎤 ===== VOICE INPUT DEBUG START =====');
            console.log('🎤 toggleVoiceInput called');
            console.log('🎤 Current listening state:', this.isListening);
            console.log('🎤 FridayAI available:', !!this.fridayAI);
            console.log('🎤 FridayAI object:', this.fridayAI);
            
            if (this.fridayAI) {
                console.log('🎤 FridayAI.recognition:', this.fridayAI.recognition);
                console.log('🎤 FridayAI.isListening:', this.fridayAI.isListening);
                console.log('🎤 FridayAI.chatInterface:', this.fridayAI.chatInterface);
                console.log('🎤 FridayAI methods:', {
                    startListening: typeof this.fridayAI.startListening,
                    stopListening: typeof this.fridayAI.stopListening,
                    handleVoiceInput: typeof this.fridayAI.handleVoiceInput
                });
            }
            
            // Prevent rapid toggling
            if (this._voiceToggleInProgress) {
                console.log('🎤 Voice toggle already in progress, ignoring');
                return;
            }
            
            this._voiceToggleInProgress = true;
            
        if (this.isListening) {
                console.log('🎤 Stopping listening...');
                if (this.fridayAI && typeof this.fridayAI.stopListening === 'function') {
            this.fridayAI.stopListening();
                    console.log('🎤 stopListening() called successfully');
                } else {
                    console.error('❌ stopListening method not available');
                }
            this.isListening = false;
            this.updateVoiceButton(false);
                console.log('🎤 Listening stopped');
        } else {
                console.log('🎤 Starting listening...');
                if (this.fridayAI && typeof this.fridayAI.startListening === 'function') {
                    console.log('🎤 Calling fridayAI.startListening()...');
            this.fridayAI.startListening();
                    console.log('🎤 startListening() called successfully');
                } else {
                    console.error('❌ FridayAI not available or startListening method missing!');
                    this.isListening = false;
                    this.updateVoiceButton(false);
                }
                console.log('🎤 Listening started');
            }
            
            // Reset toggle lock after a delay
            setTimeout(() => {
                this._voiceToggleInProgress = false;
            }, 500);
            
            console.log('🎤 ===== VOICE INPUT DEBUG END =====');
            
        } catch (error) {
            console.error('❌ Error in toggleVoiceInput:', error);
            console.error('❌ Error stack:', error.stack);
            this._voiceToggleInProgress = false;
            // Don't let errors close the chat
        }
    }
    
    toggleSpeak() {
        try {
        const fridaySpeak = document.getElementById('friday-speak');
        if (!fridaySpeak) return;
        
        // If currently speaking, stop speaking
            if (this.fridayAI && this.fridayAI.isSpeaking) {
            this.fridayAI.stopSpeaking();
            this.updateSpeakButton(false);
            return;
        }
        
        // If not speaking, start speaking
        const messagesContainer = document.getElementById('friday-messages');
        if (!messagesContainer || messagesContainer.children.length === 0) {
            // No messages to speak, show a helpful message
                if (this.fridayAI) {
            this.fridayAI.speak("Hello! I'm Friday, your AI assistant. I'm ready to help you with any questions about Bipra's portfolio, projects, or skills. Feel free to ask me anything!");
            this.updateSpeakButton(true);
            this.setupSpeechEndHandler();
                }
            return;
        }
        
        // Find the last Friday message to speak
        const messages = Array.from(messagesContainer.children);
        let lastFridayMessage = null;
        
        for (let i = messages.length - 1; i >= 0; i--) {
            const message = messages[i];
            if (message.classList.contains('friday-message') && message.classList.contains('friday')) {
                lastFridayMessage = message;
                break;
            }
        }
        
        if (lastFridayMessage) {
            const messageContent = lastFridayMessage.querySelector('.message-content');
            if (messageContent) {
                const textToSpeak = messageContent.textContent || messageContent.innerText;
                    if (textToSpeak.trim() && this.fridayAI) {
                    this.fridayAI.speak(textToSpeak);
                    this.updateSpeakButton(true);
                    this.setupSpeechEndHandler();
                }
            }
        } else {
            // No Friday messages found, don't speak automatically
            this.updateSpeakButton(false);
            }
        } catch (error) {
            console.error('Error in toggleSpeak:', error);
            // Don't let errors close the chat
        }
    }
    
    setupSpeechEndHandler() {
        try {
        // Check speech status periodically and update button when speech ends
        const checkSpeechStatus = () => {
                if (this.fridayAI && !this.fridayAI.isSpeaking) {
                this.updateSpeakButton(false);
                } else if (this.fridayAI) {
                setTimeout(checkSpeechStatus, 100);
            }
        };
        setTimeout(checkSpeechStatus, 100);
        } catch (error) {
            console.error('Error in setupSpeechEndHandler:', error);
        }
    }
    
    updateSpeakButton(isSpeaking) {
        try {
        const fridaySpeak = document.getElementById('friday-speak');
        if (fridaySpeak) {
            if (isSpeaking) {
                fridaySpeak.classList.add('speaking');
                    fridaySpeak.innerHTML = '🔇';
                fridaySpeak.title = 'Click to Stop Speaking';
                    fridaySpeak.style.background = 'linear-gradient(135deg, #ff4444, #ff6666)';
            } else {
                fridaySpeak.classList.remove('speaking');
                    fridaySpeak.innerHTML = '🔊';
                fridaySpeak.title = 'Click to Start Speaking';
                    fridaySpeak.style.background = 'linear-gradient(135deg, #00d4ff, #00ff88)';
            }
            }
        } catch (error) {
            console.error('Error in updateSpeakButton:', error);
        }
    }
    
    toggleChat() {
        const chatContainer = document.getElementById('friday-chat-container');
        if (!chatContainer) return;
        
        if (this.isVisible) {
            this.hideChat();
        } else {
            this.showChat();
        }
    }
    
    showChat() {
        const chatContainer = document.getElementById('friday-chat-container');
        if (!chatContainer) return;
        
        chatContainer.classList.add('active');
        this.isVisible = true;
        
        // Update status to show backend connection
        this.updateChatStatus();
        
        // Mobile-specific improvements
        this.handleMobileOptimizations();
        
        const fridayInput = document.getElementById('friday-input');
        if (fridayInput) {
            setTimeout(() => fridayInput.focus(), 300);
        }
        
        console.log('✅ Chat opened');
    }
    
    handleMobileOptimizations() {
        // Check if device is mobile
        const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            console.log('📱 Mobile device detected, applying optimizations');
            
            // Prevent body scroll when chat is open on mobile
            document.body.style.overflow = 'hidden';
            
            // Add mobile-specific classes
            const chatContainer = document.getElementById('friday-chat-container');
            if (chatContainer) {
                chatContainer.classList.add('mobile-optimized');
            }
            
            // Adjust positioning for mobile
            this.adjustMobilePosition();
        }
    }
    
    adjustMobilePosition() {
        const chatContainer = document.getElementById('friday-chat-container');
        if (!chatContainer) return;
        
        // Get viewport dimensions
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Calculate optimal position
        const chatHeight = Math.min(500, viewportHeight * 0.7);
        const chatWidth = Math.min(350, viewportWidth * 0.9);
        
        // Apply mobile positioning
        if (viewportWidth <= 480) {
            // Very small screens - full width with margins
            chatContainer.style.width = `${viewportWidth - 20}px`;
            chatContainer.style.left = '10px';
            chatContainer.style.right = '10px';
            chatContainer.style.bottom = '70px';
        } else if (viewportWidth <= 768) {
            // Small screens - responsive width
            chatContainer.style.width = `${chatWidth}px`;
            chatContainer.style.right = '20px';
            chatContainer.style.bottom = '80px';
        }
        
        // Adjust height for mobile
        chatContainer.style.height = `${chatHeight}px`;
        
        console.log('📱 Mobile positioning applied:', {
            width: chatContainer.style.width,
            height: chatContainer.style.height,
            bottom: chatContainer.style.bottom
        });
    }
    
    hideChat() {
        console.log('🔍 hideChat called - Stack trace:', new Error().stack);
        const chatContainer = document.getElementById('friday-chat-container');
        if (!chatContainer) return;
        
        chatContainer.classList.remove('active');
        this.isVisible = false;
        
        // Restore body scroll on mobile
        document.body.style.overflow = '';
        
        // Remove mobile optimizations
        chatContainer.classList.remove('mobile-optimized');
        
        console.log('❌ Chat closed');
    }
    
    updateChatStatus() {
        const statusElement = document.querySelector('.friday-header .status');
        if (statusElement) {
            statusElement.textContent = '🔄 Offline Mode - Local Knowledge Base';
            statusElement.style.color = '#00d4ff';
        }
    }
    
    async sendMessage() {
        const fridayInput = document.getElementById('friday-input');
        const message = fridayInput?.value?.trim();
        
        if (!message) return;
        
        // Clear input
        if (fridayInput) {
            fridayInput.value = '';
        }
        
        // Add user message
        this.addMessage('user', message);
        
        // Show typing indicator
        this.showTypingIndicator();
        
        try {
            // Get AI response
            const response = await this.fridayAI.processQuery(message);
            
            // Hide typing indicator
            this.hideTypingIndicator();
            
            // Add AI response
            this.addMessage('friday', response);
            
            // Update status after successful response
            this.updateChatStatus();
            
        } catch (error) {
            console.error('Error:', error);
            this.hideTypingIndicator();
            this.addMessage('friday', "I'm having a creative moment! Let me think of something else to help you with!");
        }
    }
    
    addMessage(sender, message) {
        const messagesContainer = document.getElementById('friday-messages');
        if (!messagesContainer) return;
        
        const messageElement = document.createElement('div');
        messageElement.className = `friday-message ${sender}`;
        
        if (sender === 'friday') {
            messageElement.innerHTML = `
                <div class="friday-avatar-small">🤖</div>
                <div class="message-content">${this.formatMessage(message)}</div>
            `;
        } else {
            messageElement.innerHTML = `
                <div class="message-content">${message}</div>
            `;
        }
        
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        setTimeout(() => {
            messageElement.classList.add('animate-in');
        }, 50);
    }
    
    formatMessage(message) {
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>')
            .replace(/🚀|⚡|📞|💼|🎓|🌟|💡|��|🔍|🤖|😅|📧|📱|🔗|��|🌍|💃|🕺|��|🎭|🎪|🎉|🎊|🎈|🎆|🌈|✨|💫|🎨|🔧|🧠|⚙️|🎨|🔍|👁️|🔐|🤖|✍️|🌟|🔍|🎭|🎪|💖|☕|🐛|🎵|🧠|🤖|❄️|🍪|🤘/g, '$&');
    }
    
    showTypingIndicator() {
        const messagesContainer = document.getElementById('friday-messages');
        if (!messagesContainer) return;
        
        const typingElement = document.createElement('div');
        typingElement.className = 'friday-message friday typing-indicator';
        typingElement.id = 'typing-indicator';
        typingElement.innerHTML = `
            <div class="friday-avatar-small">🤖</div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(typingElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    addFloatingAnimationCSS() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize when DOM is ready - REMOVED DUPLICATE INITIALIZATION
// The main initialization happens at the end of the file
console.log('🌐 DOM Ready - Advanced Friday AI will be initialized at the end of the file');

// Add enhanced CSS styles for EVE-like features
const fridayStyles = document.createElement('style');
fridayStyles.textContent = `
    /* Enhanced Friday AI Orb Styles */
    .friday-orb {
        position: relative;
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, #00ff88, #00d4ff);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 8px 32px rgba(0, 255, 136, 0.4);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    }
    
    .friday-orb:hover {
        transform: scale(1.1);
        box-shadow: 0 12px 48px rgba(0, 255, 136, 0.6);
    }
    
    .orb-face {
        position: relative;
        width: 60px;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    /* Enhanced AI Eyes */
    .ai-eyes {
        display: flex;
        gap: 12px;
        margin-bottom: 8px;
    }
    
    .ai-eye {
        width: 16px;
        height: 16px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    
    .ai-eye.wide {
        width: 18px;
        height: 18px;
        background: rgba(255, 255, 255, 1);
    }
    
    .ai-eye.focused {
        width: 14px;
        height: 14px;
        background: rgba(255, 255, 255, 0.8);
    }
    
    .ai-eye.processing {
        animation: processing 1s infinite;
    }
    
    .ai-eye.listening {
        animation: listening 0.8s infinite;
    }
    
    .ai-eye.sparkle {
        animation: sparkle 1.2s infinite;
    }
    
    .eye-pupil {
        width: 8px;
        height: 8px;
        background: #000;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .ai-eye.wide .eye-pupil {
        width: 10px;
        height: 10px;
    }
    
    .ai-eye.focused .eye-pupil {
        width: 6px;
        height: 6px;
    }
    
    /* AI Mouth */
    .ai-mouth {
        width: 20px;
        height: 8px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 0 0 10px 10px;
        transition: all 0.3s ease;
    }
    
    .ai-mouth.speaking {
        animation: speak 0.8s infinite;
    }
    
    .ai-mouth.smiling {
        border-radius: 0 0 20px 20px;
        height: 12px;
    }
    
    /* Animations */
    @keyframes processing {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
    }
    
    @keyframes listening {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
    }
    
    @keyframes sparkle {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.3); }
    }
    
    @keyframes speak {
        0%, 100% { transform: scaleY(1); }
        50% { transform: scaleY(1.5); }
    }
    
    /* Enhanced Hover Effects */
    .friday-orb:hover .ai-eyes .ai-eye {
        transform: scale(1.1);
    }
    
    .friday-orb:hover .ai-mouth {
        border-radius: 0 0 20px 20px;
        height: 12px;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        .friday-orb {
            width: 60px;
            height: 60px;
        }
        
        .orb-face {
        width: 40px;
        height: 40px;
        }
        
        .ai-eyes {
            gap: 8px;
            margin-bottom: 6px;
        }
        
        .ai-eye {
            width: 12px;
            height: 12px;
        }
        
        .eye-pupil {
        width: 6px;
            height: 6px;
        }
        
        .ai-mouth {
            width: 16px;
            height: 6px;
        }
    }
`;

document.head.appendChild(fridayStyles);

console.log('✅ Enhanced Friday AI System with EVE-like Features Loaded Successfully! - 100% OFFLINE MODE');

// Initialize Friday AI Chat Interface
let fridayChatInterface;
let fridayAI;

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeFridayAI);
} else {
    // If DOM is already loaded, wait a bit more to ensure all scripts are loaded
    setTimeout(initializeFridayAI, 100);
}

function initializeFridayAI() {
    try {
        console.log('🚀 Initializing Friday AI Chat Interface...');
        console.log('🔍 Checking DOM elements...');
        
        // Check if required elements exist
        const fridayButton = document.getElementById('friday-ai-button');
        const chatContainer = document.getElementById('friday-chat-container');
        
        console.log('🔍 Friday button found:', !!fridayButton);
        console.log('🔍 Chat container found:', !!chatContainer);
        
        if (!fridayButton) {
            console.error('❌ Friday AI button not found!');
            console.error('❌ This means the HTML element with id="friday-ai-button" is missing');
            return;
        }
        
        if (!chatContainer) {
            console.error('❌ Chat container not found!');
            console.error('❌ This means the HTML element with id="friday-chat-container" is missing');
            return;
        }
        
        // Check if classes are defined
        if (typeof FridayAI === 'undefined') {
            console.error('❌ FridayAI class is not defined!');
            return;
        }
        
        if (typeof FridayChatInterface === 'undefined') {
            console.error('❌ FridayChatInterface class is not defined!');
            return;
        }
        
        // Create Friday AI instance
        console.log('🧠 Creating Friday AI instance...');
        fridayAI = new FridayAI();
        console.log('✅ Friday AI instance created');
        
        // Make FridayAI globally available FIRST
        window.fridayAI = fridayAI;
        console.log('✅ FridayAI set in window object');
        
        // Create chat interface (it will now access the global FridayAI)
        console.log('💬 Creating chat interface...');
        fridayChatInterface = new FridayChatInterface();
        console.log('✅ Chat interface created');
        
        // Make chat interface globally available
        window.fridayChatInterface = fridayChatInterface;
        
        console.log('✅ Friday AI Chat Interface initialized successfully!');
        console.log('🎯 You can now use:');
        console.log('   - fridayAI (AI brain)');
        console.log('   - fridayChatInterface (chat UI)');
        console.log('   - fridayLightMode() (direct light mode)');
        console.log('   - fridayDarkMode() (direct dark mode)');
        
        // Test if the button click works
        console.log('🧪 Testing button functionality...');
        
        // Add a visual indicator that the button is ready
        fridayButton.style.border = '3px solid #00ff88';
        fridayButton.style.boxShadow = '0 0 20px #00ff88';
        fridayButton.style.cursor = 'pointer';
        fridayButton.style.pointerEvents = 'auto';
        
        console.log('✅ Button should now have a green border and glow');
        console.log('✅ Button cursor should be pointer');
        
        // Add global function to manually open chat
        window.openFridayChat = function() {
            console.log('🎯 Manually opening Friday chat...');
            if (fridayChatInterface) {
                fridayChatInterface.showChat();
                return 'Chat opened manually!';
            } else {
                return 'Chat interface not available!';
            }
        };
        
        // Add global theme control functions
        window.fridayLightMode = function() {
            console.log('☀️ Friday AI Light Mode function called');
            if (fridayAI && typeof fridayAI.enableLightMode === 'function') {
                return fridayAI.enableLightMode();
            } else {
                console.error('❌ Friday AI light mode not available');
                return false;
            }
        };
        
        window.fridayDarkMode = function() {
            console.log('🌙 Friday AI Dark Mode function called');
            if (fridayAI && typeof fridayAI.enableDarkMode === 'function') {
                return fridayAI.enableDarkMode();
            } else {
                console.error('❌ Friday AI dark mode not available');
                return false;
            }
        };
        
        window.fridayToggleTheme = function() {
            console.log('🔄 Friday AI Toggle Theme function called');
            if (fridayAI && typeof fridayAI.toggleTheme === 'function') {
                return fridayAI.toggleTheme();
            } else {
                console.error('❌ Friday AI toggle theme not available');
                return false;
            }
        };
        
        // Add force open function that bypasses the interface
        window.forceOpenFridayChat = function() {
            console.log('🎯 Force opening Friday chat...');
            const chatContainer = document.getElementById('friday-chat-container');
            if (chatContainer) {
                // Force show the chat
                chatContainer.style.display = 'flex';
                chatContainer.style.opacity = '1';
                chatContainer.style.visibility = 'visible';
                chatContainer.style.transform = 'translateY(0)';
                chatContainer.classList.add('active');
                
                // Focus on input
                const input = document.getElementById('friday-input');
                if (input) {
                    setTimeout(() => input.focus(), 100);
                }
                
                return 'Chat forced open!';
            } else {
                return 'Chat container not found!';
            }
        };
        
        // Add button test function
        window.testFridayButton = function() {
            console.log('🧪 Testing Friday button...');
            const button = document.getElementById('friday-ai-button');
            if (button) {
                console.log('🎯 Simulating button click...');
                button.click();
                return 'Button click simulated!';
            } else {
                return 'Button not found!';
            }
        };
        
        // Add voice input test function
        window.testVoiceInput = function() {
            console.log('🎤 Testing voice input functionality...');
            if (fridayChatInterface) {
                console.log('🎤 Chat interface available, testing voice button...');
                const voiceBtn = document.getElementById('friday-voice');
                if (voiceBtn) {
                    console.log('🎤 Voice button found, simulating click...');
                    voiceBtn.click();
                    return 'Voice button click simulated! Check console for details.';
                } else {
                    return 'Voice button not found!';
                }
            } else {
                return 'Chat interface not available!';
            }
        };
        
        // Add comprehensive test function
        window.testFridayAI = function() {
            console.log('🧪 Comprehensive Friday AI test...');
            console.log('🔍 FridayAI instance:', window.fridayAI);
            console.log('🔍 FridayChatInterface instance:', window.fridayChatInterface);
            console.log('🔍 Voice button:', document.getElementById('friday-voice'));
            console.log('🔍 Chat container:', document.getElementById('friday-chat-container'));
            
            if (window.fridayAI && window.fridayChatInterface) {
                console.log('✅ Both instances available');
                console.log('🎤 Speech recognition:', !!window.fridayAI.recognition);
                console.log('🎤 Chat interface connected:', !!window.fridayAI.chatInterface);
                return 'All components available! Use testVoiceInput() to test voice functionality.';
            } else {
                return 'Some components missing! Check console for details.';
            }
        };
        
        // Add theme system test function
        window.testThemeSystem = function() {
            console.log('🎨 Testing theme system...');
            
            // Check if theme system is available
            if (typeof window.isDarkTheme !== 'undefined' && typeof window.applyTheme === 'function') {
                console.log('✅ Main theme system available');
                console.log('🎨 Current theme:', window.isDarkTheme ? 'Dark' : 'Light');
                console.log('🎨 Body classes:', document.body.className);
                
                // Test theme toggle
                console.log('🔄 Testing theme toggle...');
                const wasDark = window.isDarkTheme;
                window.fridayToggleTheme();
                
                setTimeout(() => {
                    console.log('🎨 Theme after toggle:', window.isDarkTheme ? 'Dark' : 'Light');
                    console.log('🎨 Body classes after toggle:', document.body.className);
                    
                    if (window.isDarkTheme !== wasDark) {
                        console.log('✅ Theme toggle working!');
                        return 'Theme system working! Theme toggled successfully.';
                    } else {
                        console.log('❌ Theme toggle failed');
                        return 'Theme toggle failed. Check console for details.';
                    }
                }, 100);
                
            } else {
                console.error('❌ Main theme system not available');
                console.log('🔍 Available theme functions:', {
                    isDarkTheme: typeof window.isDarkTheme,
                    applyTheme: typeof window.applyTheme,
                    updateThemeToggle: typeof window.updateThemeToggle,
                    fridayToggleTheme: typeof window.fridayToggleTheme,
                    fridayLightMode: typeof window.fridayLightMode,
                    fridayDarkMode: typeof window.fridayDarkMode
                });
                return 'Theme system not available. Check console for details.';
            }
        };
        
        console.log('✅ Global openFridayChat function added');
        console.log('✅ Global forceOpenFridayChat function added');
        console.log('✅ Global testFridayButton function added');
        console.log('✅ Global testVoiceInput function added');
        console.log('✅ Global testFridayAI function added');
        
        // Add force show Friday AI orb function
        window.showFridayOrb = function() {
            console.log('🎯 Force showing Friday AI orb...');
            const orbContainer = document.querySelector('.friday-orb-container');
            const orb = document.getElementById('friday-ai-button');
            
            if (orbContainer && orb) {
                // Force show the orb
                orbContainer.style.display = 'block';
                orbContainer.style.visibility = 'visible';
                orbContainer.style.opacity = '1';
                orbContainer.style.zIndex = '10000';
                
                // Ensure orb is visible
                orb.style.display = 'flex';
                orb.style.visibility = 'visible';
                orb.style.opacity = '1';
                orb.style.zIndex = '10001';
                
                // Add visual indicator
                orb.style.border = '3px solid #00ff88';
                orb.style.boxShadow = '0 0 20px #00ff88';
                
                console.log('✅ Friday AI orb should now be visible!');
                return 'Friday AI orb is now visible! Look for the blue-green orb in the bottom-right corner.';
            } else {
                console.error('❌ Friday AI orb elements not found');
                return 'Friday AI orb elements not found. Check if the page is loaded properly.';
            }
        };
        
        // Add orb visibility check function
        window.checkFridayOrb = function() {
            console.log('🔍 Checking Friday AI orb visibility...');
            const orbContainer = document.querySelector('.friday-orb-container');
            const orb = document.getElementById('friday-ai-button');
            
            if (orbContainer && orb) {
                const containerStyles = window.getComputedStyle(orbContainer);
                const orbStyles = window.getComputedStyle(orb);
                
                console.log('🎯 Orb Container Status:');
                console.log('  - Display:', containerStyles.display);
                console.log('  - Visibility:', containerStyles.visibility);
                console.log('  - Opacity:', containerStyles.opacity);
                console.log('  - Z-index:', containerStyles.zIndex);
                console.log('  - Position:', containerStyles.position);
                
                console.log('🎯 Orb Button Status:');
                console.log('  - Display:', orbStyles.display);
                console.log('  - Visibility:', orbStyles.visibility);
                console.log('  - Opacity:', orbStyles.opacity);
                console.log('  - Z-index:', orbStyles.zIndex);
                
                return 'Orb status logged to console. Check console for details.';
            } else {
                console.error('❌ Friday AI orb elements not found');
                return 'Friday AI orb elements not found!';
            }
        };
        
    } catch (error) {
        console.error('❌ Error initializing Friday AI:', error);
        console.error('❌ Error stack:', error.stack);
        
        // Fallback: create basic Friday AI instance
        try {
            console.log('⚠️ Trying fallback initialization...');
            fridayAI = new FridayAI();
            window.fridayAI = fridayAI;
            console.log('⚠️ Basic Friday AI loaded as fallback');
        } catch (fallbackError) {
            console.error('❌ Fallback also failed:', fallbackError);
        }
    }
}

console.log('🎯 Friday AI Chat Interface Ready! Use testFridayButton() to test.');

