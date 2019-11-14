import React from 'react';
import PropTypes from 'prop-types';

MyRole.propTypes = {
  role: PropTypes.string
};

export default function MyRole({ role }) {
  const colorRole = {
    murderer: 'red',
    vigilante: 'red',
    blameshifter: 'red',
    innocent: 'lime',
    detective: 'lime',
    doctor: 'lime'
  };
  return (
    <div
      style={{
        background: 'black',
        width: '25%',
        height: '5.2rem',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <strong
        style={{
          color: colorRole[role],
          fontSize: '1.2rem',
          textTransform: 'uppercase'
        }}
      >
        {role}
      </strong>
    </div>
  );
}
