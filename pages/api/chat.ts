import type {NextApiRequest, NextApiResponse} from 'next';
import {GoogleGenerativeAI} from '@google/generative-ai';
import {chatbotContext} from '../../data/chatbotContext';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  message: string;
  history: ChatMessage[];
}

interface ChatResponse {
  response: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatResponse>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({response: '', error: 'Method not allowed'});
  }

  try {
    const {message, history}: ChatRequest = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({response: '', error: 'Invalid message'});
    }

    // Initialize Gemini
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return res.status(500).json({
        response:
          "I'm sorry, the chatbot is not configured properly. Please contact Hamza directly at crhamza7@gmail.com.",
        error: 'API key not configured',
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
    });

    // Build conversation history for context
    const conversationHistory = history
      .slice(-6) // Keep last 6 messages for context
      .map(
        msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`,
      )
      .join('\n');

    // Create the prompt with context
    const prompt = `${chatbotContext}

Previous conversation:
${conversationHistory}

User: ${message}
Assistant: Provide a helpful, professional response.`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return res.status(200).json({response: text});
  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({
      response:
        "I apologize, but I'm experiencing technical difficulties. Please try again or contact Hamza directly at crhamza7@gmail.com.",
      error: 'Internal server error',
    });
  }
}
