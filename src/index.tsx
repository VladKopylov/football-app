import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { App } from './App';
import { GlobalStyles } from './GlobalStyles';
import { cache } from './cache';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
  const userToken = JSON.parse(localStorage.getItem('userToken'));

  return {
    headers: {
      ...headers,
      authorization: userToken ? `Bearer ${userToken}` : '',
    },
  };
});

const client = new ApolloClient({
  cache,
  link: authLink.concat(httpLink),
  connectToDevTools: true,
});

const A = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </ApolloProvider>
);
ReactDOM.render(<A />, document.querySelector('#root'));
