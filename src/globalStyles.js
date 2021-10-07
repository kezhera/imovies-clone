import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'main';
        font-weight: 700;
        src: url(./font/Helvetica-Bold.ttf);
    }

    @font-face {
        font-family: 'main';
        font-weight: 500;
        src: url(./font/Helvetica.ttf);
    }

    @font-face {
        font-family: 'main';
        font-weight: 400;
        src: url(./font/Helvetica-light.ttf);
    }

    *{
        margin: 0px;
        padding: 0px;
        color: #e2e2e2;
        font-family: main;
        font-weight: 400;
    }
    body{
        background-color: #1d1d1d;
        &.no-scroll{
            overflow: hidden;
        }
    }
    .container{
        max-width: 1400px;
    }

    ul , li {
        list-style-type: none;
        list-style: none;
    }

    a:hover { 
        text-decoration: none;
    }
    h1 , h2 , h3 ,h4 ,h5 ,h6 {
        margin-bottom: 0;
    }
    button , button:focus , button:hover{
        outline: none;
        border: none;
    }
`