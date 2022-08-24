import React from 'react'
import styled from 'styled-components'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'

const Main = () => {

  return (
    <Container>
      <Navbar />
      <Auth />
    </Container>
  )
}

export default Main

const Container = styled.div`

`