import React from 'react'

import { ButtonsContainer, HomeBodyContainer } from './HomeBody.styles'

import SearchBar from '../../components/searchbar/Searchbar'
import CustomButton from '../custom-button/CustomButton'

function HomeBody() {
  return (
    <HomeBodyContainer>
        {/* Logo */}
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        <SearchBar />
        {/* SearchBar */}
        <ButtonsContainer>
            <CustomButton>Google Search</CustomButton>
            <CustomButton>I'm Feeling Lucky</CustomButton>
        </ButtonsContainer>
        {/* Buttons */}
    </HomeBodyContainer>
  )
}

export default HomeBody