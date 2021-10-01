import React,{useState , useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GreenBtn, MovieSection__Wrapper } from './MovieSection.style'
import axios from '../../axios';
import MovieItem from '../MovieItem/MovieItem';
import BlockTitle from '../BlockTitle';
const MovieSection = ({movieType , numberMovies}) => {

    const [movies, setMovies] = useState([])
    const [numMovies, setNumMovies] = useState(numberMovies)

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(movieType);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );

    
    return (
        <MovieSection__Wrapper>
            <Container>
                <Row>
                    <Col lg={12}>
                        <BlockTitle blockTitle="Popular Films"/>
                    </Col>
                    {
                        movies.slice( 0 , numMovies).map( (movie) =>
                            <Col lg={3}>
                                <MovieItem movie={movie} />
                            </Col>
                        )
                    }
                    {
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
