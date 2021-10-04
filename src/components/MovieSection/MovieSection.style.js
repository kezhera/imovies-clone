import styled from "styled-components";

export const MovieSection__Wrapper = styled.section`
    padding-bottom: 15px;
`;

export const GreenBtn = styled.button`
    color: #fff;
    background-color: #009c7c;
    transition: 0.2s;
    text-transform: capitalize;
    cursor: pointer;
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    &:hover{
        background-color: #00755d;
    }
`