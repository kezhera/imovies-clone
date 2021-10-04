import { Link } from "react-router-dom";
import styled from "styled-components";

export const BlockTitle__Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding-left: 7.5px;
    margin: 15px 0px;
    &.text-dark *{
        color: #000 !important;
    }
`;

export const SeeAll = styled(Link)`
    font-size: 14px;
    color: #fff;
    transition: 0.2s;
    margin-top: 2px;
`

export const BlockTitle__main = styled.h2`
    margin-left: 20px;
    font-size: 24px;
    color: #fff;
    margin-right: 10px;
    font-family: main;
    display: flex;
    align-items: center;
    &:hover{
        color: #fff;
    }
    span{
        font-size: 14px;
        color: #fff;
        margin-left: 10px;
    }
`