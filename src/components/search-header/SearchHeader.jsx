import React from 'react'

import { Link } from 'react-router-dom'

import { SearchHeaderContainer, SearchHeaderLeft, SearchHeaderLeftTop, SearchHeaderLeftBottom, HeaderOption, SearchHeaderRight } from './SearchHeader.stlyes'

import Searchbar from '../searchbar/Searchbar'

import { Apps, Image, LocalOffer, Map, MoreVert, Search, Settings, VideoSettings } from '@mui/icons-material'
import { Avatar } from '@mui/material'

function SearchHeader({ term }) {

    return (
        <SearchHeaderContainer>
            <SearchHeaderLeft>
                <SearchHeaderLeftTop>
                    <Link to='/'>
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo" />
                    </Link>
                    <Searchbar hideButtons term={term} />
                </SearchHeaderLeftTop>
                <SearchHeaderLeftBottom>
                    <HeaderOption> <Search /> All </HeaderOption>
                    <HeaderOption> <Image /> Images </HeaderOption>
                    <HeaderOption> <Map /> Maps </HeaderOption>
                    <HeaderOption> <VideoSettings /> Videos </HeaderOption>
                    <HeaderOption> <LocalOffer /> Shopping </HeaderOption>
                    <HeaderOption> <MoreVert /> More </HeaderOption>
                    <HeaderOption>  Tools </HeaderOption>
                </SearchHeaderLeftBottom>
            </SearchHeaderLeft>
            <SearchHeaderRight>
                <Settings />
                <Apps />
                <Avatar />
            </SearchHeaderRight>

        </SearchHeaderContainer>
    )
}

export default SearchHeader