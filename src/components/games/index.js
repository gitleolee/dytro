import React, {Component} from 'react';
import {css} from 'emotion';
import {Link} from 'react-router-dom';

export default class Games extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h2 {
            color: grey;
            font-size: 2rem;
          }
          a {
            color: grey;
            text-decoration: none;
            font-size: 2rem;
          }

          a:hover {
            color: black;
            margin-top: 0.5rem;
          }
        `}
      >
        <h1>Games</h1>
        <h2>Pre-made Games and Dytro Games</h2>
        <Link to='/games/minecraft'>Minecraft</Link>
        <Link to='/games/bitcoin'>Bitcoins</Link>
      </div>
    );
  }
}
