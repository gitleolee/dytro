import React, { useState } from 'react';
import PropTypes from 'prop-types';

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default function DropdownButton({ onClick }) {
  const [menuShown, setMenuShown] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          cursor: 'pointer',
          background: '#fff',
          padding: '1rem',
          textAlign: 'center'
        }}
        onClick={() => setMenuShown(!menuShown)}
      >
        Menu
      </div>
      {menuShown && (
        <div
          className="Logout"
          style={{
            cursor: 'pointer',
            position: 'absolute',
            marginTop: '1rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={onClick}
        >
          Log out
        </div>
      )}
    </div>
  );
}
