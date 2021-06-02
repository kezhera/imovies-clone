import React , { useState , useEffect } from 'react';
import Slider from "react-slick";
import axios from '../../axios';
import request from '../../request';
import MovieItem from '../smallComponents/MovieItem';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
}  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
    />
    );
}

function MovieList(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: props?.slideNum,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    // კლას კომპონენტია საჭირო
    const [movies, setMovies] = useState([])

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(props?.movieType);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );

    const ListMovies = movies.map((item , i) => 
        <div className="item">
            <MovieItem movie={item} key={i} />
        </div>
    );

    return (
    <div className={`movie-list ${props?.large && "movie-list__large"} ${props?.dark && "dark"}`} style={{backgroundImage : `url(${props?.bgImage})`}}>
        <div className="container">
            <div className={`row ${props?.pl370 && "pl-370"}`}>
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="block-title d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon--block-header" width="25" height="25" fill="none"><path fill="#009C7C" fill-rule="evenodd" d="M25 12.5a12.5 12.5 0 1 1-25 0 12.5 12.5 0 0 1 25 0zM17.1 19l-4.6-2.7L7.9 19 9 13.8 5 10.3l5.4-.4L12.5 5l2.1 4.9 5.4.4-4 3.5L17 19z" clip-rule="evenodd"></path></svg>
                        <div className="d-flex align-items-center">
                            <a href="" className="block-title__main">{props?.blockTitle}<span>/</span></a>
                            <a href="" className="see-all">all</a>
                        </div>
                    </div>
                </div>
                <Slider {...settings}  className="w-100">
                    {ListMovies}
                </Slider>
            </div>
        </div>
      </div>
    )
}

export default MovieList
