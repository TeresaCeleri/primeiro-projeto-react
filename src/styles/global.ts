import { createGlobalStyle } from "styled-components";

import github from "../assets/Github.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #F0F0F5 url(${github}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, imput, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 48px 20px;
  }

  button {
    cursor: pointer;
  }

`;
