/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
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
        <h1>Page Not Found</h1>
        <Link to="/">We can't find the page you requested. Click to go to the homepage</Link>
      </div>
    );
  }
}
