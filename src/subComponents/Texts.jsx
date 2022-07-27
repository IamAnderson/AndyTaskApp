import React from 'react'
import styled from 'styled-components'

const Texts = () => {
  return (
    <Container>
        <div className='text__header'>
            Task App
        </div>
        <div className="text__base">
            Built with Reactjs, Nodejs and Mongodb.
        </div>
    </Container>
  )
}

export default Texts

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: #44f1a6;

    margin-top: 2rem;

    .text__header{
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 44px;

        margin-bottom: 1rem;
    }

    .text__base{
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: 21px;

        @media screen and (max-width: 380px) {
            font-size: 18px;
          }
    }
`