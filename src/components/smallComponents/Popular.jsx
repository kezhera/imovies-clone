import React , { useState , useEffect } from 'react';
import './Popular.css'
import axios from '../../axios';
import MovieItem from './MovieItem';
import request from '../../request';

function Popular() {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request?.fetchPopular);
            setMovies(requests.data.results)
            return requests;
        }
        fetchData();
    } , [] );
    
    const moviesItem = [];
    for(let i = 0 ; i < 16; i++){
      moviesItem.push(<MovieItem movie={movies[i]} key={i}  />)
    }
    
    return (
      <div className="popular">
        <div className="container">
          <div className="row">
              <div className="w-100 d-flex">
                <div className="block-title d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon svg-icon--block-header" width="25" height="25" fill="none"><path fill="#009C7C" fill-rule="evenodd" d="M25 12.5a12.5 12.5 0 1 1-25 0 12.5 12.5 0 0 1 25 0zM17.1 19l-4.6-2.7L7.9 19 9 13.8 5 10.3l5.4-.4L12.5 5l2.1 4.9 5.4.4-4 3.5L17 19z" clip-rule="evenodd"></path></svg>
                  <div className="d-flex align-items-center">
                    <a href="" className="block-title__main">Popular Films<span>/</span></a>
                    <a href="" className="see-all">all</a>
                  </div>
                </div>
              </div>
              { moviesItem }
              <div className="w-100 d-flex justify-content-center">
                <button className="popular-more green-btn">
                  show more
                </button>
              </div>
          </div>
        </div>
      </div>
    )
}

export default Popular
