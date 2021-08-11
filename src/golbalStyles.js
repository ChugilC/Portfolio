import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1B1B1B;
        font-family: 'Open Sans', sans-serif;
    }
    h1 {
        color: #ffffffda;
    }
    h2 {
        color: #ffffffda;
    }
    p {
        color: #ffffffda;
    }
    span {
        color: #1abc9c;
    }
`;

export default GlobalStyle;
