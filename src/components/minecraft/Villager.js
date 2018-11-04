import React, { Component } from 'react';
import { css } from 'emotion';

export default class VillagerGen extends Component {
  state = {
    checked: false,
    xPos: '0',
    yPos: '0',
    zPos: '0',
    nbtE: false,
    name: ['']
  };

  render() {
    const { checked, xPos, yPos, zPos, nbtE, name } = this.state;
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
        <div style={{ display: 'flex' }}>
          <div>Current Position</div>
          <input
            style={{ marginLeft: '0.5rem' }}
            value={checked}
            onChange={() =>
              this.setState(state => ({ checked: !state.checked }))
            }
            type="checkbox"
          />
        </div>
        <input
          placeholder="X Pos"
          value={xPos}
          onChange={e => this.setState({ xPos: e.target.value })}
        />
        <input
          placeholder="Y Pos"
          value={yPos}
          onChange={e => this.setState({ yPos: e.target.value })}
        />
        <input
          placeholder="Z Pos"
          value={zPos}
          onChange={e => this.setState({ zPos: e.target.value })}
        />
        <div style={{ display: 'flex' }}>
          <div>Enable NBT</div>
          <input
            style={{ marginLeft: '0.5rem' }}
            value={nbtE}
            onChange={() => this.setState(state => ({ nbtE: !state.nbtE }))}
            type="checkbox"
          />
        </div>
        <input
          placeholder="Enter Name"
          value={name}
          onChange={e => this.setState({ name: [e.target.value] })}
        />
        <h3 id="Output">
          /summon minecraft:villager{' '}
          {checked ? '~ ~ ~' : [xPos, ' ', yPos, ' ', zPos]} {nbtE && ['{']}
          {nbtE && ['CustomName:"{\\"text\\":\\"', name, '\\"}"']}
          {nbtE && '}'}
        </h3>
      </div>
    );
  }
}
