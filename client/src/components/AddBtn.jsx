import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DescPopUp from './DescPopUp';

const AddBtn = () => {
    const [click, setClick] = useState(false);
  return (
    <>
        <Container>
            <div className='add__btn' onClick={() => setClick(!click)}>
                Add
            </div>
            <div>
                Add A Task, Nigga  :)
            </div>
            { click && <DescPopUp /> }
        </Container>
    </>
  )
}

export default AddBtn

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .add__btn{
        color: #000;
        opacity: 0.9;
        padding: 0.5rem 1rem;
        background-color: #44f1a6;
        cursor: pointer;
        transition: 0.1s all ease;
        text-decoration: none;

        &:hover{
        opacity: 1;
        }

        margin: 3rem 0;
        text-decoration: none;
    }

    div{
        color: #44f1a6;
        font-size: 18px;
    }
`