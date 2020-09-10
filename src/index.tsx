import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { App } from './App';
import { GlobalStyles } from './GlobalStyles';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});
const A = () => (
  <ApolloProvider client={client as any}>
    <ApolloHooksProvider client={client}>
      <GlobalStyles />
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloHooksProvider>
  </ApolloProvider>
);
ReactDOM.render(<A />, document.querySelector('#root'));
