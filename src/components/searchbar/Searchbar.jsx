import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";

import { SearchBarButtons, SearchBarContainer, SearchIconContainer, SearchBarInputFields, HiddenButton } from './Searchbar.styles'

import CustomButton from '../custom-button/CustomButton';

import { Mic } from '@mui/icons-material';


import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Searchbar({ hideButtons = false }) {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (event) => {
        event.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate('/search');
    }

    return (
        <SearchBarContainer>
            <SearchBarInputFields>
                <SearchIconContainer />
                <input value={input} onChange={event => setInput(event.target.value)} />
                <Mic />
            </SearchBarInputFields>
            {!hideButtons ? (
                <SearchBarButtons>
                    <CustomButton type='submit' onClick={search}>Google Search</CustomButton>
                    <CustomButton>I'm Feeling Lucky</CustomButton>
                </SearchBarButtons>
            ) : (
                <SearchBarButtons>
                    <HiddenButton type='submit' onClick={search}>Google Search</HiddenButton>
                    <HiddenButton>I'm Feeling Lucky</HiddenButton>
                </SearchBarButtons>
            )}
        </SearchBarContainer>
    )
}

export default Searchbar