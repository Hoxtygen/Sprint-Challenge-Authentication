import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <div className="header-inner">
        <div id="logo">
          <h1>Jokes</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="register">Sign Up</Link>
            </li>
            <li>
              <Link to="login">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}


export default Header
