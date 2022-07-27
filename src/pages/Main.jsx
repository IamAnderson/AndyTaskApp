import React from 'react'
import styled from 'styled-components'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'
import Texts from '../subComponents/Texts'
import AccessBtn from '../components/AccessBtn'

const Main = () => {
  return (
    <Container>
        <Navbar />
        {/* <Auth /> */}
        <AccessBtn />
    </Container>
  )
}

export default Main

const Container = styled.div`

`