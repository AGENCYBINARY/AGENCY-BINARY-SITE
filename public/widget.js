/**
 * Agency Build Lab - Widget IA
 * Widget d'assistant IA intégré avec OpenAI
 */

(function() {
  'use strict';

  // Configuration du widget
  const CONFIG = {
    apiKey: window.ABL_WIDGET_CONFIG?.apiKey || '',
    apiEndpoint: window.ABL_WIDGET_CONFIG?.apiEndpoint || 'https://api.openai.com/v1/chat/completions',
    model: window.ABL_WIDGET_CONFIG?.model || 'gpt-4o-mini',
    systemPrompt: window.ABL_WIDGET_CONFIG?.systemPrompt || `Tu es l'assistant officiel d'Agency Build Lab. 

Tu présentes notre savoir-faire : création de SaaS IA, agents intelligents, automatisation, intégration de widgets IA, développement sur mesure. 

Tu réponds toujours avec un ton professionnel, clair, confident et concis. 

Tu peux expliquer notre offre, nos avantages, nos technologies, et guider un prospect. 

Tes réponses doivent être directes, utiles et expertes.`,
    brandName: 'Agency Binary',
    brandShort: 'ABL',
    widgetId: 'abl-ai-widget'
  };

  // Gestion de l'API OpenAI
  class AIAssistant {
    constructor(config) {
      this.config = config;
      this.conversationHistory = [];
    }

    async sendMessage(userMessage) {
      try {
        // Ajouter le message utilisateur à l'historique
        this.conversationHistory.push({
          role: 'user',
          content: userMessage
        });

        // Préparer les messages pour l'API
        const messages = [
          {
            role: 'system',
            content: this.config.systemPrompt
          },
          ...this.conversationHistory
        ];

        // Construire les headers conditionnellement
        const headers = {
          'Content-Type': 'application/json'
        };
        
        // Ajouter Authorization seulement si apiKey est fournie (pour OpenAI direct)
        if (this.config.apiKey) {
          headers['Authorization'] = `Bearer ${this.config.apiKey}`;
        }

        const response = await fetch(this.config.apiEndpoint, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            messages: messages
          })
        });

        if (!response.ok) {
          const error = await response.json().catch(() => ({ error: { message: 'Erreur de connexion' } }));
          throw new Error(error.error?.message || `Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0]?.message?.content || 'Désolé, je n\'ai pas pu générer de réponse.';

        // Ajouter la réponse de l'IA à l'historique
        this.conversationHistory.push({
          role: 'assistant',
          content: aiMessage
        });

        return aiMessage;
      } catch (error) {
        console.error('Erreur OpenAI:', error);
        throw error;
      }
    }

    reset() {
      this.conversationHistory = [];
    }
  }

  // Widget principal
  class ABLWidget {
    constructor(config) {
      this.config = config;
      this.isOpen = false;
      this.ai = new AIAssistant(config);
      this.shadowRoot = null;
      this.init();
    }

    init() {
      // Vérifier si le widget existe déjà
      if (document.getElementById(this.config.widgetId)) {
        return;
      }

      // Créer le conteneur principal
      const container = document.createElement('div');
      container.id = this.config.widgetId;
      document.body.appendChild(container);

      // Créer le Shadow DOM
      this.shadowRoot = container.attachShadow({ mode: 'closed' });
      
      // Injecter les styles et le HTML
      this.injectStyles();
      this.createBubble();
      this.createChatWindow();
      
      // Attacher les événements
      this.attachEvents();
    }

    injectStyles() {
      const style = document.createElement('style');
      style.textContent = `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .widget-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        /* Bulle flottante */
        .chat-bubble {
          width: 56px;
          height: 56px;
          border-radius: 28px;
          background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
          box-shadow: 0 4px 16px rgba(0, 102, 255, 0.2), 
                      0 0 0 1px rgba(0, 102, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: visible;
        }

        .chat-bubble:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 24px rgba(0, 102, 255, 0.3), 
                      0 0 0 1px rgba(0, 102, 255, 0.2);
          background: linear-gradient(135deg, #ffffff 0%, #bbdefb 100%);
        }

        .chat-bubble-logo {
          width: 32px;
          height: 32px;
          position: relative;
        }

        .chat-bubble-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Fenêtre de chat */
        .chat-window {
          position: absolute;
          bottom: 76px;
          right: 0;
          width: 400px;
          max-width: calc(100vw - 40px);
          height: 600px;
          max-height: calc(100vh - 120px);
          background: #1a1a2e;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6),
                      0 0 0 1px rgba(0, 102, 255, 0.2);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(10px) scale(0.98);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .chat-window.open {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: all;
        }

        /* Header */
        .chat-header {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(0, 102, 255, 0.2);
          background: #1a1a2e;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chat-header-logo {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .chat-header-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .chat-header-title {
          flex: 1;
        }

        .chat-header-title h3 {
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          margin: 0;
          letter-spacing: -0.2px;
        }

        .chat-header-title p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          margin: 2px 0 0 0;
        }

        .chat-close {
          width: 32px;
          height: 32px;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          font-size: 20px;
          line-height: 1;
          padding: 0;
        }

        .chat-close:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        /* Messages */
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          scroll-behavior: smooth;
          background: #1a1a2e;
        }

        .chat-messages::-webkit-scrollbar {
          width: 8px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(0, 102, 255, 0.3);
          border-radius: 4px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 102, 255, 0.5);
        }

        .message {
          display: flex;
          gap: 12px;
          animation: messageSlideIn 0.2s ease-out;
        }

        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 12px;
          overflow: hidden;
        }

        .message-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .message.user .message-avatar {
          background: transparent;
          box-shadow: none;
        }

        .message.user .message-avatar svg {
          width: 100%;
          height: 100%;
        }

        .message.assistant .message-avatar {
          background: transparent;
        }

        .message-content {
          max-width: 85%;
          word-wrap: break-word;
          line-height: 1.75;
          font-size: 15px;
        }

        .message.user .message-content {
          background: rgba(0, 102, 255, 0.3);
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 18px;
          border-bottom-right-radius: 4px;
          border: 1px solid rgba(0, 102, 255, 0.4);
        }

        .message.assistant .message-content {
          color: rgba(255, 255, 255, 0.9);
          padding: 0;
        }

        .message.assistant .message-content p {
          margin: 0 0 12px 0;
        }

        .message.assistant .message-content p:last-child {
          margin-bottom: 0;
        }

        .message-content pre {
          background: rgba(0, 0, 0, 0.2);
          padding: 12px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 12px 0;
          font-size: 13px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .message.user .message-content pre {
          background: rgba(30, 64, 175, 0.1);
          border-color: rgba(30, 64, 175, 0.3);
          color: #1e40af;
        }

        .message-content code {
          background: rgba(0, 0, 0, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 13px;
          font-family: 'Monaco', 'Courier New', monospace;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .message.user .message-content code {
          background: rgba(30, 64, 175, 0.15);
          border-color: rgba(30, 64, 175, 0.3);
          color: #1e40af;
        }

        /* Typing indicator */
        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 0;
          width: fit-content;
        }

        .typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0, 102, 255, 0.6);
          animation: typingBounce 1.4s infinite ease-in-out;
        }

        .typing-dot:nth-child(1) {
          animation-delay: -0.32s;
        }

        .typing-dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes typingBounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Input */
        .chat-input-container {
          padding: 16px;
          border-top: 1px solid rgba(0, 102, 255, 0.2);
          background: #1a1a2e;
        }

        .chat-input-wrapper {
          display: flex;
          gap: 8px;
          align-items: flex-end;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(0, 102, 255, 0.3);
          padding: 8px 12px;
          transition: all 0.2s;
        }

        .chat-input-wrapper:focus-within {
          border-color: rgba(0, 102, 255, 0.5);
          box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
        }

        .chat-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 8px 4px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          font-family: inherit;
          resize: none;
          min-height: 24px;
          max-height: 120px;
          transition: all 0.2s;
          line-height: 1.5;
        }

        .chat-input:focus {
          outline: none;
        }

        .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .chat-send {
          width: 32px;
          height: 32px;
          border: none;
          background: rgba(0, 102, 255, 0.3);
          border-radius: 6px;
          color: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          flex-shrink: 0;
          padding: 0;
          border: 1px solid rgba(0, 102, 255, 0.4);
        }

        .chat-send:hover:not(:disabled) {
          background: rgba(0, 102, 255, 0.5);
          border-color: rgba(0, 102, 255, 0.6);
          transform: scale(1.05);
        }

        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .error-message {
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(220, 38, 38, 0.3);
          color: #ff6b6b;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          margin: 8px 0;
        }

        /* Responsive */
        @media (max-width: 480px) {
          .chat-window {
            width: calc(100vw - 32px);
            height: calc(100vh - 100px);
            bottom: 76px;
            right: 16px;
            left: 16px;
            border-radius: 16px;
          }

          .widget-container {
            right: 16px;
            bottom: 16px;
          }

          .chat-bubble {
            width: 52px;
            height: 52px;
          }
        }
      `;
      this.shadowRoot.appendChild(style);
    }

    createBubble() {
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble';
      bubble.innerHTML = `
        <div class="chat-bubble-logo">
          <img src="/images/logo.png" alt="Agency Build Lab" style="width: 100%; height: 100%; object-fit: contain;" />
        </div>
      `;
      this.shadowRoot.appendChild(bubble);
      this.bubble = bubble;
    }

    createChatWindow() {
      const container = document.createElement('div');
      container.className = 'widget-container';
      this.shadowRoot.appendChild(container);

      const chatWindow = document.createElement('div');
      chatWindow.className = 'chat-window';
      
      // Header
      const header = document.createElement('div');
      header.className = 'chat-header';
      header.innerHTML = `
        <div class="chat-header-logo">
          <img src="/images/logo.png" alt="Agency Build Lab" />
        </div>
        <div class="chat-header-title">
          <h3>${this.config.brandName}</h3>
          <p>Assistant IA</p>
        </div>
        <button class="chat-close" aria-label="Fermer">×</button>
      `;
      chatWindow.appendChild(header);

      // Messages
      const messages = document.createElement('div');
      messages.className = 'chat-messages';
      chatWindow.appendChild(messages);
      this.messagesContainer = messages;

      // Input
      const inputContainer = document.createElement('div');
      inputContainer.className = 'chat-input-container';
      inputContainer.innerHTML = `
        <div class="chat-input-wrapper">
          <textarea 
            class="chat-input" 
            placeholder="Tapez votre message..."
            rows="1"
          ></textarea>
          <button class="chat-send" aria-label="Envoyer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m22 2-7 20-4-9-9-4Z"/>
              <path d="M22 2 11 13"/>
            </svg>
          </button>
        </div>
      `;
      chatWindow.appendChild(inputContainer);

      container.appendChild(chatWindow);
      container.appendChild(this.bubble);
      this.chatWindow = chatWindow;
      this.input = inputContainer.querySelector('.chat-input');
      this.sendButton = inputContainer.querySelector('.chat-send');
    }

    attachEvents() {
      // Ouvrir/fermer
      this.bubble.addEventListener('click', () => this.toggleChat());
      this.shadowRoot.querySelector('.chat-close').addEventListener('click', () => this.closeChat());

      // Envoi de message
      this.sendButton.addEventListener('click', () => this.sendMessage());
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
        // Auto-resize
        this.input.style.height = 'auto';
        this.input.style.height = Math.min(this.input.scrollHeight, 120) + 'px';
      });

      // Message de bienvenue
      if (this.config.showWelcome !== false) {
        this.addWelcomeMessage();
      }
    }

    addWelcomeMessage() {
      setTimeout(() => {
        this.addMessage('assistant', `Bonjour ! Je suis l'assistant d'${this.config.brandName}. Comment puis-je vous aider aujourd'hui ?`);
      }, 500);
    }

    toggleChat() {
      this.isOpen ? this.closeChat() : this.openChat();
    }

    openChat() {
      this.isOpen = true;
      this.chatWindow.classList.add('open');
      this.input.focus();
    }

    closeChat() {
      this.isOpen = false;
      this.chatWindow.classList.remove('open');
    }

    addMessage(role, content, isError = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${role}`;
      messageDiv.setAttribute('data-message-id', Date.now() + Math.random());

      if (isError) {
        messageDiv.innerHTML = `
          <div class="message-content error-message">
            ${this.escapeHtml(content)}
          </div>
        `;
      } else {
        let avatar = '';
        if (role === 'user') {
          avatar = `
            <div class="message-avatar user-avatar">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="rgba(0, 102, 255, 0.5)"/>
                <path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="rgba(0, 102, 255, 0.5)" stroke-width="2" stroke-linecap="round" fill="none"/>
              </svg>
            </div>
          `;
        } else {
          // Logo pour l'assistant
          avatar = `
            <div class="message-avatar">
              <img src="/images/logo.png" alt="ABL" />
            </div>
          `;
        }
        messageDiv.innerHTML = `
          ${avatar}
          <div class="message-content">${this.formatMessage(content)}</div>
        `;
      }

      this.messagesContainer.appendChild(messageDiv);
      
      // Supprimer l'indicateur de frappe si présent (supprimer tout le message, pas juste l'indicateur)
      const typingMessage = this.messagesContainer.querySelector('.message.assistant.typing');
      if (typingMessage) {
        typingMessage.remove();
      }
      
      this.scrollToBottom();
    }

    showTypingIndicator() {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'message assistant typing';
      typingDiv.innerHTML = `
        <div class="message-avatar">
          <img src="/images/logo.png" alt="ABL" />
        </div>
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      `;
      this.messagesContainer.appendChild(typingDiv);
      this.scrollToBottom();
    }

    async sendMessage() {
      const message = this.input.value.trim();
      if (!message || this.isLoading) return;

      // Ajouter le message utilisateur
      this.addMessage('user', message);
      this.input.value = '';
      this.input.style.height = 'auto';

      // Désactiver l'input
      this.isLoading = true;
      this.input.disabled = true;
      this.sendButton.disabled = true;

      // Afficher l'indicateur de frappe
      this.showTypingIndicator();

      try {
        const response = await this.ai.sendMessage(message);
        this.addMessage('assistant', response);
      } catch (error) {
        const errorMsg = error.message || 'Une erreur est survenue lors de la communication avec l\'IA.';
        this.addMessage('assistant', `Erreur : ${errorMsg}`, true);
      } finally {
        this.isLoading = false;
        this.input.disabled = false;
        this.sendButton.disabled = false;
        this.input.focus();
      }
    }

    formatMessage(text) {
      // Échapper le HTML
      let formatted = this.escapeHtml(text);
      
      // Formatage markdown basique
      formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      // Code blocks
      formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
      
      // Inline code
      formatted = formatted.replace(/`([^`]+)`/g, '<code>$1</code>');
      
      // Retours à la ligne en paragraphes
      const paragraphs = formatted.split(/\n\s*\n/);
      formatted = paragraphs.map(p => {
        const trimmed = p.trim();
        if (!trimmed) return '';
        return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
      }).join('');
      
      // Si pas de paragraphes, juste des retours à la ligne simples
      if (!formatted.includes('<p>')) {
        formatted = formatted.replace(/\n/g, '<br>');
      }
      
      return formatted;
    }

    escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    scrollToBottom() {
      setTimeout(() => {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
      }, 100);
    }
  }

  // Initialiser le widget quand le DOM est prêt
  function initWidget() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        new ABLWidget(CONFIG);
      });
    } else {
      new ABLWidget(CONFIG);
    }
  }

  // Export pour utilisation globale
  window.ABLWidget = ABLWidget;
  window.ABLWidgetConfig = CONFIG;

  // Auto-initialisation
  initWidget();
})();

