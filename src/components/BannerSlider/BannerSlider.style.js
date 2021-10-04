import styled from "styled-components";

export const BannerWrapper = styled.section`
    height: 430px;
    position: relative;
    .slick-dots{
        max-width: 1400px;
        margin: auto;
        right: 0px;
        left: 0px;
        height: 0px;
        text-align: right;
        bottom: 70px;
    }
    .slick-dots li{
        background: hsla(0,0%,100%,.6);
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transition: 0.2s;
        margin: 0px 8.5px;
    }
    .slick-dots li button:before {
        display: none;
    }
    .slick-dots li:hover{
        background: #fff;
    }
    .slick-dots li.slick-active{
        background: #fff;
    }
`

export const BannerItem = styled.div`
    background-image: ${props => props.backgroundImg};
    width: 100%;
    height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 50px;
`
export const BannerContent = styled.div`
    width: 100%;
    max-width: 1400px;
`
export const BannerTitle = styled.h2``

export const BannerIMDB = styled.div`
    display: flex;
    align-items: center;
    img{
        width: 30px;
        object-fit: contain;
    }
    span { 
        color: #fff;
        font-weight: 700;
        margin-left: 5px;
    }
`;