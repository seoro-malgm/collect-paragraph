import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #333399;

    --white: #fff;
    --gray-10: #ededed;
    --gray-100: #121212;
    --black: #000;
  }


  @font-face {
    font-family: 'Noto Sans KR';
    src: url("./fonts/NotoSansKR-Regular.otf");
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
  }

  ul, ol, dl {
    margin: 0;
    list-style: none; 
    list-style-type: none; 
  }

  a {
    text-decoration: none;  
    color: inherit;
    &:hover {
      color: inherit;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    color: inherit;
    font-weight: 700;
  }

  p {
    margin: 0;
  }


  .App {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

`;

export default GlobalStyle;
