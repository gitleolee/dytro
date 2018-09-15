import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerMenu">
          <div id="wrapper">
            <div className="menuBar">
              <a href="./index.html" id="selectedMenu">
                Home
              </a>
              <a href="./login.html">Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
