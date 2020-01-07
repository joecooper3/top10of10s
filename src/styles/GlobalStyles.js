import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Thein';
    src: url("../assets/fonts/Theinhardt-Regular.otf");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Thein';
    src: url("../assets/fonts/Theinhardt-Bold.otf");
    font-weight: 700;
    font-style: normal;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700');
`;
