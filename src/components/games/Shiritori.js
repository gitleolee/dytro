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
    if (typed[0] === word) {
      correct = 1;
    }
    const onSubmit = async event => {
      if (this.correct === 1) {
        this.setState({ word: this.typed[this.typed.length - 1] });
        event.target.value = '';
      }
    };
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
        Word: {word}
        <input
          value={typed}
          onChange={event => this.setState({ typed: event.target.value })}
          onSubmit={onSubmit}
        />
        isCorrect: {correct}
      </div>
    );
  }
}
