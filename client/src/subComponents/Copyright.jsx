import React from 'react'
import styled from 'styled-components'

const Copyright = () => {
  return (
    <Container>
        Copyright © Anderson Simeon 2022
    </Container>
  )
}

export default Copyright

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    color: #44f1a6;
    font-size: 14px;
`