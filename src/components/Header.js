import React, { useState } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import DropdownButton from './DropdownButton';
import PropTypes from 'prop-types';

Header.propTypes = {
  userId: PropTypes.number,
  username: PropTypes.string,
  onLogout: PropTypes.func.isRequired
};

export default function Header({ onLogout, userId, username }) {
  const [profileInfo] = useState(true);

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        height: 4rem;
        background: #00b9ed;
        position: fixed;
        width: 100%;
        top: 0;
        a {
          margin-left: 1rem;
          font-size: 1.5rem;
          text-decoration: none;
          color: #fff;
        }
        a:hover {
          color: aqua;
          margin-top: 0.1rem;
        }
      `}
    >
      <div
        className={css`
          a {
            margin-left: 1rem;
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
      <Link to="/about">About</Link>
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
            width: 3rem;
            height: 2rem;
            border-radius: 0.5rem;
            padding-top: 0.25rem;
          }
          .greenLogin {
            color: white;
            background-color: rgb(0, 255, 0);
            justify-content: center;
            text-align: center;
            width: 4rem;
            height: 2rem;
            border-radius: 0.5rem;
            padding-top: 0.25rem;
          }
          .Last {
            margin-right: 0.5rem;
            font-size: 0.9rem;
          }
          a:hover {
            color: aqua;
          }
          .Logout {
            border-radius: 0px;
            width: 8rem;
            margin-top: 5.5rem;
            font-size: 1rem;
            text-align: center;
            background: rgb(237, 251, 250);
            height: 2.5rem;
            color: rgb(85, 85, 85);
          }
          #welcome {
            color: black;
          }
          .Logout:hover {
            background-color: rgb(218, 227, 224);
            margin-top: 5.5rem;
            color: rgb(85, 85, 85);
          }
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {!userId && <a className="Last">Login to an account</a>}
          {userId && profileInfo && (
            <DropdownButton onClick={logout} username={username} />
          )}
        </div>
        {userId ? (
          <Link to="/chat" className="green">
            Talk
          </Link>
        ) : (
          <Link to="/login" className="greenLogin">
            Login
          </Link>
        )}
      </div>
    </div>
  );
  function logout() {
    localStorage.removeItem('token');
    onLogout();
  }
}
