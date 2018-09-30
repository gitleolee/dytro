import React, { Component } from 'react';
import { css } from 'emotion';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  render() {
    const username = this.state.username;
    const password = this.state.password;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            marginTop: '6rem'
          }}
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
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              maxLength={10}
              value={password}
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </div>
          <div>
            <button
              style={{ marginTop: '1rem', padding: '1rem', fontSize: '1.5rem' }}
              onClick={this.checkIfPasswordIsCorrect}
            >
              Log In!
            </button>
          </div>
        </div>
      </div>
    );
  }

  checkIfPasswordIsCorrect = () => {
    const { password, username } = this.state;

    console.log(password);
    console.log(username);
  };
}
