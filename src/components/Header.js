import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Header extends Component {
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
          align-items: center;
          height: 4rem;
          background: #00b9ed;
          a {
            margin-left: 1rem;
            font-size: 1.5rem;
            text-decoration: none;
            color: #fff;
          }
        `}
      >
        <div
          className={css`
            a {
              margin-left: 1rem;
              text-decoration: none;
            }

            a:hover {
              text-decoration: none;
            }
          `}
        />
        <Link to="/">Home</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/YPZ3RBy"
        >
          Discord
        </a>
        <Link to="/games">Games</Link>
        <Link to="/developer">Developer</Link>
        <div
          className={css`
            display: flex;
            align-items: center;
            height: 4rem;
            background: #00b9ed;
            flex-direction: row-reverse;
            width: 100%;
            a {
              margin-left: 1rem;
              margin-right: 0rem;
            }
            .green {
              color: white;
              background-color: rgb(0, 255, 0);
              justify-content: center;
              text-align: center;
              width: 50px;
              height: 2rem;
              border-radius: 5px;
              padding-top: 0.25rem;
            }
            .Last {
              margin-right: 1rem;
            }
          `}
        >
          {userId ? (
            <a className="Last">Welcome, {username}</a>
          ) : (
            <a className="Last">Login to an account</a>
          )}
          {userId ? (
            <Link to="/chat" className="green">
              Talk
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    );
  }
}
