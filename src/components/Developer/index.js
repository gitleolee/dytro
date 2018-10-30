import React, { Component } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';

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
          h1 {
            display: flex;
            flex-direction: center;
            align-items: center;
            justify-content: center;
          }
        `}
      >
        <h1>Welcome to the Developer Page!</h1>
        {userId ? (
          <div>Hello, {username}</div>
        ) : (
          <div>You are not logged in</div>
        )}
        <div
          className={css`
            p {
              font-family: Arial;
              font-size: 1.3rem;
              margin-left: 1%;
            }
          `}
        >
          <p>
            Everybody in this country should learn to program a computer,
            because it teaches you how to think - Steve Jobs
          </p>
        </div>
      </div>
    );
  }
}
