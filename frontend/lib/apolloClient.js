import { ApolloClient, InMemoryCache, ApolloLink, ApolloError } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

let apolloClient;

const errorLink = onError(({ error, operation }) => {
  if (!error) return;

  // ApolloError (most common)
  if (error instanceof ApolloError) {
    if (error.graphQLErrors?.length) {
      for (const err of error.graphQLErrors) {
        console.error("[GraphQL error]", {
          message: err.message,
          locations: err.locations,
          path: err.path,
          operation: operation.operationName,
        });
      }
    }
    if (error.networkError) {
      console.error("[Network error]", error.networkError);
    }
    return;
  }

  // Fallback (non-Apollo errors)
  console.error("[Apollo link error]", error);
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      errorLink,
      createUploadLink({
        uri: "/api/graphql",
        credentials: "include",
      })
    ]),
    cache: new InMemoryCache(),
  });
}

const initializeApollo = () => {
  if (!apolloClient) apolloClient = createApolloClient();
  return apolloClient;
}

export { initializeApollo };
