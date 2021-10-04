import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Movie__content, Movie__wrapper, Player , Movie__img, Movie__title, Movie__list, Movie__item , Movie__desc  } from './MovieInner.style'

const MovieInner = ({movie}) => {

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US --> movie search by movie-id
    console.log(movie)
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
                                        <span>Genre:</span>
                                        <span>{movie?.genre_ids}</span>
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
