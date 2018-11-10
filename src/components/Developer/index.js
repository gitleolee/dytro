import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Developer extends Component {
  static propTypes = {
    userId: PropTypes.number,
    username: PropTypes.string
  };

  render() {
    const { userId, username } = this.props;
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
          }
          a:hover {
            color: aqua;
          }
        `}
      >
        <h1>Welcome to the Developer Page!</h1>
        {userId && <div>Hello, {username}</div>}
        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p {
              font-family: Arial;
              font-size: 1.3rem;
            }
          `}
        >
          <p>
            Everybody in this country should learn to program a computer,
            because it teaches you how to think - Steve Jobs
          </p>
          <Link to="/developer/rgb">RGB</Link>
        </div>
      </div>
    );
  }
}
