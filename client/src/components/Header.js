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
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  background: linear-gradient(to right, rgba(60, 64, 143, 0.95) 0%, rgba(91, 97, 207, 0.95) 100%);


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
    color: #ccc;
  }
`


export default Header
