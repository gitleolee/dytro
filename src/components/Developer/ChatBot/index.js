import React, {useState} from 'react';

export default function ChatBot() {
  const [input, setInput] = useState('');
  // const [output, setOutput] = useState('');
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }}
    >
      <br />
      <input
        onChange={event => setInput(event.target.value)}
        value={input}
        placeholder='Talk with the bot.'
      />
      <div
        style={{
          fontSize: '1.2rem'
        }}
      >
        Output: {'output'}
      </div>
      <button
        style={{
          background: 'orange',
          color: 'white'
        }}
        // onClick={send}
      >
        Send
      </button>
    </div>
  );
}
