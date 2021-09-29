import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }

  body{
    min-height:100vh;
    padding: 0;
    margin: 0;
    font-family: Sans-serif;
  }
`;
export default GlobalStyle;
