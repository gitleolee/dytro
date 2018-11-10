import React, { Component } from 'react';
import { css } from 'emotion';

export default class Math extends Component {
  state = {
    one: 0,
    two: 0
  };
  render() {
    const { one, two } = this.state;
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          h1 {
            color: aqua;
          }
        `}
      >
        <h1>Welcome to the Math Page!</h1>
        <input
          value={one}
          onChange={event => this.setState({ one: Number(event.target.value) })}
        />
        <input
          value={two}
          onChange={event => this.setState({ two: Number(event.target.value) })}
        />
        <p>Output: {(one + two) / 2}</p>
      </div>
    );
  }
}
