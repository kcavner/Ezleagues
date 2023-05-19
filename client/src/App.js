import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './pages/home'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>

        <div>
          <Home />
        </div>

      </div>
    </ApolloProvider>
  );
}

export default App;
