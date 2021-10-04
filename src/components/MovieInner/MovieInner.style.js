import styled from "styled-components";

export const Movie__wrapper = styled.div``

export const Player = styled.div`
    width: 100%;
    height: 600px;
    background-color: yellow;
    margin-top: 20px;
` 

export const Movie__content = styled.div`
    width: 100%;
    margin-top: 20px;
`

export const Movie__img = styled.img`
    width: 100%;
    height: 450px;
`

export const Movie__title = styled.h2`
    font-size: 22px;
    font-weight: 600;
    color: #fff
`

export const Movie__list = styled.ul`
    display: flex;
    flex-direction: column;
`

export const Movie__item = styled.li`
    span{
        text-transform: uppercase;
        color: #828282;
    }
    span:nth-child(1){
        font-size: 16px;
        margin-right: 10px;
    }
    span:nth-child(2){
        font-size: 14px;
    }
`

export const Movie__desc = styled.p`
    color: #828282;
    max-width: 80%;
    margin: 20px 0px;

`