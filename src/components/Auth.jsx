import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Copyright from '../subComponents/Copyright'
import Texts from '../subComponents/Texts'

const Auth = () => {
  return (
    <>
      <Texts />
        <Container>
          <Link to='/signin' className='signin__btn'>
            SIGNIN 
          </Link>
          <Link to='/signup' className='signup__btn'>
            SIGNUP
          </Link>
        </Container>
      <Copyright />
    </>
  )
}

export default Auth

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 3rem 0 4rem 0;

  .signin__btn{
    color: #44f1a6;
    opacity: 0.9;
    padding: 0.75rem 1rem;
    border: 1px solid #44f1a6;
    cursor: pointer;
    transition: 0.1s all ease;
    margin-right: 0.5rem;
    text-decoration: none;

    &:hover{
      opacity: 1;
    }
  }

  .signup__btn{
    color: #000;
    opacity: 0.9;
    padding: 0.75rem 1rem;
    background-color: #44f1a6;
    cursor: pointer;
    transition: 0.1s all ease;
    margin-left: 0.5rem;
    text-decoration: none;

    &:hover{
      opacity: 1;
    }
  }
`