import React from 'react'
import styled from 'styled-components';
import useSignupForm from '../helper/customHooks';
import axios from 'axios'

const Register = () => {
  const signUp = () => {
    const reqBody = {
      username: inputs.username,
      password: inputs.password
    }
    axios.post('http://localhost:3300/api/register', reqBody)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

  }
  const { inputs, handleInputChange, handleSubmit } = useSignupForm({username: '', password: ''}, signUp)
  return (
    <main>
      <FormContainer>
        <FormHeader>
          <h2>New User Registration</h2>
        </FormHeader>
        <form action="" onSubmit = {handleSubmit}>
          <SingleInput>
            <input
              type="text"
              placeholder = 'Enter your username'
              onChange = { handleInputChange }
              value = { inputs.username }
              name = 'username'
             />
          </SingleInput>
          <SingleInput>
            <input
             type="password"
             placeholder = "Enter your password"
             onChange = { handleInputChange }
             value = { inputs.password }
             name = 'password'
             />
          </SingleInput>
          <ButtonContainer>
            <button type = "submit">Submit</button>
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
export default  Register