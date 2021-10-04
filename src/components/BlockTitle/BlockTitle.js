import React from 'react'
import { BlockTitle__main, BlockTitle__Wrapper, SeeAll } from './BlockTitle.style'

const BlockTitle = ({blockTitle , slideNum , dark}) => {
    return (
        <div className={` ${Number(slideNum) == 3 ? 'w-75' : 'w-100'} d-flex justify-content-between align-items-center`}>
            <BlockTitle__Wrapper className={` ${ dark && "text-dark" }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon--block-header" width="25" height="25" fill="none"><path fill="#009C7C" fillRule="evenodd" d="M25 12.5a12.5 12.5 0 1 1-25 0 12.5 12.5 0 0 1 25 0zM17.1 19l-4.6-2.7L7.9 19 9 13.8 5 10.3l5.4-.4L12.5 5l2.1 4.9 5.4.4-4 3.5L17 19z" clipRule="evenodd"></path></svg>
                <div className="d-flex align-items-center">
                    <BlockTitle__main>{blockTitle}
                        <span>/</span>
                    </BlockTitle__main>
                    <SeeAll to="/movies">All</SeeAll>
                </div>
            </BlockTitle__Wrapper>
        </div>
    )
}

export default BlockTitle
