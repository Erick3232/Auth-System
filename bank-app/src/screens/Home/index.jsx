import React from 'react'
import { Container, MainInfoContainer } from './styled'
import  Header from '../../components/Home/Header'

const Home = () => {
  return (
    <Container>
        <MainInfoContainer>
          <Header />
        </MainInfoContainer>
    </Container>
  )
}

export default Home;