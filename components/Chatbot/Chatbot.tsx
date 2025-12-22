import React, {useState, useRef, useEffect} from 'react';
import Image from 'next/image';
import './Chatbot.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({isOpen, onClose}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "👋 Hi! I'm Hamza's AI assistant. Feel free to ask me about his experience, skills, or any projects he's worked on!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure animation plays
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      scrollToBottom();
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input.trim(),
          history: messages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content:
          "I'm sorry, I'm having trouble connecting right now. Please try again or contact Hamza directly at crhamza7@gmail.com.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      <div
        className={`chatbot-overlay ${isOpen ? 'overlay-open' : ''}`}
        onClick={onClose}
      />
      <div
        className={`chatbot-container ${
          isOpen && isAnimating ? 'chatbot-open' : ''
        }`}
        onClick={e => e.stopPropagation()}
        onTransitionEnd={() => {
          if (!isOpen) setIsAnimating(false);
        }}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-content">
            <div className="chatbot-avatar">
              <Image
                src="/images/dp/1.png"
                alt="Hamza"
                width={55}
                height={55}
                style={{borderRadius: '50%', objectFit: 'cover'}}
              />
            </div>
            <div className="chatbot-header-text">
              <h3 style={{color: 'white'}}>Chat with Hamza's AI</h3>
              <p className="chatbot-status" style={{color: 'white'}}>
                <span className="status-dot"></span>
                Online
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="chatbot-close-btn"
            aria-label="Close chat"
            style={{color: 'white'}}>
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.role === 'user' ? 'message-user' : 'message-assistant'
              }`}>
              {message.role === 'assistant' && (
                <div className="message-avatar">
                  <Image
                    src="/images/dp/1.png"
                    alt="Hamza"
                    width={38}
                    height={38}
                    style={{borderRadius: '50%', objectFit: 'cover'}}
                  />
                </div>
              )}
              <div className="message-content">
                <p>{message.content}</p>
                <span className="message-time">
                  {formatTime(message.timestamp)}
                </span>
              </div>
              {message.role === 'user' && (
                <div className="message-avatar user-avatar">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="11" fill="var(--accent-color)" />
                    <path
                      d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                      fill="white"
                    />
                    <path
                      d="M18 18C18 15.7909 15.3137 14 12 14C8.68629 14 6 15.7909 6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="message message-assistant">
              <div className="message-avatar">
                <Image
                  src="/images/dp/1.png"
                  alt="Hamza"
                  width={38}
                  height={38}
                  style={{borderRadius: '50%', objectFit: 'cover'}}
                />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="chatbot-input-form">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about me"
            className="chatbot-input"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="chatbot-send-btn"
            aria-label="Send message">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 1L9 11M19 1L13 19L9 11M19 1L1 7L9 11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
