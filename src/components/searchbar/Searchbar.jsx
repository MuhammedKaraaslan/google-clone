import React from 'react'

import { SearchBarContainer, SearchIconContainer } from './Searchbar.styles'

import { Mic } from '@mui/icons-material';

function Searchbar() {
    return (
        <SearchBarContainer>
            <SearchIconContainer />
            <input />
            <Mic />
        </SearchBarContainer>
    )
}

export default Searchbar