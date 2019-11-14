import React from 'react';
import PropTypes from 'prop-types';

PlayerList.propTypes = {
  name: PropTypes.string,
  imageId: PropTypes.string,
  role: PropTypes.string,
  shown: PropTypes.bool,
  isDead: PropTypes.bool,
  isMyself: PropTypes.bool
};

export default function PlayerList({
  name,
  imageId,
  role,
  shown,
  isDead,
  isMyself
}) {
  const colorRole = {
    murderer: 'red',
    vigilante: 'red',
    blameshifter: 'red',
    innocent: 'lime',
    detective: 'lime',
    doctor: 'lime'
  };
  return (
    <div>
      <div
        style={{
          color: 'black',
          marginTop: '1.2rem'
        }}
      >
        <img
          src={imageId}
          alt="Profile Picture here"
          style={{
            height: '4.2rem',
            width: '4.2rem',
            borderRadius: '50%',
            marginRight: '1.2rem'
          }}
        />
        <strong
          style={{
            marginLeft: '1.2rem',
            fontSize: '1.2rem'
          }}
        >
          {name}{' '}
          {isDead && (
            <span
              style={{
                color: 'grey'
              }}
            >
              (DEAD)
            </span>
          )}
        </strong>
        {(shown || isDead) && !isMyself && (
          <strong
            style={{
              textTransform: 'uppercase',
              color: colorRole[role],
              marginLeft: '0.5rem',
              fontSize: '1.2rem'
            }}
          >
            {role}
          </strong>
        )}
        {isMyself && (
          <strong
            style={{
              textTransform: 'uppercase',
              color: 'lime',
              marginLeft: '0.5rem',
              fontSize: '1.2rem'
            }}
          >
            YOU
          </strong>
        )}
      </div>
    </div>
  );
}
