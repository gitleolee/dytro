import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

export default class SignupForm extends React.Component {
  // do you notice the difference between the way I defined this class and the way I defined the classes for other components? Here it says React.Component, but in other components, just Component. But they both work the same way.

  static propTypes = {
    onCPasswordChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSignup: PropTypes.func.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    cpassword: PropTypes.string.isRequired,
    style: PropTypes.object
  };

  render() {
    const {
      onSignup,
      username,
      password,
      cpassword,
      onCPasswordChange,
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
          height: 30rem;
          width: 22rem;
          background-color: gray;
          border-radius: 0.25rem;
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
          <br />
          <input
            placeholder="Confirm Password"
            type="password"
            maxLength={10}
            value={cpassword}
            onChange={onCPasswordChange}
          />
        </div>
        <div>
          <button
            style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.5rem' }}
            onClick={onSignup}
          >
            Sign Up!
          </button>
        </div>
      </div>
    );
  }
}
