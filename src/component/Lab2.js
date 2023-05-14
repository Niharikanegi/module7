import React, { useState } from 'react';
// import  Emoji  from 'emoji-picker-react';

function Emoji1() {
  const [emoji, setEmoji] = useState('😀');

  function handleEmojiChange() {
    setEmoji(emoji === '😀' ? '🤪' : '😀');
  }

  return (
    <div>
      <p>{emoji}</p>
      <button onClick={handleEmojiChange}>Changed Mode</button>
    </div>
  );
}

export default Emoji1;
