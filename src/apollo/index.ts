import Message from "@/components/base/Message";
import * as Sentry from "@sentry/browser";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  split
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/link-context";
import { onError } from "@apollo/link-error";
// import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "@apollo/client/link/ws";

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql"
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:3001/`,
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  const access_token = localStorage.getItem("access_token");
  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : ""
    }
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      // Message.error(message || "服务器繁忙");
      Sentry.captureMessage(message);
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    Sentry.captureException(networkError);
    Message.error("服务器繁忙");
    console.log(`[Network error]: ${networkError}`);
  }
});

// const uploadLink = createUploadLink({
//   uri: "http://localhost:3001/graphql"
// });

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink, splitLink])
});
