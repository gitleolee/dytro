import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from 'emotion';

export default class Home extends Component {
  static propTypes = {
    dytins: PropTypes.number,
    userId: PropTypes.number
  };

  render() {
    const { dytins, userId } = this.props;
    if (dytins) {
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        className={css`
          a {
            font-size: 1.5rem;
            margin-top: 1rem;
            text-decoration: none;
            color: grey;
          }

          a:hover {
            margin-top: 0.9rem;
            color: aqua;
          }
        `}
      >
        <h1>Check out the wonders of math, science, and literature</h1>
        {userId && <div>You have {this.props.dytins} dytins</div>}
        {userId && (
          <Link to="/dytins">What are Dytins? Find out what Dytins are!</Link>
        )}
      </div>
    );
  }
}
