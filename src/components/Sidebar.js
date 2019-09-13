import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{ fontFamily: 'arial' }}>
      <div
        style={{
          textAlign: 'center',
          overflow: 'auto'
        }}
      >
        <Menu>
        <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </Menu>
      </div>
    </div>
  );
}
