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
            <Link className="menu-item" to="/">Home</Link>
            <Link className="menu-item" to="/developer">Developer</Link>
            <Link className="menu-item" to="/articles">Articles</Link>
            <Link className="menu-item" to="/profile">Profile</Link>
        </Menu>
      </div>
    </div>
  );
}
