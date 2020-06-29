import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';

import { App } from './App';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.querySelector('#root'),
);
