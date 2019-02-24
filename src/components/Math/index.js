import React, { Component } from 'react';
import { css } from 'emotion';

export default class Math extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h1 {
            color: aqua;
          }
        `}
      >
        <h1>Welcome to the Math Page!</h1>
      </div>
    );
  }
}
