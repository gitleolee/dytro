import React, { Component } from 'react';
import { css } from 'emotion';

export default class TemperatureCoverter extends Component {
  state = {
    input: '0',
    changeFrom: 'C',
    changeTo: 'F'
  };
  render() {
    const { input, changeFrom, changeTo } = this.state;
    let output = 32;
    if (changeFrom === 'C' && changeTo === 'F') {
      output = Math.floor((Number(input) * 1.8 + 32) * 10) / 10;
    }
    if (changeFrom === 'F' && changeTo === 'C') {
      output = Math.floor(((Number(input) - 32) / 1.8) * 10) / 10;
    }
    if (changeFrom === 'C' && changeTo === 'K') {
      output = Number(input) + 273.15;
    }
    if (changeFrom === 'F' && changeTo === 'K') {
      output = (Number(input) + 459.67) * (5 / 9);
    }
    if (changeFrom === 'K' && changeTo === 'C') {
      output = Number(input) - 273.15;
    }
    if (changeFrom === 'K' && changeTo === 'F') {
      output = Number(input) * (9 / 5) - 459.67;
    }
    if (changeFrom === changeTo) {
      output = Number(input);
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
        <h1>Temperature Coverter</h1>
        <div
          className={css`
            flex-direction: none;
            input {
              margin-left: 1rem;
            }
          `}
        >
          Convert From
          <input
            value={input}
            onChange={event => this.setState({ input: event.target.value })}
          />
          {changeFrom} To {output} {changeTo}
        </div>
        <div
          className={css`
            flex-direction: none;
          `}
        >
          Covert From{' '}
          <select
            value={changeFrom}
            onChange={event =>
              this.setState({ changeFrom: event.target.value })
            }
          >
            <option value="C">Celcius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
          <br />
          Covert To{' '}
          <select
            defaultValue="F"
            value={changeTo}
            onChange={event => this.setState({ changeTo: event.target.value })}
          >
            <option value="C">Celcius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </div>
      </div>
    );
  }
}
