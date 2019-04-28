import React, { useState } from 'react';
import PropTypes from 'prop-types';

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default function DropdownButton({ onClick, username }) {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setMenuShown(true)}
      onMouseLeave={() => setMenuShown(false)}
    >
      <div
        style={{
          cursor: 'pointer',
          background: 'none',
          padding: '1rem',
          textAlign: 'center',
          marginRight: '1.2rem',
          marginTop: '0.6rem',
          fontSize: '1.2rem',
          color: 'rgba(51,51,51,0.5)'
        }}
      >
        {username}
      </div>
      {menuShown && (
        <div
          className="Logout"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            marginTop: '0rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'gray'
          }}
          onClick={onClick}
        >
          Log out
        </div>
      )}
    </div>
  );
}
