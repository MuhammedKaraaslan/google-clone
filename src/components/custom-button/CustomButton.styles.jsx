import styled from 'styled-components'

export const CustomButtonContainer = styled.div`
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F8F9FA;
    padding: 0px 16px;
    margin: 11px 4px;
    cursor: pointer;
    font-size: 14px;

    &:hover{
        -webkit-box-shadow: 0px 0px 13px -2px rgba(0,0,0,0.5); 
        box-shadow: 0px 0px 13px -2px rgba(0,0,0,0.5);
    }
`;
