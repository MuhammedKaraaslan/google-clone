import React from 'react'

import { HomeContainer } from './HomePage.styles'

import HomeHeader from '../../components/home-header/HomeHeader'
import HomeBody from '../../components/home-body/HomeBody'
import HomeFooter from '../../components/home-footer/HomeFooter'

function HomePage() {
  return (
    <HomeContainer>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </HomeContainer>
  )
}

export default HomePage