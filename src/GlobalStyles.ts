import { createGlobalStyle } from 'styled-components';

import NunitoBlack from './assets/fonts/Nunito/Nunito-Black.ttf';
import NunitoRegular from './assets/fonts/Nunito/Nunito-Regular.ttf';
import NunitoLight from './assets/fonts/Nunito/Nunito-Light.ttf';
import NunitoItalic from './assets/fonts/Nunito/Nunito-Italic.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Nunito-Regular';
        font-style: normal;
        src: url(${NunitoRegular});
    }
    
    @font-face {
        font-family: 'Nunito-Light';
        font-style: normal;
        src: url(${NunitoLight});
    }
    
    @font-face {
        font-family: "Nunito-Italic";
        font-style: normal;
        src: url(${NunitoItalic});
    }
    
    @font-face {
        font-family: "Nunito-Black";
        font-style: normal;
        src: url(${NunitoBlack});
    }
  
  body {
    margin: 0;
    font-family: "Nunito-Regular", sans-serif;
  }
`;
