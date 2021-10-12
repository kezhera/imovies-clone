import React , {useEffect , useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import BlockTitle from '../BlockTitle'
import { MovieList__Wrapper } from './MovieList.style'
import axios from '../../axios';
import MovieItem from '../MovieItem/MovieItem'

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

const MovieList = ({ slideNum , movieType , blockTitle , bgImage , large , dark}) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideNum,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const [movies, setMovies] = useState([])

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(movieType);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );

    return (
        <MovieList__Wrapper bgImage={bgImage} className={`${large && "movie-list__large"} ${dark && "dark"}`}>
            <Container>
                <Row className="justify-content-end">
                    <BlockTitle blockTitle={blockTitle} slideNum={slideNum} dark={ dark ? true : false }/>
                    <Slider {...settings} className={` ${slideNum === 3 ? 'w-75' : 'w-100'} `}>
                        {
                            movies.map( (movie) => 
                                <div className="item" key={movie?.id}>
                                    <MovieItem movie={movie} dark={ dark ? true : false }/>
                                </div>
                            )
                        }
                    </Slider>
                </Row>
            </Container>
        </MovieList__Wrapper>
    )
}

export default MovieList