import React, { Component } from "react";
import { css } from "emotion";

export default class Login extends Component {
  render() {
    return (
      <div
        className={css`
          input {
            margin-botton: 10px;
            width: 130px;
            height: 25px;
            margin-top: 5px;
            margin-left: 10px;
          }

          #container {
            margin-top: 100px;
            height: 500px;
            width: 400px;
            background-color: aqua;
            border-radius: 25px;
            margin-left: 500px;
          }

          #name {
            margin-top: 250px;
          }
        `}
      >
        <div id="container">
          <input id="name" placeholder="Username" type="text" maxLength={15} />
          <br />
          <input placeholder="Password" type="password" maxLength={10} />
        </div>
      </div>
    );
  }
}
