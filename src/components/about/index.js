import React, { Component } from 'react';
import { css } from 'emotion';

export default class About extends Component {
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          a {
            color: aqua;
            text-decoration: none;
            font-size: 2rem;
          }
          p {
            font-size: 2rem;
          }
          /* Style the buttons that are used to open and close the accordion panel */
          .accordion {
            color: #444;
            cursor: pointer;
            padding: 18px;
            width: 100%;
            text-align: left;
            border: none;
            outline: none;
            transition: 0.4s;
            font-size: 2.5rem;
          }

          /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */

          /* Style the accordion panel. Note: hidden by default */
          .panel {
            padding: 0 18px;
            background-color: white;
            overflow: hidden;
          }
        `}
      >
        <h1>About Dytro</h1>
        <button className="accordion">About Website</button>
        <div className="panel">
          <p>
            This website(www.dytro.net) is made in 2018. When I made this, I was
            a 5th grader. This website is made with React.js!
          </p>
        </div>
        <button className="accordion">About His Programming History</button>
        <div className="panel">
          <p>
            He started <a href="https://www.scratch.com">Scratch</a> when he was
            8 years old(9 years old in Korean). Then, he started to learn
            HTML(HyperText Markup Language) and CSS(Used to style stuff). Then,
            he had learned JavaScript. He went to another programming class, and
            he learned Java(Programming Language that Minecraft is made with).
            He also learned C(Programming Language) there too.
          </p>
        </div>
      </div>
    );
  }
}
