import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    userId: PropTypes.number,
    username: PropTypes.string
  };

  render() {
    const { userId, username } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {userId ? (
          <div>Hello, {username}</div>
        ) : (
          <div>You are not logged in</div>
        )}
      </div>
    );
  }
}
