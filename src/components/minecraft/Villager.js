import React, { Component } from 'react';
import { css } from 'emotion';

export default class VillagerGen extends Component {
  state = {
    checked: false
  };

  render() {
    const { checked } = this.state;
    return (
      <div
        className={css`
          justify-content: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          h1 {
            color: ${checked ? 'red' : 'aqua'};
          }
        `}
      >
        <h1>Villager Generator</h1>
        Current Position{' '}
        <input
          value={checked}
          onChange={() => this.setState(state => ({ checked: !state.checked }))}
          type="checkbox"
        />
        <h3 id="Output">
          /summon minecraft:villager {checked ? '1 2 3' : '~ ~ ~'}{' '}
        </h3>
      </div>
    );
  }
}
