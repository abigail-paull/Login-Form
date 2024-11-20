import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Message() {
  const location = useLocation(); // Get the state passed from Form.js
  const navigate = useNavigate();

  const { message } = location.state || { message: 'No message provided' };

  return (
    <div className='message-page'>
      <h1>{message}</h1>
      <button className='btn' onClick={() => navigate('/')}>Go Back to Form</button>
    </div>
  );
}

export default Message;
