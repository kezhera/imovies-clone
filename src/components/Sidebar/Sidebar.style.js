import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
    background: #242424;
    position: fixed;
    height: calc(100vh - 54px);
    list-style: 0px;
    width: 340px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    z-index: 99;
    top: 54px;
    left: ${ props => props.active ? '0px' : '-340px'};
    overflow-y: auto;
    transition: 0.3s;
`
export const SidebarOpacity = styled.div`
    display:  ${ props => props.active ? 'block' : 'none'};;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.75);
    z-index: 9;
` 

export const SidebarSection = styled.div`
    border-bottom: 1px solid hsla(0,0%,100%,.1);
    padding: 20px 30px;
`

export const SidebarSection__title = styled.h2`
    font-size: 18px;
    margin-bottom: 20px;
    color: #bbb;
    text-transform: uppercase;
`

export const SidebarSection__list = styled.nav`
    display: flex;
    flex-direction: column;
`

export const SidebarSection__item = styled(Link)`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    img , svg{
        width: 27px;
        height: 27px;
        object-fit: cover;
        padding: 5px;
        margin-right: 10px;
        border-radius: 100%;
        background-color: hsla(0,0%,64.3%,.2);
        transition: 0.2s;
        path{
            fill: hsla(0,0%,64.3%,.8);
            transition: 0.2s;
        }
    }
    span{
        font-size: 18px;
        color: #bbb;
        text-transform: capitalize;
        font-weight: 500;
        transition: 0.2s;
    }
    &:hover , &.active{
        svg{
            background-color: #00755d;
            path{
                fill: #fff;
            }
        }
        span{
            color: #00755d;
        }
    }
`