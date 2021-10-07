import styled from "styled-components";

export const HeaderWrapper = styled.header`
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #282828;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    .row{
        justify-content: space-between;
    }
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderMenu = styled.div`
    position: relative;
    height: 14px;
    width: 32px;
    margin-right: 15px;
    cursor: pointer;
    .line {
        background-color: #999;
        height: 2px;
        width: 16px;
        position: absolute;
        left: 0px;
        transition: 0.2s;
    }
    .line:nth-child(1) {
        top: 0%;
        transform: rotate(180deg)
    }
    .line:nth-child(2) {
        top: 50%;
    }
    .line:nth-child(3) {
        top: 100%;
    }
    .line:nth-child(4) {
        display: none;
        width: 0px;
        top: 100%;
    }
    &.active{
        .line:nth-child(1) {
            width: 0px;
            position: relative;
            &::after{
                content: "";
                display: block;
                width: 100%;
            }
        }
        .line:nth-child(2) {
            top: 50%;
            transform: rotate(45deg)
        }
        .line:nth-child(3) {
            width: 0px;
        }
        .line:nth-child(4) {
            display: block;
            top: 50%;
            width: 16px;
            transform: rotate(-45deg)
        }   
    }
`