import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

LoginForm.propTypes = {
  onPasswordChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default function LoginForm({
  onPasswordChange,
  onLogin,
  onUsernameChange,
  username,
  password,
  style
}) {
  return (
    <div
      style={style}
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 30rem;
        width: 22rem;
        input {
          width: 20rem;
          height: 25px;
        }
        .invalid-feedback {
          color: red;
          font-size: 1.2rem;
        }
        button {
          background: orange;
          color: white;
          width: 8rem;
          height: 4rem;
        }
      `}
    >
      <div>
        <input
          placeholder="Username"
          type="text"
          maxLength={15}
          value={username}
          onChange={onUsernameChange}
          autoComplete="on"
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          maxLength={10}
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <div>
        <button
          style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.5rem' }}
          onClick={onLogin}
        >
          Log In!
        </button>
      </div>
    </div>
  );
}
