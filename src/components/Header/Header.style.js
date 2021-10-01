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
    .line {
        background-color: #999;
        height: 2px;
        width: 16px;
        position: absolute;
        left: 0px;
    }
    .line:nth-child(2) {
        top: 0%;
    }
    .line:nth-child(2) {
        top: 50%;
    }
    .line:nth-child(3) {
        top: 100%;
    }
` 
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