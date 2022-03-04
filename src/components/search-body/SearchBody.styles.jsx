import styled from "styled-components";

export const Results = styled.div`
    max-width: 650px;
    margin-top: 10px;
    margin-left: 190px;
    margin-bottom: 100px;

    img{
        object-fit: contain;
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }
    a{
        color: #1a0dab;
    }
`;

export const ResultsCount = styled.p`
    color: #70757a;
    font-size: 14px;
`;
export const Result = styled.div`
    margin: 20px 0;
`;
export const ResultTitle = styled.a`
    h2 {
        font-weight: 400;
        font: 20px;
    }
`;
export const ResultSnippet = styled.p`
    margin-top: 10px;
`;