import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import DropdownComp from '../DropdownComp'
import Logo from '../Logo'
import { GreenBtn } from '../MovieSection/MovieSection.style'
import { HeaderWrapper , HeaderLeft, HeaderMenu,  HeaderRight } from './Header.style'
import Search from '../Search'
import Sidebar from '../Sidebar'

const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    return (
        <>
            <HeaderWrapper>
                <Container>
                    <Row>
                        <HeaderLeft>
                            <HeaderMenu onClick={ () => setSidebar(!sidebar) } className={ sidebar && 'active'}>
                                <span className="line"></span>    
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
            <Sidebar active={sidebar} />
        </>
    )
}

export default Header

