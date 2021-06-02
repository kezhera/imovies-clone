import React , { useState , useEffect } from 'react';
import axios from './axios';

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row( { } ) {
    const [movies, setMovies] = useState([])
    useEffect( () => {
        async function fetchData() {
            const request = await axios.get('/trending/all/week?api_key=e257783847f90d42ac91605ac9cef817&language=en-US');
            setMovies(request.data.results)
            console.log(request)
            return request;
        }
        fetchData();
    } , ['/trending/all/week?api_key=e257783847f90d42ac91605ac9cef817&language=en-US'] ); 

    return (
        <div>
            
        </div>
    )
}

export default Row
