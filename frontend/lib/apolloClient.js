import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';

let apolloClient;

if (typeof window === 'undefined') {
  const _watchQuery = ApolloClient.prototype.watchQuery;
  ApolloClient.prototype.watchQuery = function (options) {
    if (options && 'canonizeResults' in options) {
      console.log('canonizeResults passed to watchQuery:', options);
      console.trace('canonizeResults stack');
    }
    return _watchQuery.call(this, options);
  };

  const _query = ApolloClient.prototype.query;
  ApolloClient.prototype.query = function (options) {
    if (options && 'canonizeResults' in options) {
      console.log('canonizeResults passed to query:', options);
      console.trace('canonizeResults stack');
    }
    return _query.call(this, options);
  };
}

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
