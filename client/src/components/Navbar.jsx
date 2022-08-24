import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiTask } from 'react-icons/bi'
import MiniNav from './MiniNav'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const [click, setClick] = useState(false);

  return (
    <Container>
      <Link to={user ? "/access" : "/"} className='ts__logo'>
        <BiTask />
      </Link>
      {
        user &&
          <div className="right__section">
            <Link to='/taskapp' className='taskapp__nav'>
              Task App
            </Link>
            <span className="auth__display" onClick={() => setClick(!click)}>
              {user && <div>A</div>}
            </span>
          </div>
      }

      {click && (
        <div className='mn__aside'>
          <MiniNav />
        </div>
      )}
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid #44f1a6; */
  height: 15vh;

  padding: 0 4rem;
  color: #44f1a6;

  @media screen and (max-width: 945px) {
    padding: 0 2rem;
  }

  .ts__logo{
    font-size: 2rem;
    text-decoration: none;
    color: #44f1a6;
    text-decoration: none;
  }

  .right__section{
    display: flex;
    align-items: center;
    width: 15vw;

    @media screen and (max-width: 945px) {
      width: 18vw;
    }

    @media screen and (max-width: 600px) {
      width: 30vw;
    }

    .taskapp__nav{
      flex: 0.7;
      color: #44f1a6;
      cursor: pointer;
      text-decoration: none;
    }

    .auth__display{
      flex: 0.3 ;
      z-index: 9;
      position: relative;

      div{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #44f1a6;

        padding: 0.5rem 0.25rem;
      }
    }
  }

  .mn__aside{
    position: absolute;
    top: 13%;
    right: 5%;

    @media screen and (max-width: 945px) {
      right: 2.5vw;
    }

    @media screen and (max-width: 600px) {
      top: 12%;
      right: 3.5vw;
    }
  }
`