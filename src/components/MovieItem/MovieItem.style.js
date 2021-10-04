import styled from "styled-components";

export const MovieList__Item = styled.div`
    margin-bottom: 10px;
    padding: 0px 7.5px;
    cursor: pointer;
    &:hover .overlay{
        background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover h2{
        color: #00755d !important;
    }
    &.dark-text&:hover h2{
        color: #00755d !important;
    }
    &:hover footer{
        background-color: #323232;
    }
    &.dark-text h2{
        color: #000 !important;
    }
`

export const MovieList__top = styled.header`
    position: relative;
    .overlay{
        position: absolute;
        z-index: 9;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        transition: 0.2s;
    }
    a{
        width: 100%;
        height: 100%;
        display: block;
        z-index: 1;
    }
    img{
        width: 100%;
        height: 170px;
        object-fit: cover;
    }
`

export const MovieList__bottom = styled.footer`
    padding-left: 10px;
    margin-top: -5px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const MovieList__title = styled.h2`
    font-size: 17px;
    color: #e2e2e2;
    margin-top: 5px;
    transition: 0.2s;
    display: flex;
`

export const MovieList__sub = styled.h3`
    font-size: 14px;
    color: #777;
`