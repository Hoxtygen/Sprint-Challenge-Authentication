import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
  return (
    <main>
      <FormContainer>
        <FormHeader>
          <h2>Welcome Back</h2>
        </FormHeader>
        <form action="">
          <SingleInput>
            <input
              type="text"
              placeholder = 'Enter your username'
             />
          </SingleInput>
          <SingleInput>
            <input
             type="password"
             placeholder = "Enter your password"
             />
          </SingleInput>
          <ButtonContainer>
            <button>Login</button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </main>
  )
}

const FormContainer = styled.div ` 
  border: 1px solid #ccc;
  width: 500px;
  margin: 200px auto;
  padding: 20px 10px;
`

const SingleInput = styled.div `
  input {
    width: 60%;
    box-sizing: border-box;
    line-height: 40px;
    padding: 0 20px;
    margin-bottom: 10px;
    outline: none;
    font-size: 14px;
    font-weight: 500;
  }
  input:focus {
    box-shadow: 10px 5px 5px #DEDFEF;
  }
`

const FormHeader = styled.div `
  margin-bottom: 10px;
  color: #fff;
  background: #000;
  display: flex;
  justify-content: center;
`

const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;

  button {
    line-height: 40px;
    padding: 0 40px;
    background-color: transparent;
    color: #222;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    outline: none;
    width: 100%;
    font-size: 1.5rem;

  }

  button:hover {
    box-shadow: 10px 5px 5px #DEDFEF;
  }
`
export default  Login