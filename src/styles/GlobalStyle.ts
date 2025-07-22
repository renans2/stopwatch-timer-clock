import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        /* transition: all 150ms; */
    }

    body {
        background-color: ${({ theme }) => theme.colors.appBg};
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        padding: 20px;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
