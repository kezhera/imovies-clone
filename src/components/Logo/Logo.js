import React from 'react'
import { Link } from 'react-router-dom'
import { LogoImg } from './Logo.style'

const Logo = () => {
    return (
        <Link to="/" style={{height: "19px"}}>
            <LogoImg 
                src={'./img/logo.svg'}
            />
        </Link>
    )
}

export default Logo
