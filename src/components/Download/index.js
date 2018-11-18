import React, { Component } from 'react';
import { css } from 'emotion';

export default class Download extends Component {
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
        <h1>Downloads</h1>
        <div
          className={css`
            flex-direction: none;
            a {
              color: grey;
              margin-top: 1rem;
              text-decoration: none;
            }
          `}
        >
          <div>Mods Made By Dytro Downloads</div>
          <a href="./files/mods/dom-1.7.jar">Dytro Official Mod 1.7</a>
        </div>
      </div>
    );
  }
}
