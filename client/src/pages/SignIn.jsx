import React, { useEffect, useState } from 'react'
import { BsShieldLock } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Copyright from '../subComponents/Copyright'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../redux/auth/authSlice'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  
  const { email, password } = formData

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      alert(message)
    }

    if (isSuccess || user) {
      navigate('/access')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
        <Navbar />
          <Container>
            <form onSubmit={onSubmit}>
              <div className="signin__icon">
                <BsShieldLock style={{fontSize: "2rem", color: "#44f1a6", border: "1px solid #44f1a6", padding: "0.5rem", borderRadius: "50%"}}/>
              </div>
              <div className="signin__title">
                Sign In
              </div>
              <div className="signin__form">
              <input type='email' name='email' id='email' value={email} onChange={onChange} placeholder='Email Address' />
              <input type='password' name='password' id='password' value={password} onChange={onChange} placeholder='Password' />
              </div>
              <div className="signin__btn">
                <button>
                  SIGN IN
                </button>
              </div>
              <Link to='/signup' className='signup__link'>
                Dont have an account? Sign up  
              </Link>
            </form>
          </Container>
        <Copyright />
    </>
  )
}

export default SignIn

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

      .signin__icon{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .signin__title{
        font-size: 18px;
        margin-bottom: 1.15rem;
      }

      .signin__form{
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

        span{
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          
          input{
            width: 2rem;
            font-size: 18px;
          }
        }
      }

      .signin__btn{
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

      .signup__link{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        color: #44f1a6;
        font-size: 14px;
        text-decoration: none;
      }
`