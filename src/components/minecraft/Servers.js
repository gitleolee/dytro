import React, { Component } from 'react';
import { css } from 'emotion';

export default class Server extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1>Minecraft Servers</h1>
        <div
          className={css`
            a {
              text-decoration: none;
              color: aqua;
              font-size: 1.5rem;
            }
          `}
        >
          <a>Servers</a>
        </div>
      </div>
    );
  }
}
