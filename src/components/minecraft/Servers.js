import React, { Component } from 'react';
import { css } from 'emotion';

export default class MinecraftServer extends Component {
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
            p {
              text-decoration: none;
              color: grey;
              font-size: 1.5rem;
            }
          `}
        >
          <p>Hypixel: mc.hypixel.net</p>
        </div>
      </div>
    );
  }
}
