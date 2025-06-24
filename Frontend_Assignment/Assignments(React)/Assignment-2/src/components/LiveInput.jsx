import React, { useState } from 'react';

const LiveInput = () => {
  const [text, setText] = useState('');

  return (
    <div className='card'>
      <input 
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed: {text}</p>
    </div>
  );
};

export default LiveInput;
