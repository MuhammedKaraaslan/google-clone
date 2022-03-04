import styled from 'styled-components'

import { Apps } from '@mui/icons-material'
import { Avatar } from '@mui/material'


export const HomeHeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    padding: 6px 15px;
    color: #70757a;

    a {
        color: #70757a;
    }
`;

export const HeaderRight = styled.div`
    width: 250px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    padding: 0px 4px 0px 32px;
`;

export const AppsContainer = styled(Apps)`
    &:hover{
        cursor:pointer;
    }
`;
export const AvatarContainer = styled(Avatar)`
    transform: scale(0.8);

    &:hover{
        cursor:pointer;
    }
`;