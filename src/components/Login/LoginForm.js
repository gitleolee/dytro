import React, { Component } from "react";
import PropTypes from "prop-types";
import { css } from "emotion";

// You can have one component that works as both Login Form AND Signup Form. There's absolutely no need for there to be two files when one would suffice. Can you merge LoginForm.js and SignupForm.js into one component Leo?

export default class LoginForm extends Component {
  static propTypes = {
    onPasswordChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    style: PropTypes.object
  };

  render() {
    const {
      onLogin,
      username,
      password,
      onPasswordChange,
      onUsernameChange,
      style
    } = this.props;
    return (
      <div
        style={style}
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 500px;
          width: 400px;
          background-color: aqua;
          border-radius: 25px;
          input {
            width: 20rem;
            height: 25px;
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
            style={{ marginTop: "1rem", padding: "1rem", fontSize: "1.5rem" }}
            onClick={onLogin}
          >
            Log In!
          </button>
        </div>
      </div>
    );
  }
}
