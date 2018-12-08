import React, { Component } from 'react';
import { css } from 'emotion';

export default class Others extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1>The Others Page</h1>
      </div>
    );
  }
}
