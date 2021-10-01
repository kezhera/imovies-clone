import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;
`

export const DropdownHead = styled.div`
    img{
        width: 25px;
        height: 25px;
        border-radius: 100%;
    }
`

export const DropdownContent = styled.div`
    position: absolute;
    transform: translateY(100%);
    top : 0px;
    display: none;
`

export const DropdownList = styled.ul``
export const DropdownItem = styled.li``