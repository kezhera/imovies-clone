import React from 'react'
import request from '../../request';
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import MovieSection from "../../components/MovieSection/MovieSection";
const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Soon Add" slideNum={4} />
            <MovieList movieType={request?.fetchRomanceMovies} blockTitle="Romance Movies" bgImage={'./img/cola-banner.png'} slideNum={3} large pl370 dark/>
            <MovieList movieType={request?.fetchDocumentaries} blockTitle="Documentaries Movies" slideNum={4}/>
            <MovieList movieType={request?.fetchHorrorMovies} blockTitle="New Episodes" bgImage={'./img/demonslayer.webp'} slideNum={3} large pl370 whiteTxt/>
            <MovieSection movieType={request?.fetchPopular} numberMovies={12} blockTitle="Popular Films"/>
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Horror Movies" bgImage={'./img/banner2.svg'} slideNum={4} large/>
            <MovieList movieType={request?.fetchComedyMovies} blockTitle="Comedy Movies" slideNum={4}/>
        </>
    )
}

export default Home
