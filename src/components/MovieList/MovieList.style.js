import styled from "styled-components";

export const MovieList__Wrapper = styled.section`
    background-image: url('${ props => props.bgImage }');
    padding-bottom: 15px;
    .item{
        height: 210px;
    }
    .slick-prev {
        position: absolute;
        top: -30px;
        right: 36px;
        left: unset;
    }
    .slick-next {
        position: absolute;
        top: -30px;
        right: 6px;
        left: unset;
    }
    &.movie-list__large{
        padding: 20px 0px 60px;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    &.movie-list__large::before{
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(
            180.52deg
            ,#2e2e2e .09%,hsla(0,0%,100%,0) 100.25%);
        background: -moz-linear-gradient(180.52deg,#2e2e2e .09%,hsla(0,0%,100%,0) 100.25%);
        background: -o-linear-gradient(180.52deg,#2e2e2e .09%,hsla(0,0%,100%,0) 100.25%);
        background: linear-gradient(
            269.48deg
            ,#2e2e2e .09%,hsla(0,0%,100%,0) 100.25%);
        opacity: .5;
        pointer-events: none;
    }
`;