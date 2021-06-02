import React from 'react'
import "./Footer.css"
import logo from '../../img/logo.svg'
import img from '../../img/18.png'
import img2 from '../../img/top.png'
import myVideo from '../../img/myvideo.png'
import ad from '../../img/digitalad.png'
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-top d-none w-100">
                        <div className="col-lg-4">
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-lg-4">
                            <ul>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                        <ul>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                        <ul>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                                <li><a href="">მთავარი</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-middle w-100">
                        <div className="digitalad d-flex align-items-center justify-content-center">
                            <span></span>
                            <img src={ad} alt="" />
                            <span></span>
                        </div>
                        <ul className="d-flex justify-content-around w-100">
                            <li>
                                <a href="https://www.myvideo.ge/">
                                    <img src={myVideo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.myvideo.ge/">
                                    <img src={myVideo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.myvideo.ge/">
                                    <img src={myVideo} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.myvideo.ge/">
                                    <img src={myVideo} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-bottom w-100">
                        <div className="d-flex justify-content-between align-items-center w-100">
                            <img src={img} alt=""/>
                            <div class="copyright"><p>© iMOVIES 2021</p></div>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
