import React, { useState } from 'react';
import PropTypes from 'prop-types';
import request from 'axios';
import { URL } from '../../constants/URL';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { css } from 'emotion';
import background from './background.jpg';

Login.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  userId: PropTypes.number,
  username: PropTypes.string
};

export default function Login({ onLogout, onLogin, userId, username }) {
  let [usernameInput, setUsernameInput] = useState('');
  let [passwordInput, setPasswordInput] = useState('');
  let [cpasswordInput, setCPasswordInput] = useState('');
  let [signupFormShown, setSignupFormShown] = useState(true);
  // eslint-disable-next-line no-unused-vars
  let [userExists, setUserExists] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: 'auto',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundImage: `url(${background})`
      }}
    >
      {userId && (
        <div>
          You are logged in, {username}
          <button onClick={logout}>Log Out</button>
        </div>
      )}
      {!userId && (
        <div style={{ marginTop: '5rem' }}>
          <div
            className={css`
              span {
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
              <span
                className="another-account"
                onClick={() => setSignupFormShown(false)}
              >
                <strong>Login To An Account!</strong>
              </span>
            )}
            {!signupFormShown && (
              <span
                className="make-account"
                onClick={() => setSignupFormShown(true)}
              >
                <strong>Create New Account!</strong>
              </span>
            )}
            <div />
          </div>
          <div style={{ marginTop: '1rem' }}>
            {signupFormShown ? (
              <SignupForm
                username={usernameInput}
                password={passwordInput}
                cpassword={cpasswordInput}
                onSignup={signup}
                onCPasswordChange={event =>
                  setCPasswordInput(event.target.value)
                }
                onPasswordChange={event => setPasswordInput(event.target.value)}
                onUsernameChange={event => setUsernameInput(event.target.value)}
              />
            ) : (
              <LoginForm
                username={usernameInput}
                password={passwordInput}
                onLogin={login}
                onPasswordChange={event => setPasswordInput(event.target.value)}
                onUsernameChange={event => setUsernameInput(event.target.value)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

async function login() {
  try {
    const {
      data: { token, userId }
    } = await request.get(
      `${URL}/users?username=${this.usernameInput}&password=${this.passwordInput}`
    );
    console.log(token);
    localStorage.setItem('token', token);
    this.onLogin({ userId, username: this.usernameInput });
  } catch (error) {
    console.error(error);
  }
}

async function logout() {
  localStorage.removeItem('token');
  this.onLogout();
}

async function signup() {
  const { usernameInput, passwordInput, cpasswordInput } = this;
  if (usernameInput.length < 3) {
    alert('Username have to be at least 3 characters');
    return;
  } else if (usernameInput.length > 20) {
    alert('Username is too long!');
    return;
  }
  if (
    passwordMatches({
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
      this.setUserExists(alreadyExists);
      if (this.userExists) return alert('User already exists!');
      localStorage.setItem('token', token);
      return this.onLogin({ userId, username: usernameInput });
    } catch (error) {
      return console.error(error);
    }
  }
  alert('passwords do not match!');
}

async function passwordMatches(cpassword, password) {
  if (cpassword === password) {
    return true;
  } else if (cpassword !== password) {
    return false;
  } else {
    return false;
  }
  // this code can be simplified even further - try it
}
