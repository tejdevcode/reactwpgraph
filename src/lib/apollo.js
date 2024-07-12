import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://dev-reactwpgraph.pantheonsite.io/graphql',
  cache: new InMemoryCache(),
});

export default client;