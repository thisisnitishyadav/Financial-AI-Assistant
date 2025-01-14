import React from 'react';

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">
        {text}
      </div>
    </div>
  );
}

export default Message;
