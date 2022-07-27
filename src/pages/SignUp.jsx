import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../subComponents/Copyright'
import { BsShieldLock } from 'react-icons/bs'

const SignUp = () => {
  return (
      <>
        <Navbar />
        <Container>
          <form>
            <div className="signup__icon">
              <BsShieldLock style={{fontSize: "2rem", color: "#44f1a6", border: "1px solid #44f1a6", padding: "0.5rem", borderRadius: "50%"}}/>
            </div>
            <div className="signup__title">
              Sign Up
            </div>
            <div className="signup__form">
              <input type="text" placeholder='Name'/>
              <input type='email' placeholder='Email Address' required/>
              <input type='password' placeholder='Password' required/>
            </div>
            <div className="signup__btn">
              <button>
                SIGN UP
              </button>
            </div>
            <Link to='/signin' className='signin__link'>
              Already have an account? Sign in  
            </Link>
          </form>
        </Container>
        <Copyright />
    </>
  ) 
}

export default SignUp

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 3rem 0 4rem 0;
    color: #44f1a6;

    form{
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      border: 1px solid #44f1a6;
      padding: 2rem;

      .signup__icon{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .signup__title{
        font-size: 18px;
      }

      .signup__form{
        display: flex;
        flex-direction: column;
      }

        input{
          color: #44f1a6;
          font-size: 15px;
          width: 19rem;

          padding: 0.75rem 0;
          margin-bottom: 1rem;
          border: none;
          border-bottom: 1px solid #44f1a6;
        }

        input:nth-child(4){
          margin-bottom: 2rem;
        }
      }

      .signup__btn{
        display: flex;
        justify-content: center;
        align-items: center;

        button{
          color: #000;
          font-size: 18px;
          padding: 0.65rem 1.25rem;
          background-color: #44f1a6;
          opacity: 0.8;
          width: 19.5rem;

          margin-bottom: 1rem;
          transition: 0.1s all ease;
          cursor: pointer;

          &:hover{
            opacity: 1;
          }
        }
      }

      .signin__link{
        display: flex;
        justify-content: flex-end;
        align-items: center;

        color: #44f1a6;
        font-size: 14px;
        text-decoration: none;
      }
`