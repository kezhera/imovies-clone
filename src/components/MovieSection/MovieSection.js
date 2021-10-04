import React,{useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GreenBtn, MovieSection__Wrapper } from './MovieSection.style'
import axios from '../../axios';
import MovieItem from '../MovieItem/MovieItem';
import BlockTitle from '../BlockTitle';
import request from 'request';
const MovieSection = ({movieType , numberMovies , blockTitle , showMore}) => {

    const [movies, setMovies] = useState([])
    const [numMovies, setNumMovies] = useState(numberMovies)

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(movieType);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [movieType] );
    
    return (
        <MovieSection__Wrapper>
            <Container>
                <Row className="justify-content-start">
                    <Col lg={12}>
                        <BlockTitle blockTitle={blockTitle}/>
                    </Col>
                    {
                        movies.slice( 0 , numMovies).map( (movie) =>
                            <Col lg={3} key={movie?.id}>
                                <MovieItem movie={movie} />
                            </Col>
                        )
                    }
                    {
                        showMore &&
                        numMovies < movies.length && <Col lg={12}>
                            <GreenBtn onClick={ () => setNumMovies(numMovies + 4)}>
                            Show More
                            </GreenBtn>
                        </Col> 
                    }
                    
                </Row>
            </Container>
        </MovieSection__Wrapper>
    )
}

export default MovieSection
