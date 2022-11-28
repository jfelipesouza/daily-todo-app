import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import Icon from '../assets/images/icon.svg'
import {
  Container,
  Header,
  NavBar,
  LogoContainer,
  LinksContainer,
  Links
} from '../styles/pages/LandingPage'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Daily To-do</title>
      </Head>
      <Container>
        <Header>
          <NavBar>
            <LogoContainer href="/">
              <Image alt="Logo" src={Icon} width={24} height={24} />
              <span>Daily To-do</span>
            </LogoContainer>
            <LinksContainer>
              <Links focus href={'/login'}>
                Login
              </Links>
              <Links href={'/register'}>Register</Links>
            </LinksContainer>
          </NavBar>
        </Header>
      </Container>
    </>
  )
}

export default Home
