import React,{useEffect , useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import { HeaderSearch, HeaderSearchBtn, HeaderSearchInput , SeachWrapper ,SeachWrapper__header , SeachWrapper__input , SeachWrapper__close } from './Search.style'
import axios from '../../../axios';
import BlockTitle from '../../BlockTitle';
import MovieSection from '../../MovieSection/MovieSection';

const Search = () => {
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const API_KEY = "e257783847f90d42ac91605ac9cef817";

    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);

    // useEffect( () => {
    //     async function fetchData() {
    //         const requests = await axios.get(`/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${value}`);
    //         console.log(requests);
    //     }
    //     fetchData();
    // } , [value] );

    const inputChange = (e) => {
        setValue(e.target.value);
        value.length > 0 ? setVisible(true) : setVisible(false)
    }

    const closeSearch = () => {
        setVisible(false)
        setValue('')
    }

    visible ? document.getElementsByTagName('body')[0].classList.add('no-scroll') : document.getElementsByTagName('body')[0].classList.remove('no-scroll')
    
    return (
        <React.Fragment>
            <HeaderSearch>
                <HeaderSearchInput placeholder="Search" value={value} onChange={inputChange} />
                <HeaderSearchBtn type="submit"/>
            </HeaderSearch>
            { visible && <SeachWrapper className={`${visible && 'visible' }`}>
                <Container>
                    <Row>
                        <SeachWrapper__header>
                            <SeachWrapper__input type="text" placeholder="search movie" value={value} onChange={inputChange} />
                            <div className="frame">
                                <SeachWrapper__close 
                                    src="./img/close.svg"
                                    onClick={closeSearch}
                                />
                            </div>
                        </SeachWrapper__header>
                        <MovieSection blockTitle="Movies" numberMovies={12} movieType={`/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${value}`}/>
                    </Row>
                </Container>
            </SeachWrapper>
            }
        </React.Fragment>
    )
}

export default Search
