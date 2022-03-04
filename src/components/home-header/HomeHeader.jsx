import React from 'react'

import { Link } from 'react-router-dom'

import { AppsContainer, AvatarContainer, HeaderRight, HomeHeaderContainer } from './HomeHeader.styles'

function HomeHeader() {
  return (
    <HomeHeaderContainer>
        <HeaderRight>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsContainer />
            <AvatarContainer />
        </HeaderRight>
    </HomeHeaderContainer>
  )
}

export default HomeHeader