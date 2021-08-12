import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/app">
          <li>App</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
