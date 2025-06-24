import React, { useState } from 'react';

const ToggleText = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className='card'>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Paragraph
      </button>
      {visible && <p>This is a toggleable paragraph!</p>}
    </div>
  );
};

export default ToggleText;
