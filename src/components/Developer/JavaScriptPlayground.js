import React, { Component } from 'react';
import { css } from 'emotion';

export default class JSPlayground extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          input {
            background-color: grey;
            width: 100%;
            height: 5rem;
          }
        `}
      >
        <h1>JavaScript Playground</h1>
        <input id="CodeInput" />
      </div>
    );
  }
}
