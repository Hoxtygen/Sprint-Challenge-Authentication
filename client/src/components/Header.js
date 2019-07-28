import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = props => {
  return (
    <header>
      <HeaderContainer>
        <div id="logo">
          <Link to = '/'><h1>Jokes</h1></Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="register">Register</Link>
            </li>
            <li>
              <Link to="login">Login</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </header>
  )
}

const HeaderContainer = styled.div `
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  background-color: hsl(150, 50%, 69%);

  nav {
    display: flex;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;

    a {
      padding: 5px 10px;
      margin-right: 2rem;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  a {
    text-decoration: none;
    color: #222;
  }
`


export default Header
