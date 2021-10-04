import styled from "styled-components";
import SVG from 'react-inlinesvg';

export const BannerWrapper = styled.section`
    width: 100%;
    height: 160px;
    background-color: ${props => props.background}
`;

export const BannerWrapper__img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;