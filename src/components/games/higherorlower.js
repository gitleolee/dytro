import React, { useState } from 'react';
import { css } from 'emotion';

export default function HigherOrLower() {
  const [value, setValue] = useState('');
  let stat = 'None';
  const match = Math.floor(Math.random() * 100000000);
  console.log([match, stat, value]);

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        input {
          width: 4rem;
        }
        button {
          margin-top: 1.5rem;
          border-radius: 0px;
        }
      `}
    >
      <h1>Higher or Lower</h1>
      <input
        maxLength={8}
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
      />
      <button onClick={check}>Try</button>
      <h3>Stats: {stat}</h3>
    </div>
  );
  function check() {
    if (Number(value) === match) {
      stat = 'Correct';
    }
    if (Number(value) < match) {
      stat = 'Higher';
    }
    if (Number(value) > match) {
      stat = 'Lower';
    }
  }
}
