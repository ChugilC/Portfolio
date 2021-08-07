import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #343a40;
        font-family: 'Open Sans', sans-serif;
    }
    h2 {
        color: #ffffffda;
    }
    p {
        color: #ffffffda;
    }
`;

export default GlobalStyle;
