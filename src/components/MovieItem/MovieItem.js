import React from 'react'
import { MovieList__bottom, MovieList__Item, MovieList__sub, MovieList__title, MovieList__top } from './MovieItem.style'
const MovieItem = ({movie , dark}) => {
    return (
        <MovieList__Item className={` ${dark && 'dark-text'}`}>
            <MovieList__top>
                <div className="overlay"></div>
                <a href="#">
                    <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                </a>
            </MovieList__top>
            <MovieList__bottom>
                <MovieList__title> {movie.title} </MovieList__title>
                <MovieList__sub> {movie?.original_title} </MovieList__sub>
            </MovieList__bottom>
        </MovieList__Item>
    )
}

export default MovieItem
