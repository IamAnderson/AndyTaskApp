import React from 'react'
import styled from 'styled-components'

function Spinner() {
  return (
    <Container>
        <h1>Loading...</h1>
    </Container>
  )
}

export default Spinner

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    z-index: 10;

    h1{
        color: red;
    }
`