/* global localStorage */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Chat from './components/Chat';
import request from 'axios';
import { URL } from './constants';
import Minecraft from './components/minecraft';
import MinecraftServer from './components/minecraft/Servers';
import Developer from './components/Developer';
import JSPlayground from './components/Developer/JavaScriptPlayground';
import Games from './components/games';
import VillagerGen from './components/minecraft/Villager';

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
        <Header userId={userId} username={username} />
        <Route
          exact
          path="/"
          component={() => <Home userId={userId} username={username} />}
        />
        <Route
          exact
          path="/chat"
          component={() => <Chat username={username} userId={userId} />}
        />
        <Route
          exact
          path="/developer/jsplayground"
          component={() => <JSPlayground />}
        />
        <Route
          exact
          path="/developer"
          component={() => <Developer userId={userId} username={username} />}
        />
        <Route exact path="/games/minecraft" component={() => <Minecraft />} />
        <Route
          exact
          path="/games/minecraft/servers"
          component={() => <MinecraftServer />}
        />
        <Route
          exact
          path="/games/minecraft/villagergen"
          component={() => <VillagerGen />}
        />
        <Route exact path="/games" component={() => <Games />} />
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
