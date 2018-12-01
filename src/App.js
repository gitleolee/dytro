/* global localStorage */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Chat from './components/Chat';
import request from 'axios';
import { socket } from './helpers/requestHelpers';
import { URL } from './constants';
import Minecraft from './components/minecraft';
import MinecraftServer from './components/minecraft/Servers';
import Developer from './components/Developer';
import Games from './components/games';
import About from './components/about';
import RGB from './components/Developer/RGB';
import Math from './components/Math';
import Average3 from './components/Math/average';
import TemperatureCoverter from './components/Math/TemperatureConverter';
import Shiritori from './components/games/Shiritori';
import Dytins from './components/Dytins';
import WeightConverter from './components/Math/WeightConverter';
import Download from './components/Download';

class App extends Component {
  state = {
    userId: undefined,
    username: '',
    dytins: 0
  };

  async componentDidMount() {
    // I moved this here because if you put this console.log intto render() method it will run everytime your state changes (which slows down your app slightly)
    console.log(
      "%cDon't put stuffs that people says so! You might get hacked!",
      'color: rgb(0,255,0); font-family: Arial; font-size: 1.2rem;'
    );
    socket.on('connect', () => {
      console.log('connected to socket');
    });
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const {
          data: { userId, username, dytins }
        } = await request.get(`${URL}/users/session`, {
          headers: {
            authorization: token
          }
        });
        this.setState({ userId, username, dytins });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { userId, username, dytins } = this.state;
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
          path="/dytins"
          component={() => <Dytins dytins={dytins} />}
        />
        <Route
          exact
          path="/chat"
          component={() => <Chat username={username} userId={userId} />}
        />
        <Route exact path="/math/average/3" component={() => <Average3 />} />
        <Route exact path="/developer/rgb" component={() => <RGB />} />
        <Route exact path="/math" component={() => <Math />} />
        <Route
          exact
          path="/math/temperatureconverter"
          component={() => <TemperatureCoverter />}
        />
        <Route
          exact
          path="/math/weightconverter"
          component={() => <WeightConverter />}
        />
        <Route
          exact
          path="/developer"
          component={() => <Developer userId={userId} username={username} />}
        />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/downloads" component={() => <Download />} />
        <Route exact path="/games/minecraft" component={() => <Minecraft />} />
        <Route
          exact
          path="/games/minecraft/servers"
          component={() => <MinecraftServer />}
        />
        <Route exact path="/games" component={() => <Games />} />
        <Route exact path="/games/shiritori" component={() => <Shiritori />} />
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
