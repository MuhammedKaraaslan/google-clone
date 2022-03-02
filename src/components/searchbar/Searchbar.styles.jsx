import styled from 'styled-components'

import { Search } from '@mui/icons-material';
import CustomButton from '../custom-button/CustomButton';

export const SearchBarContainer = styled.form``;

export const SearchBarInputFields = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #dfe1e5;
    border-radius: 24px;
    width: 582px;
    height: 44px;
    padding: 0 10px;

    input{
        flex: 1;
        border: none;
        outline: none;
        padding: 0 10px;
    }

    &:hover{
        -webkit-box-shadow: 0px 0px 13px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 13px -2px rgba(0,0,0,0.5);
    }
`;

export const SearchBarButtons = styled.div`
    display: flex;
    justify-content: center;
`;

export const SearchIconContainer = styled(Search)`
    max-width: 20px;
    max-height: 20px;
`;


export const HiddenButton = styled(CustomButton)`
    display: none !important;
`;