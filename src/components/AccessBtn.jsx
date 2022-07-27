import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Copyright from '../subComponents/Copyright'
import Texts from '../subComponents/Texts'

const AccessBtn = () => {
  return (
    <>
        <Texts />
        <Container>
            <Link to='/taskapp' className='taskapp__btn'>
                TASKAPP
            </Link>
        </Container>
        <Copyright />
    </>
  )
}

export default AccessBtn

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .taskapp__btn{
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

        margin: 3rem 0 4rem 0;
        text-decoration: none;
    }
`