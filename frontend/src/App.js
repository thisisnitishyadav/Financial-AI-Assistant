import React, { useState, useEffect, useRef } from 'react';
import { fetchAssistantResponse } from './api';
import Message from './components/Message';
import './styles/main.css';

function App() {
  const [userId] = useState("user123");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // add user message to chat
    const newMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, newMessage]);

    // clear input
    setInput("");

    // fetch assistant response
    const assistantReply = await fetchAssistantResponse(userId, input);

    // simulate streaming by displaying one character at a time
    let displayText = '';
    for (let char of assistantReply) {
      displayText += char;
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.sender === 'assistant') {
          // update existing assistant message
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1].text = displayText;
          return updatedMessages;
        } else {
          // add new assistant message
          return [...prev, { sender: 'assistant', text: displayText }];
        }
      });
      // wait for a short interval to simulate typing
      await new Promise((resolve) => setTimeout(resolve, 30));
    }

    // scroll to the bottom of the chat window
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // scroll to the bottom whenever messages update
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-app">
      <div className="chat-header">
        <h2>AI Financial Assistant</h2>
      </div>
      <div className="chat-window" ref={chatWindowRef}>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me a financial question..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
