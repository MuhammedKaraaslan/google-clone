import React from 'react'

import { HomeBodyContainer } from './HomeBody.styles'

import SearchBar from '../../components/searchbar/Searchbar'

function HomeBody() {
  return (
    <HomeBodyContainer>
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
      <SearchBar />
    </HomeBodyContainer>
  )
}

export default HomeBody