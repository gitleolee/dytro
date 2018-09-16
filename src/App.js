import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
