import React, { useState } from 'react';
import PropTypes from 'prop-types';

ClickDropdownButton.propTypes = {
  text: PropTypes.string,
  insideUI: PropTypes.array
};

export default function ClickDropdownButton({ text, insideUI }) {
  const [menuShown, setMenuShown] = useState(false);
  let colorUser = menuShown ? 'aqua' : 'white';
  return (
    <div
      style={{ position: 'relative' }}
      onClick={() => setMenuShown(!menuShown)}
    >
      <div>{text}</div>
      {menuShown &&
        insideUI.map((val, index) => (
          <div
            key={index}
            onClick={val.onClick}
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
            {val.text}
          </div>
        ))}
    </div>
  );
}
