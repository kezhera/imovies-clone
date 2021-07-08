import React , { useState , useEffect } from 'react';
import Logo from '../../img/logo.svg'
import loop from '../../img/loop.svg'
import georgiaIMG from '../../img/georgia.png'
import englishIMG from '../../img/english.png'
import axios from '../../axios';
import request from '../../request'
import './Header.css'
function Header() {

    const [movies, setMovies] = useState([])

    useEffect( () => {
        async function fetchData() {
            const requests = await axios.get(request?.searchMovies);
            setMovies(requests.data.results)
            return requests;
            console.log(requests)
        }
        fetchData();
    } , [] );
    
    return (
        <header className="header">
            <div className="container h-100">
                <div className="row justify-content-between align-items-center h-100">
                    <div className="d-flex align-items-center">
                        <div className="burger-button d-flex align-items-center">
                            <button className="menu-trig relative">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>        
                            </button>
                        </div>
                        <a href="/" className="logo d-flex align-items-center">
                            <img src={Logo} alt=""/>
                        </a>
                    </div>

                    <div className="header-search">
                        <form action="#" method="GET">
                            <div className="search w-100 relative">
                                <input type="text" name="" id="search-input" className="search-input w-100" placeholder="ძიება"/>
                                <button type="submit" className="submit">
                                    <img src={loop} alt=""/>
                                </button>
                            </div>
                        </form>
                    </div>
                
                    <div className="header-end d-flex">
                        <div className="dropdown language">
                            <div className="select">
                                <img src={georgiaIMG} alt="" className="round cursor-pointer"/>
                            </div>
                            <div className="option-list d-none">
                                <div className="option">
                                    <img src={englishIMG} alt="" className="round"/>
                                </div>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </header>
    )
}

export default Header
