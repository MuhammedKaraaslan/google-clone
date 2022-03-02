import React from 'react'
import { Link } from 'react-router-dom'

import { HomeFooterBottom, HomeFooterBottomLeft, HomeFooterBottomRight, HomeFooterContainer, HomeFooterTop } from './HomeFooter.styles'

function HomeFooter() {
  return (
    <HomeFooterContainer>
      <HomeFooterTop>
        <p>Turkey</p>
      </HomeFooterTop>
      <hr />
      <HomeFooterBottom>
        <HomeFooterBottomLeft>
          <Link to='/'>About</Link>
          <Link to='/'>Advertising</Link>
          <Link to='/'>Business</Link>
          <Link to='/'>How Search works</Link>
        </HomeFooterBottomLeft>
        <HomeFooterBottomRight>
          <Link to='/'>Privacy</Link>
          <Link to='/'>Terms</Link>
          <Link to='/'>Settings</Link>
        </HomeFooterBottomRight>
      </HomeFooterBottom>
    </HomeFooterContainer>
  )
}

export default HomeFooter