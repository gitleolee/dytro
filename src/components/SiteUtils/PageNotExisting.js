import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

export default class PageNotExisting extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          a {
            color: grey;
            text-decoration: none;
            font-size: 1.3rem;
          }
          a:hover {
            color: aqua;
          }
        `}
      >
        <h1>Page Does Not Exist!</h1>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }
}
