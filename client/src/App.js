import 'tailwindcss/tailwind.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// we might need to use react-router-dom for internal hyperlinks?


import Container from './pages/Container';


const httpLink = createHttpLink({
   //for local deployment use 'http://localhost:3001/graphql', for live deployment use '/graphql'

  uri: '/graphql'
  // uri: 'http://localhost:3001/graphql'
});

// Auth middleware that attaches JWT to every request as an Auth header
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return { headers: { ...headers, authorization: token ? `Bearer ${token}` : '' } };
});

const client = new ApolloClient({
  // implements the authLink before making a request to the gql API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>

        <div className="bg-yellow-500">
          {/* <Home /> this is in case we want to revert to home being the traffic control*/}
          <Container />
        </div>

      </div>
    </ApolloProvider>
  );
}

export default App;
