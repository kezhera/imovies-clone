import React from 'react'
import { WatchBtnWrapper, WatchBtn__Img } from './Watch.style'

const Watch = () => {
    return (
        <WatchBtnWrapper href="#">
            <WatchBtn__Img 
                src={'./img/triangle.svg'}
            />
            <span>Watch</span>
        </WatchBtnWrapper>
    )
}

export default Watch
