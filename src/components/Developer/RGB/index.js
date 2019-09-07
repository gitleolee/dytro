import React, { Component } from 'react';
import { css } from 'emotion';
import Color from '../../SiteUtils/Color';

export default class RGB extends Component {
  state = {
    red: 255,
    green: 255,
    blue: 255
  };
  render() {
    const { red, green, blue } = this.state;
    if (isNaN(red)) {
      this.setState({ red: 0 });
    }
    if (isNaN(green)) {
      this.setState({ green: 0 });
    }
    if (isNaN(blue)) {
      this.setState({ blue: 0 });
    }
    if (red > 255) {
      this.setState({ red: 255 });
    }
    if (green > 255) {
      this.setState({ green: 255 });
    }
    if (blue > 255) {
      this.setState({ blue: 255 });
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
        <h1>Color Getter</h1>
        <div
          className={css`
            flex-direction: none;
            input {
              margin-left: 1rem;
            }
          `}
        >
          <input
            type="text"
            placeholder="Red"
            onChange={event =>
              this.setState({ red: Number(event.target.value) })
            }
            value={red}
          />
          <input
            type="text"
            placeholder="Green"
            onChange={event =>
              this.setState({ green: Number(event.target.value) })
            }
            value={green}
          />
          <input
            type="text"
            placeholder="Blue"
            onChange={event =>
              this.setState({ blue: Number(event.target.value) })
            }
            value={blue}
          />
        </div>
        <Color red={red} green={green} blue={blue}/>
      </div>
    );
  }
}
