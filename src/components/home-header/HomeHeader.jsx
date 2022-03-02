import React from 'react'

import { HomeHeaderContainer } from './HomeHeader.styles'

import CustomHeaderRight from '../custom-header-right/CustomHeaderRight'


function HomeHeader() {
  return (
    <HomeHeaderContainer>
        <CustomHeaderRight />
    </HomeHeaderContainer>
  )
}

export default HomeHeader