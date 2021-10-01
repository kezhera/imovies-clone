import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const WatchBtnWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #009c7c;
    width: 150px;
    height: 40px;
    &::hover {
        background-color: #00755d;
    }
    span{
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 2px;
    }
`
export const WatchBtn__Img = styled(SVG)`
    width: 12px;
    fill: #fff;
    margin-right: 10px;
`