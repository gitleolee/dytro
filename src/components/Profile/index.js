import React from 'react';
import ProfileLoader from './ProfileLoader';
import PropTypes from 'prop-types';

Profile.propTypes = {
  username: PropTypes.string
};

export default function Profile({ username }) {
  return (
    <div>
      <ProfileLoader id={0} pictureId="" username={username} />
    </div>
  );
}
