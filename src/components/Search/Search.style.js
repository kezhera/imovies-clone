import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const HeaderSearch = styled.div`
    width: 48%;
    height: 38px;
    form{
        width: 100%;
        height: 100%;
    }
    `
export const HeaderSearchInput = styled.input`
    padding-left: 10px;
    width: 100%;
    height: 100%;
    background: #3c3c3c;
    border: 0;
    color: #bbb;
    border: 2px solid #404040;
    &::placeholder{
        color: #bbb;
    }
`
export const HeaderSearchBtn = styled.button`
    display: none;
`

export const SeachWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
    width: 100%;
    background: #101010;
    min-height: 100%;
    z-index: 992;
    &.visible{
        display: block;
    }
`

export const SeachWrapper__header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 40px;
    .frame{
        margin-left: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: 1s;
        &:hover svg{
            transform: rotate( 540deg )
        }
    }
`
export const SeachWrapper__input = styled.input`
    width: 100%;
    padding-left: 10px;
    outline: none;
    background: transparent;
    height: 30px;
    border: none;
    border-bottom: 1px solid #333;
    box-shadow: none;
    border-radius: 0;
    flex: 1;
`
export const SeachWrapper__close = styled(SVG)`
    object-fit: contain;
    transition: 1s;
    path{
        fill: #fff;
    }
`

export const searchList = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const searchList__item = styled.div`
    width: 100%;
`;