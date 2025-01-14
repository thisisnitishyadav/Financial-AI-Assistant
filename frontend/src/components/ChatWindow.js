import React, { useRef, useEffect } from 'react';
import Message from './Message';

function ChatWindow({ messages }) {
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the latest message
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}

export default ChatWindow;
