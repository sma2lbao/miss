import Message from "@/components/base/Message";
import * as Sentry from "@sentry/browser";
import { ApolloClient, HttpLink, from, split, Resolvers } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/link-context";
import { onError } from "@apollo/link-error";
// import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { cache } from "./cache";
import { typeDefs } from "./local/schema";
import { resolvers as mockResolvers } from "./__mock__/resolvers";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_HTTP_URL
});

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_WEBSOCKET_URL || "",
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
    console.log("graphQLErrors", graphQLErrors);
    graphQLErrors.forEach(({ message, locations, path }) => {
      Message.error(message || "服务器繁忙");
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
//   uri: process.env.REACT_APP_UPLOAD_URL
// });

const resolvers = process.env.REACT_APP_ENV === "mock" ? mockResolvers : {};

export const client = new ApolloClient({
  resolvers: resolvers as Resolvers,
  typeDefs,
  cache,
  link: from([errorLink, authLink, splitLink]),
  connectToDevTools: true
});
console.log(client);
