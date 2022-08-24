import React from 'react'
import styled from 'styled-components'
import FadeLoader from "react-spinners/FadeLoader";


function Spinner() {
  return (
    <Container>
      <FadeLoader color="#44f1a6" height={15} width={5} />
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
`