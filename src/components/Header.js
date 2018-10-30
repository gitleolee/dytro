import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    userId: PropTypes.number
  };
  render() {
    const { userId } = this.props;
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          height: 4rem;
          background: #00b9ed;
          a {
            margin-left: 1rem;
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
              text-decoration: none;
            }
          `}
        />
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {userId && <Link to="/chat">Chat</Link>}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/YPZ3RBy"
        >
          Discord
        </a>
        <Link to="/games/minecraft">Minecraft</Link>
      </div>
    );
  }
}
