/* global localStorage */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import request from 'axios';
import { URL } from './constants';

class App extends Component {
  state = {
    userId: undefined,
    username: ''
  };

  async componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const {
          data: { userId, username }
        } = await request.get(`${URL}/users/session`, {
          headers: {
            authorization: token
          }
        });
        this.setState({ userId, username });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { userId, username } = this.state;
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          component={() => <Home userId={userId} username={username} />}
        />
        <Route
          exact
          path="/login"
          component={() => (
            <Login
              userId={userId}
              username={username}
              onLogout={() =>
                this.setState({ userId: undefined, username: '' })
              }
              onLogin={({ userId, username }) =>
                this.setState({ userId, username })
              }
            />
          )}
        />
      </div>
    );
  }
}

export default App;
