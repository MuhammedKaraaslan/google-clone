import React from 'react'

import { HomeContainer } from './Home.styles'

import HomeBody from '../../components/home-body/HomeBody'

function Home() {
  return (
    <HomeContainer>
      {/* Body */}
      <HomeBody></HomeBody>
    </HomeContainer>
  )
}

export default Home