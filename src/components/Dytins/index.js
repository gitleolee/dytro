import React, { Component } from 'react';
import { css } from 'emotion';

export default class Dytins extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          li {
            font-size: 1.2rem;
          }
        `}
      >
        <h1>What are Dytins?</h1>
        <ul>
          <li>
            Dytins are currency that allows people to buy stuff from the
            website.
          </li>
          <li>You can get it from quizes, games, and other things to do.</li>
          <li>Dytins can be used to customize your profile.</li>
        </ul>
      </div>
    );
  }
}
