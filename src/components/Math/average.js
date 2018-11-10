import React, { Component } from 'react';
import { css } from 'emotion';

export default class Average3 extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0
  };
  render() {
    const { one, two, three } = this.state;
    if (isNaN(one)) {
      this.setState({ one: 0 });
    }
    if (isNaN(two)) {
      this.setState({ two: 0 });
    }
    if (isNaN(three)) {
      this.setState({ three: 0 });
    }
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
        <h1>Welcome to the Average Page!</h1>
        <input
          value={one}
          onChange={event => this.setState({ one: Number(event.target.value) })}
        />
        <input
          value={two}
          onChange={event => this.setState({ two: Number(event.target.value) })}
        />
        <input
          value={three}
          onChange={event =>
            this.setState({ three: Number(event.target.value) })
          }
        />
        <p>Output: {(one + two + three) / 3}</p>
      </div>
    );
  }
}
