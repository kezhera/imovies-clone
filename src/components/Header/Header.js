import React from 'react'
import { Container, Row } from 'react-bootstrap'
import DropdownComp from '../DropdownComp'
import Logo from '../Logo'
import { HeaderWrapper , HeaderLeft, HeaderMenu, HeaderSearch, HeaderSearchInput, HeaderSearchBtn , HeaderRight } from './Header.style'

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
                    <HeaderSearch>
                        <form action="" method="">
                            <HeaderSearchInput placeholder="Search"/>
                            <HeaderSearchBtn type="submit"/>
                        </form>
                    </HeaderSearch>
                    <HeaderRight>
                        <DropdownComp />
                    </HeaderRight>
                </Row>
            </Container>
        </HeaderWrapper>
    )
}

export default Header

