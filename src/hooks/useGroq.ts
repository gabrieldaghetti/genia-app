// src/hooks/useGroq.ts
import { useState } from 'react';
import { sendMessageToGroq } from '@/services/groq';
import { EGroqUser } from '@/types/groq';

type Message = {
  role: EGroqUser;
  content: string;
};

export const useGroq = (systemPrompt = 'You are a helpful assistant.') => {
  const [messages, setMessages] = useState<Message[]>([
    { role: EGroqUser.SYSTEM, content: systemPrompt },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (userMessage: string, model?: string) => {
    setIsLoading(true);
    setError(null);

    // Add user message to state
    const newMessages = [...messages, { role: EGroqUser.USER, content: userMessage }];

    setMessages(newMessages);

    try {
      // Send to Groq API
      const response = await sendMessageToGroq(newMessages, model);

      // Add assistant response to state
      setMessages((prev) => [...prev, response]);
      return response.content;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    resetConversation: () => setMessages([{ role: EGroqUser.SYSTEM, content: systemPrompt }]),
  };
};
