import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          height: 4rem;
          background: #00b9ed;
          a {
            margin-right: 1rem;
            text-decoration: none;
            color: #fff;
          }
        `}
      >
        <div
          className={css`
            a {
              margin-right: 1rem;
              text-decoration: none;
            }

            a:hover {
              color: aqua;
            }
          `}
        />
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
