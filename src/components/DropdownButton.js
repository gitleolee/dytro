import React, { useState } from 'react';
import PropTypes from 'prop-types';

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string
};

export default function DropdownButton({ onClick, username }) {
  const [menuShown, setMenuShown] = useState(false);
  let colorUser = menuShown ? 'aqua' : 'white';
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
          color: colorUser
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
