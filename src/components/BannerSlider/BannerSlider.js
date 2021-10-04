import React,{ useEffect , useState } from 'react'
import Slider from 'react-slick';
import { BannerContent, BannerItem, BannerTitle, BannerWrapper , BannerIMDB } from './BannerSlider.style'
import axios from '../../axios';
import request from '../../request';
import Watch from '../Watch';
const BannerSlider = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    };

    const [movies, setMovies] = useState([])

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request?.fetchTrending);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );
    
    const slideNumber = 7;
    let randNumber = Math.floor(Math.random()*movies.length-slideNumber)
    randNumber < 0 ? randNumber = 0 : randNumber = randNumber;

    const bannerMovies = [];
    for(let i = 0 ; i < slideNumber; i++){
        bannerMovies.push( movies[randNumber + i] )
    }

    return (
        <BannerWrapper>
            <Slider {...settings}>
                {
                    bannerMovies.map( (movie) =>
                            <div>
                                <BannerItem backgroundImg={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`} >
                                    <BannerContent>
                                        <BannerTitle>{movie?.title || movie?.name || movie?.original_title}</BannerTitle>
                                        <BannerIMDB>
                                            <img src={'./img/imdb.svg'} />
                                            <span>{movie?.vote_average}</span>
                                        </BannerIMDB>
                                        <Watch />
                                    </BannerContent>
                                </BannerItem>
                            </div>
                        )
                }
            </Slider>
        </BannerWrapper>
    )
}

export default BannerSlider
