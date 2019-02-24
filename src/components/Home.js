import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    dytins: PropTypes.number,
    userId: PropTypes.number
  };

  render() {
    const { dytins, userId } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <h1>Check out the wonders of math, science, and literature</h1>
        {userId && <div>You have {this.props.dytins} dytins</div>}
      </div>
    );
  }
}
