import React from 'react'

import { HomeHeaderContainer, HomeHeaderLeft, HomeHeaderRight } from './Header.styles'

function HomeHeader() {
  return (
    <HomeHeaderContainer>
        <HomeHeaderLeft></HomeHeaderLeft>
        <HomeHeaderRight></HomeHeaderRight>
    </HomeHeaderContainer>
  )
}

export default HomeHeader