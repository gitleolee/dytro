import React, { Component } from 'react';
import { css } from 'emotion';

export default class WeightConverter extends Component {
  state = {
    inputS: 0,
    changeFrom: 'KG',
    changeTo: 'LB'
  };
  render() {
    const { inputS, changeFrom, changeTo } = this.state;
    let output = 32;
    if (changeFrom === 'LB' && changeTo === 'KG') {
      output = Math.floor(Number(inputS) * 0.45359237 * 1000) / 1000;
    }
    if (changeFrom === 'LB' && changeTo === 'G') {
      output =
        Math.floor((Number(inputS) / 1000) * 0.45359237 * 1000000) / 1000000;
    }
    if (changeFrom === 'KG' && changeTo === 'LB') {
      output = Math.floor((Number(inputS) / 0.45359237) * 1000) / 1000;
    }
    if (changeFrom === 'KG' && changeTo === 'G') {
      output = Number(inputS) / 1000;
    }
    if (changeFrom === 'G' && changeTo === 'KG') {
      output = Number(inputS) * 1000;
    }
    if (changeFrom === 'G' && changeTo === 'LB') {
      output =
        Math.floor((Number(inputS) / 1000 / 0.45359237) * 1000000) / 1000000;
    }
    if (changeFrom === changeTo) {
      output = Number(inputS);
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
            value={inputS}
            onChange={event =>
              this.setState({
                inputS: event.target.value
              })
            }
          />
          {changeFrom.toLowerCase()} To {output} {changeTo.toLowerCase()}
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
            <option value="KG">Kilograms</option>
            <option value="LB">Pounds</option>
            <option value="G">Grams</option>
          </select>
          <br />
          Covert To{' '}
          <select
            value={changeTo}
            onChange={event => this.setState({ changeTo: event.target.value })}
          >
            <option value="KG">Kilograms</option>
            <option value="LB">Pounds</option>
            <option value="G">Grams</option>
          </select>
        </div>
      </div>
    );
  }
}
