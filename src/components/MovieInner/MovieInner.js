import React , {useEffect , useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import axios from '../../axios';
import { Movie__content, Movie__wrapper, Player , Movie__img, Movie__title, Movie__list, Movie__item , Movie__desc  } from './MovieInner.style'

const MovieInner = () => {
    const { id } = useParams()
    const API_KEY = "e257783847f90d42ac91605ac9cef817";
    const [movie, setMovie] = useState({})

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
            setMovie(requests.data)
            return requests;
        }
        fetchData();
    } , [] );

    console.log(movie)
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US --> movie search by movie-id
    return (
        <Movie__wrapper>
            <Container>
                <Row>
                    <Player></Player>
                    <Movie__content>
                        <Row>
                            <Col lg={3}>
                                <Movie__img 
                                    src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                />
                            </Col>
                            <Col lg={9}>
                                <Movie__title>{movie?.title}</Movie__title>
                                <Movie__desc>{movie?.overview}</Movie__desc>
                                <Movie__list>
                                    <Movie__item>
                                        <span>Release date:</span>
                                        <span>{movie?.release_date}</span>
                                    </Movie__item>
                                    <Movie__item>
                                        <span>original language:</span>
                                        <span>{movie?.original_language}</span>
                                    </Movie__item>
                                    <Movie__item>
                                        <span>Genres:</span>
                                        {
                                            movie?.genres?.map( (genre) => <span>{genre.name}   </span> )
                                        }
                                        
                                    </Movie__item>
                                    <Movie__item>
                                        <span>IMDB:</span>
                                        <span>{movie?.vote_average}</span>
                                    </Movie__item>
                                </Movie__list>
                            </Col>
                        </Row>
                    </Movie__content>
                </Row>
            </Container>
        </Movie__wrapper>
    )
}

export default MovieInner
