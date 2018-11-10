import React, { Component } from 'react';
import { css } from 'emotion';

export default class Shiritori extends Component {
  state = {
    typed: '',
    word: '가'
  };
  render() {
    const { typed, word } = this.state;
    let correct = 0;
    if (typed[typed.length - 1] === word) {
      correct = 1;
    }
    return (
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1>Shiritori</h1>
        <input
          value={typed}
          onChange={event => this.setState({ typed: event.target.value })}
        />
        Correct: {correct}
      </div>
    );
  }
}
