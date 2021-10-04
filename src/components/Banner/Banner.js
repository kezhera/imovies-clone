import React from 'react'
import { BannerWrapper, BannerWrapper__img } from './Banner.style'

const Banner = ({src , background}) => {
    return (
        <BannerWrapper background={background}>
            <BannerWrapper__img 
                src={src}
            />
        </BannerWrapper>
    )
}

export default Banner
