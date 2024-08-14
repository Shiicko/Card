import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue
  }
`;
