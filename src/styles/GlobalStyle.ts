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
        overflow-x: hidden;
    }

    button {
        cursor: pointer;

        &:not(:disabled):hover {
            opacity: 0.75;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`;

export default GlobalStyle;
