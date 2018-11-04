import React, { Component } from 'react';
import { css } from 'emotion';

export default class VillagerGen extends Component {
  render() {
    return (
      <div
        className={css`
          justify-content: center;
          display: flex;
          align-items: center;
          flex-direction: column;
          h1 {
            color: aqua;
          }
        `}
      >
        <h1>Villager Generator</h1>
        Current Position <input type="checkbox" />
        <h3 id="Output">/summon minecraft:villager ~ ~ ~ </h3>
      </div>
    );
  }
}
