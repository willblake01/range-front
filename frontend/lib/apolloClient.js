import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';

let apolloClient;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path }) => {
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            );
          });
        }
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      createUploadLink({
        // client-side hits Next API route, so relative is fine
        uri: '/api/graphql',
        credentials: 'include',
      }),
    ]),
    cache: new InMemoryCache(),
  });
}

const initializeApollo = () => {
  // On the client, reuse the same instance so cache persists across route changes
  if (!apolloClient) apolloClient = createApolloClient();
  return apolloClient;
}

export { initializeApollo }
