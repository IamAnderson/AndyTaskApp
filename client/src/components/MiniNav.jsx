import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, reset } from "../redux/auth/authSlice"

const MiniNav = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
 

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

  return (
    <Container>
        <Link to='/profile' className="profile">
            Profile
        </Link>  
        <div onClick={onLogout} className="logout">
            Logout
        </div>
    </Container>
  )
}

export default MiniNav

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:#fff;
    
    padding: 1rem 0.75rem;
    z-index: 11;

    .profile{
        color: #000;
        background-color: #fff;
        margin-bottom: 0.5rem;
        cursor: pointer;
        transition: 0.15s all ease;
        text-decoration: none;
        z-index: 11;

        &:hover{
            background-color: #cccccc75;
        }
    }

    .logout{
        color: #000;
        background-color: #fff;
        cursor: pointer;
        transition: 0.15s all ease;
        z-index: 11;

        &:hover{
            background-color: #cccccc75;
        }
    }
`