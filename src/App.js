import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Profile from './components/Profile';
import Math from './components/Math';
import Average3 from './components/Math/average';
import TemperatureCoverter from './components/Math/TemperatureConverter';
import Dytins from './components/Dytins';
import WeightConverter from './components/Math/WeightConverter';
import Download from './components/Download';
import PageNotExisting from './components/SiteUtils/PageNotExisting';
import HigherOrLower from './components/games/higherorlower';
import Sidebar from './components/Sidebar';
import Articles from './components/Articles';
import CreateArticle from './components/Articles/CreateArticle';
import ArticlePage from './components/Articles/ArticlePage';

export default function App() {
  const [userId, setUserId] = useState(undefined);
  const [username, setUsername] = useState('');
  const [dytins, setDytins] = useState(0);

  useEffect(() => {
    initSession();
    console.log(
      "%cDon't put stuffs that people says so! You might get hacked!",
      'color: rgb(0,255,0); font-family: Arial; font-size: 1.2rem;'
    );
    async function initSession() {
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
          setUserId(userId);
          setUsername(username);
          setDytins(dytins);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }, []);

  useEffect(() => {
    socket.on('connect', socketConnectMessage);

    return () => socket.removeListener('connect', socketConnectMessage);
    function socketConnectMessage() {
      console.log('connected to socket');
    }
  });
  return (
    <div className="App" style={{ background: 'white', marginTop: '4rem' }}>
      <Header userId={userId} username={username} onLogout={logout} />
      <Sidebar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home userId={userId} dytins={dytins} />}
        />
        <Route
          exact
          path="/dytins"
          component={() => <Dytins dytins={dytins} userId={userId} />}
        />
        <Route
          exact
          path="/chat"
          component={() => <Chat username={username} userId={userId} />}
        />
        <Route exact path="/articles" component={() => <Articles userId={userId} />} />
        <Route exact path="/articles/create" component={() => <CreateArticle userId={userId} />} />
        <Route path="/articles/link/:articleId" component={() => <ArticlePage />} />
        <Route
          exact
          path="/profile"
          component={() => <Profile username={username} />}
        />
        <Route exact path="/math/average/3" component={() => <Average3 />} />
        <Route exact path="/developer/rgb" component={() => <RGB />} />
        <Route exact path="/math" component={() => <Math />} />
        <Route
          exact
          path="/games/higherorlower"
          component={() => <HigherOrLower />}
        />
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
        <Route
          exact
          path="/login"
          component={() => (
            <Login
              userId={userId}
              username={username}
              onLogout={logout}
              onLogin={({ userId, username }) => {
                setUserId(userId);
                setUsername(username);
              }}
            />
          )}
        />
        <Route component={() => <PageNotExisting />} />
      </Switch>
    </div>
  );

  function logout() {
    setUserId(undefined);
    setUsername('');
  }
}
