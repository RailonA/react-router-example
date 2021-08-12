import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/app">
          <li>App</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
