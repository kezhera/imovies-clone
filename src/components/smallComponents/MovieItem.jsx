import React from 'react'
import './Popular.css'

function MovieItem(props) {
    return (
      <div className="movie">
        <div className="movie-top">
            <div className="overlay"></div>
            <a href="#">
              <img src={`https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}`} alt={props.movie?.title} />
            </a>
        </div>
        <div className="movie-bottom">
            <a href="#" className="movie-bottom__title">{props.movie?.title}</a >
            <a href="#" className="movie-bottom__secondary">{props.movie?.original_title}</a>
        </div>
      </div>
    )
}

export default MovieItem
