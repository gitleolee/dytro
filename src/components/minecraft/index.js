import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

export default class Minecraft extends Component {
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
        <h1>Welcome to the Minecraft Page</h1>
        <div
          className={css`
            a {
              text-decoration: none;
              color: aqua;
              font-size: 1.5rem;
            }
          `}
        >
          <Link to="/games/minecraft/servers">Servers</Link>
        </div>
      </div>
    );
  }
}
