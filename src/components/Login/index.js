import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'axios';
import { URL } from '../../constants';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { css } from 'emotion';

export default class Login extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
    userId: PropTypes.number,
    username: PropTypes.string
  };

  state = {
    usernameInput: '',
    passwordInput: '',
    cpasswordInput: '',
    signupFormShown: true
  };

  render() {
    const { userId, username } = this.props;
    const {
      signupFormShown,
      usernameInput,
      passwordInput,
      cpasswordInput
    } = this.state;
    /*
      this is the same as
        const username = this.state.username;
        const password = this.state.password;
        const cpassword = this.state.cpassword;
      but much shorter
    */
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 'auto',
          overflow: 'hidden'
        }}
      >
        {userId && (
          <div>
            You are logged in, {username}
            <button onClick={this.logout}>Log Out</button>
          </div>
        )}
        {!userId && (
          <div style={{ marginTop: '5rem' }}>
            <div
              className={css`
                a {
                  cursor: pointer;
                  border-radius: 5%;
                }
                .another-account {
                  color: lime;
                }
                .make-account {
                  color: orange;
                }
                .another-account:hover {
                  background: lime;
                  color: white;
                }
                .make-account:hover {
                  background: orange;
                  color: white;
                }
              `}
            >
              {signupFormShown && (
                <a
                  className="another-account"
                  onClick={() => this.setState({ signupFormShown: false })}
                >
                  <strong>Login To An Account!</strong>
                </a>
              )}
              {!signupFormShown && (
                <a
                  className="make-account"
                  onClick={() => this.setState({ signupFormShown: true })}
                >
                  <strong>Create New Account!</strong>
                </a>
              )}
              <div />
            </div>
            <div style={{ marginTop: '1rem' }}>
              {signupFormShown ? (
                <SignupForm
                  username={usernameInput}
                  password={passwordInput}
                  cpassword={cpasswordInput}
                  onSignup={this.signup}
                  onCPasswordChange={event =>
                    this.setState({ cpasswordInput: event.target.value })
                  }
                  onPasswordChange={event =>
                    this.setState({ passwordInput: event.target.value })
                  }
                  onUsernameChange={event =>
                    this.setState({ usernameInput: event.target.value })
                  }
                />
              ) : (
                <LoginForm
                  username={usernameInput}
                  password={passwordInput}
                  onLogin={this.login}
                  onPasswordChange={event =>
                    this.setState({ passwordInput: event.target.value })
                  }
                  onUsernameChange={event =>
                    this.setState({ usernameInput: event.target.value })
                  }
                />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  login = async() => {
    const { onLogin } = this.props;
    const { usernameInput, passwordInput } = this.state;
    try {
      const {
        data: { token, userId }
      } = await request.get(
        `${URL}/users?username=${usernameInput}&password=${passwordInput}`
      );
      console.log(token);
      localStorage.setItem('token', token);
      onLogin({ userId, username: usernameInput });
    } catch (error) {
      console.error(error);
    }
  };

  logout = () => {
    const { onLogout } = this.props;
    localStorage.removeItem('token');
    onLogout();
  };

  signup = async() => {
    const { onLogin } = this.props;
    const { usernameInput, passwordInput, cpasswordInput } = this.state;
    if (usernameInput.length < 3) {
      alert('Username have to be at least 3 characters');
      return;
    } else if (usernameInput.length > 20) {
      alert('Username is too long!');
      return;
    }
    if (
      this.passwordMatches({
        cpassword: cpasswordInput,
        password: passwordInput
      })
    ) {
      try {
        const {
          data: { alreadyExists, token, userId }
        } = await request.post(`${URL}/users`, {
          username: usernameInput,
          password: passwordInput
        });
        /*
          you can shorten the above

          {
            username: username,
            password: password
          }

          into

          { username, password }

          try it!
        */
        if (alreadyExists) return alert('User already exists');
        localStorage.setItem('token', token);
        return onLogin({ userId, username: usernameInput });
      } catch (error) {
        return console.error(error);
      }
    }
    alert('passwords do not match!');
  };

  passwordMatches = ({ cpassword, password }) => {
    if (cpassword === password) {
      return true;
    } else if (cpassword !== password) {
      return false;
    } else {
      return false;
    }
    // this code can be simplified even further - try it
  };
}
