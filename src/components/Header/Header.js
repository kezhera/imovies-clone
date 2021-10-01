import React from 'react'
import { Container, Row } from 'react-bootstrap'
import DropdownComp from '../DropdownComp'
import Logo from '../Logo'
import { HeaderWrapper , HeaderLeft, HeaderMenu, HeaderSearch, HeaderSearchInput, HeaderSearchBtn , HeaderRight } from './Header.style'

const Header = () => {

    // const [movies, setMovies] = useState([])

    // useEffect( () => {
    //     async function fetchData() {
    //         const requests = await axios.get(request?.searchMovies);
    //         setMovies(requests.data.results)
    //         return requests;
    //         console.log(requests)
    //     }
    //     fetchData();
    // } , [] );
    
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

