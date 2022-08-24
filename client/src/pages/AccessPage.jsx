import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AccessBtn from '../components/AccessBtn'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'
import Texts from '../subComponents/Texts'

const AccessPage = () => {
  const { user} = useSelector((state) => state.auth) 
  return (
    <Container>
        <Navbar />
        {user ? <AccessBtn /> : <Auth />}
    </Container>
  )
}

export default AccessPage

const Container = styled.div`

`