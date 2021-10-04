import React from 'react'
import request from '../../request';
import BannerSlider from "../../components/BannerSlider";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import MovieSection from "../../components/MovieSection/MovieSection";
import Banner from '../../components/Banner';
const Home = () => {
    return (
        <>
            <Header />
            <BannerSlider/>
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Soon Add" slideNum={4} />
            <MovieList movieType={request?.fetchRomanceMovies} blockTitle="Romance Movies" bgImage={'./img/cola-banner.png'} slideNum={3} large pl370 dark/>
            <MovieList movieType={request?.fetchDocumentaries} blockTitle="Documentaries Movies" slideNum={4}/>
            <MovieList movieType={request?.fetchHorrorMovies} blockTitle="New Episodes" bgImage={'./img/demonslayer.webp'} slideNum={3} large pl370 whiteTxt/>
            <MovieSection movieType={request?.fetchPopular} numberMovies={12} blockTitle="Popular Films" showMore/>
            <Banner src={'./img/SWEET-TOOTH.png'} background="#181a0d"/>
            <MovieList movieType={request?.fetchUpcoming} blockTitle="Horror Movies" bgImage={'./img/banner2.svg'} slideNum={4} large/>
            <MovieList movieType={request?.fetchComedyMovies} blockTitle="Comedy Movies" slideNum={4}/>
            <Banner src={'./img/loki-banner.png'} background="#0e0101"/>
        </>
    )
}

export default Home
