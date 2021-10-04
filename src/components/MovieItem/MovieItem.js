import React from 'react'
import { Link } from 'react-router-dom'
import { MovieList__bottom, MovieList__Item, MovieList__sub, MovieList__title, MovieList__top } from './MovieItem.style'
const MovieItem = ({movie , dark}) => {

    return (
        <MovieList__Item className={` ${dark && 'dark-text'}`}>
            <MovieList__top>
                <Link to={{
                        pathname: `/${movie?.id}`,
                        state: {
                            movie: movie
                        }
                        }} >
                    <div className="overlay"></div>
                    <img src={ movie?.backdrop_path &&  movie?.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path }` : './img/notfounded.webp' } alt={movie?.title} />
                </Link>
            </MovieList__top>
            <MovieList__bottom>
                <MovieList__title> {movie?.title || movie?.name || movie?.original_title} </MovieList__title>
                <MovieList__sub> {movie?.original_title} </MovieList__sub>
            </MovieList__bottom>
        </MovieList__Item>
    )
}

export default MovieItem
