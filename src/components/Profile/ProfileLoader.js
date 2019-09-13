import React from 'react';
import PropTypes from 'prop-types';

ProfileLoader.propTypes = {
    id: PropTypes.number,
    pictureId: PropTypes.string,
    username: PropTypes.string
};

export default function ProfileLoader({ id, pictureId, username }) {
    return (
        <div>
            <img src="images/profile.png" style={{
              height: '6.4rem',
              width: '6.4rem',
              borderRadius: '50%'
            }} />
            <div>Name: {username}</div>
        </div>
    );
}
