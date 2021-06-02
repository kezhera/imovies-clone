import React from 'react'

function BannerItem(props) {
    return (
        <div>
            <div className="item" style={{backgroundImage : `url("https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}")`}}>
                <div className="container h-100">
                    <div className="row align-items-end h-100">
                        <div className="banner-bottom d-flex flex-column">
                            <h3 className="banner-title">{ props.movie?.title || props.movie?.name }</h3>
                            <h3 className="original-title">{ props.movie?.original_title}</h3>
                            <div className="imdb d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" className="svg-icon svg-icon--imdb-original" fill="none">
                                    <path fill="#EEC924" d="M0 2C0 .9.91 0 2.03 0h22.94C26.09 0 27 .9 27 2v12c0 1.1-.91 2-2.03 2H2.03C.91 16 0 15.1 0 14V2z"></path><path fill="#231F1E" d="M4.76 12.28H2.6V3.7h2.15v8.57zm7.94 0h-1.82V7.47l-.89 4.8H8.67l-.91-4.8v4.8H5.83V3.72H8.6l.72 4.05.5-4.05h2.9v8.57zm1.14 0V3.7h2.4c1.43 0 1.77.14 2.18.42.4.28.6.7.6 1.27v5.18c0 .53-.18.95-.56 1.25-.39.3-.85.44-2.21.44h-2.41zm2.89-1.8V5.46c0-.42-.47-.38-.83-.38v5.76c.37 0 .83.05.83-.36zm5.04 1.36c-.15-.07-.28.45-.28.45h-1.77V3.7h2.2v1.96a2.1 2.1 0 0 1 1.43-.6c.6.04 1.38.46 1.33 1.18v4.99c0 .35-.16.63-.48.83a2.2 2.2 0 0 1-1 .14c-.52 0-1.28-.31-1.43-.37zm.74-1.04V6.48c0-.21-.1-.31-.3-.31-.2 0-.3.1-.3.3v4.33c0 .21.1.36.3.36.2 0 .3-.15.3-.36z"></path>
                                </svg>
                                <span>{props.movie?.vote_average}</span>
                            </div>
                            <a href="#" className="watch-movie btn green d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--play-rounded" viewBox="0 0 8 11" fill="none"><path fill="#fff" d="M7.5 5.77L.76 10.22a.47.47 0 0 1-.27.09c-.26 0-.48-.24-.48-.54V.54C0 .24.22 0 .48 0c.1 0 .19.04.28.1L7.5 4.52c.16.15.26.37.26.62s-.1.47-.26.62z"></path></svg>
                                <span>Watch</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerItem
