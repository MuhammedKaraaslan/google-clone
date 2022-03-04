import styled from "styled-components";

export const SearchHeaderContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 2;
    align-items: flex-start;
    padding: 30px 30px 15px 30px;
    border-bottom: 1px solid lightgray;
    color: #70757a;
    
    a {
        color: #70757a;
    }
`;

export const SearchHeaderLeft = styled.div``;
export const SearchHeaderLeftTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        object-fit: contain;
        width: 92px;
        height: 33px;
        margin-right: 50px;
    }
`;

export const SearchHeaderLeftBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 660px;
    padding-left: 160px;
    padding-top 28px;
    font-size: 14px;
`;
export const HeaderOption = styled.div`
    display: flex;
    align-items: center; 
    svg{
        width: 16px;
        height: 16px;
    }

    &:last-child {
        transform: translateX(50px);
    }

    &:hover {
        cursor: pointer;
    }
`;

export const SearchHeaderRight = styled.div`
    display: flex;
    align-items: center;
    svg:not(:last-child) {
        margin-right: 30px;
    }
    div {
        width: 32px;
        height: 32px;
    }
`;
