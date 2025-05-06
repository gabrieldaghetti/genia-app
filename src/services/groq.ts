// src/services/groqService.ts
import axios from 'axios';
import { EGroqUser } from '@/types/groq';

// Base Groq API URL
const API_URL = 'https://api.groq.com/openai/v1';

// Create axios instance with default configurations
const groqClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer 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`,
  },
});

// Function to send a message to Groq LLM
export const sendMessageToGroq = async (
  messages: Array<{ role: EGroqUser; content: string }>,
  model = 'llama3-8b-8192', // Default model, you can choose others like 'mixtral-8x7b-32768' or 'gemma-7b-it'
) => {
  try {
    const response = await groqClient.post('/chat/completions', {
      model,
      messages,
      temperature: 0.7,
    });

    return response.data.choices[0].message;
  } catch (error) {
    console.error('Error calling Groq API:', error);
    throw error;
  }
};
