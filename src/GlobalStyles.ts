import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --yellow: #FFBC54;
  --bright-yellow: #FDFE01;
  --dark: #2b2e34;
  --dark-grey: #DFDFDF;
  --light-grey: #F5F5F7;
  --orange: #fc591f;
  --green: rgb(53, 200, 92);
  --black: #000;
  --background: #F2ECFC;
}

  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2b2e34;
    background-color: #E6E5EA;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 700;
  }
`;

export default GlobalStyle;