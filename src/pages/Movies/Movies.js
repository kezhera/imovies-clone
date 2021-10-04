import React from 'react'
import Header from '../../components/Header'
import MovieSection from '../../components/MovieSection/MovieSection';
import request from '../../request';
const Movies = () => {
    return (
        <>
            <Header />
            <MovieSection movieType={request?.fetchUpcoming} numberMovies={20} blockTitle="Movies" showMore />
        </>
    )
}

export default Movies
