import React from 'react'
import request from '../../request';
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import MovieSection from '../../components/MovieSection/MovieSection'
import { useLocation , useParams} from 'react-router';
import MovieInner from '../../components/MovieInner/MovieInner';

const Movie = () => {
    const location = useLocation()
    const movie = location.state.movie 

    return (
        <React.Fragment>
            <Header />
            <Banner src={'./img/SWEET-TOOTH.png'} background="#181a0d" />
            <MovieInner movie={movie}/>
            <MovieSection movieType={request?.fetchPopular} numberMovies={12} blockTitle="Similar Movies" showMore={false}/> 
        </React.Fragment>
    )
}

export default Movie
