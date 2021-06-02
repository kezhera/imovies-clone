import React , { useState , useEffect } from 'react';
import Slider from "react-slick";
import './Banner.css'
import axios from '../../axios';
import BannerItem from './BannerItem';
import request from '../../request';

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000
    };

    const [movies, setMovies] = useState([])
   
    const slideNumber = 7;
    let randNumber = Math.floor(Math.random()*movies.length-slideNumber)
    randNumber < 0 ? randNumber = 0 : randNumber = randNumber;
    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request?.fetchTrending);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );
   
    const sliderItem = [];
    for(let i = 0 ; i < slideNumber; i++){
        sliderItem.push(<BannerItem movie={movies[randNumber + i]} key={i}  />)
    }
    
    return (
    <div className="banner">
        <Slider {...settings}>
            {sliderItem}
        </Slider>
      </div>
    )
}

export default Banner
