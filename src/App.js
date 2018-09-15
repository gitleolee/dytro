import React, { Component } from "react";
import "./App.css";
import { css } from "emotion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          className={css`
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            height: 4rem;
            background: #00b9ed;
            a {
              color: #fff;
            }
          `}
        >
          <div
            className={css`
              a {
                margin-right: 1rem;
                text-decoration: none;
                font-size: 15px;
              }

              a:hover {
                color: aqua;
              }
            `}
          >
            <a href="./index.html">Home</a>
            <a href="./login.html">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
