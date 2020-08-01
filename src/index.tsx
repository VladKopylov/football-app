import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </>,
  document.querySelector('#root'),
);
