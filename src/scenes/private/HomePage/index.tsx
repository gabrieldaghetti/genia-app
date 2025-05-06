import { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useGroq } from '@/hooks/useGroq';
import { EGroqUser } from '@/types/groq';

export function HomePage() {
  const [userInput, setUserInput] = useState('');
  const { messages, sendMessage, isLoading, error } = useGroq('You are a helpful AI assistant.');

  const handleSend = async () => {
    if (userInput.trim() && !isLoading) {
      const input = userInput;
      setUserInput('');
      await sendMessage(input);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Groq Chat</Text>

      <ScrollView style={styles.chatContainer}>
        {messages.slice(1).map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message.role === EGroqUser.USER ? styles.userMessage : styles.assistantMessage,
            ]}>
            <Text>{message.content}</Text>
          </View>
        ))}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#0000ff" />
            <Text style={styles.loadingText}>Thinking...</Text>
          </View>
        )}
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Digite sua mensagem..."
          multiline
        />
        <Button title="Enviar" onPress={handleSend} disabled={isLoading || !userInput.trim()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 16,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginBottom: 8,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  loadingText: {
    marginLeft: 8,
    color: '#666',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
});
