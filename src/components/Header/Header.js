import React from 'react'
import { Container, Row } from 'react-bootstrap'
import DropdownComp from '../DropdownComp'
import Logo from '../Logo'
import { GreenBtn } from '../MovieSection/MovieSection.style'
import { HeaderWrapper , HeaderLeft, HeaderMenu,  HeaderRight } from './Header.style'
import Search from '../Search'

const Header = () => {

    return (
        <HeaderWrapper>
            <Container>
                <Row>
                    <HeaderLeft>
                        <HeaderMenu>
                            <span className="line"></span>    
                            <span className="line"></span>    
                            <span className="line"></span>    
                        </HeaderMenu>
                        <Logo />
                    </HeaderLeft>

                    <Search />
                    
                    <HeaderRight>
                        <GreenBtn>Login</GreenBtn>
                        <DropdownComp />
                    </HeaderRight>
                </Row>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

