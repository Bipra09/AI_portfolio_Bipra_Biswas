// Friday AI Backend Integration Example
// This file shows how to integrate the AI backend with your existing Friday AI frontend

class FridayAIBackend {
    constructor(backendUrl = 'http://localhost:5000') {
        this.backendUrl = backendUrl;
        this.isConnected = false;
        this.checkConnection();
    }

    // Check if backend is available
    async checkConnection() {
        try {
            const response = await fetch(`${this.backendUrl}/api/health`);
            this.isConnected = response.ok;
            console.log(`Backend connection: ${this.isConnected ? '✅ Online' : '❌ Offline'}`);
        } catch (error) {
            this.isConnected = false;
            console.log('❌ Backend connection failed:', error.message);
        }
    }

    // Ask the AI a question
    async askAI(question) {
        if (!this.isConnected) {
            throw new Error('Backend is not connected. Please start the server first.');
        }

        try {
            const response = await fetch(`${this.backendUrl}/api/ask`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('AI request failed:', error);
            throw error;
        }
    }

    // Get AI response with loading state
    async getAIResponse(question, onLoading, onSuccess, onError) {
        try {
            if (onLoading) onLoading();
            
            const result = await this.askAI(question);
            
            if (onSuccess) onSuccess(result);
            return result;
        } catch (error) {
            if (onError) onError(error);
            throw error;
        }
    }
}

// Example usage in your existing Friday AI code:
/*
// Initialize the AI backend
const fridayAI = new FridayAIBackend('http://localhost:5000');

// Example 1: Simple question
async function askSimpleQuestion() {
    try {
        const result = await fridayAI.askAI("What is artificial intelligence?");
        console.log('AI Response:', result.answer);
        return result.answer;
    } catch (error) {
        console.error('Failed to get AI response:', error);
    }
}

// Example 2: With loading states and UI updates
async function askWithUI(question, responseElement) {
    try {
        const result = await fridayAI.getAIResponse(
            question,
            // onLoading
            () => {
                responseElement.innerHTML = '<div class="loading">🤔 Friday AI is thinking...</div>';
            },
            // onSuccess
            (result) => {
                responseElement.innerHTML = `
                    <div class="ai-response">
                        <h3>🤖 Friday AI:</h3>
                        <p>${result.answer}</p>
                        <small>Model: ${result.model}</small>
                    </div>
                `;
            },
            // onError
            (error) => {
                responseElement.innerHTML = `
                    <div class="error">
                        <h3>❌ Error:</h3>
                        <p>${error.message}</p>
                    </div>
                `;
            }
        );
    } catch (error) {
        console.error('Request failed:', error);
    }
}

// Example 3: Integration with existing chat interface
function integrateWithExistingChat() {
    // Find your existing chat input and response elements
    const chatInput = document.querySelector('#chat-input'); // Update selector as needed
    const chatOutput = document.querySelector('#chat-output'); // Update selector as needed
    
    if (chatInput && chatOutput) {
        // Add event listener for sending messages
        chatInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter' && chatInput.value.trim()) {
                const question = chatInput.value.trim();
                chatInput.value = '';
                
                // Add user message to chat
                chatOutput.innerHTML += `
                    <div class="user-message">
                        <strong>You:</strong> ${question}
                    </div>
                `;
                
                // Get AI response
                await askWithUI(question, chatOutput);
                
                // Scroll to bottom
                chatOutput.scrollTop = chatOutput.scrollHeight;
            }
        });
    }
}

// Example 4: Voice integration (if you have speech recognition)
function integrateWithVoice() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        
        recognition.onresult = async (event) => {
            const question = event.results[0][0].transcript;
            console.log('Voice input:', question);
            
            // Process with AI
            try {
                const result = await fridayAI.askAI(question);
                console.log('AI Response:', result.answer);
                
                // You can also use text-to-speech to speak the response
                if ('speechSynthesis' in window) {
                    const utterance = new SpeechSynthesisUtterance(result.answer);
                    speechSynthesis.speak(utterance);
                }
            } catch (error) {
                console.error('Voice AI request failed:', error);
            }
        };
        
        // Start listening
        recognition.start();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the AI backend
    const fridayAI = new FridayAIBackend();
    
    // Integrate with existing chat if available
    integrateWithExistingChat();
    
    // Example: Add a simple AI chat button
    const aiButton = document.createElement('button');
    aiButton.textContent = '🤖 Ask Friday AI';
    aiButton.onclick = () => {
        const question = prompt('What would you like to ask Friday AI?');
        if (question) {
            askWithUI(question, document.body);
        }
    };
    
    // Add button to page (customize placement as needed)
    document.body.appendChild(aiButton);
});
*/

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FridayAIBackend;
}
