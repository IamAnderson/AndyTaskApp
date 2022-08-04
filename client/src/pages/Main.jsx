import React, { useEffect } from 'react'
import styled from 'styled-components'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'
import Texts from '../subComponents/Texts'
import AccessBtn from '../components/AccessBtn'

const Main = () => {

// useEffect(() => {
//   taskData();
// }, [])

// const taskData = () => {
//   axios.get('http://localhost:5000/tasks')
//   .then((res) => {
//     console.log(res.data)
//   })
//   .catch((err) => {
//     console.log("Error:", err)
//   })
// }

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