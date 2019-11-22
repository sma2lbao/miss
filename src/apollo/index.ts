import ApolloClient from "apollo-boost";
import Message from "./Message";

export const client = new ApolloClient({
  uri: "http://localhost:108/graphql",
  request: operation => {
    const access_token = localStorage.getItem("access_token");
    operation.setContext({
      headers: {
        authorization: access_token ? `Bearer ${access_token}` : ""
      }
    });
  },
  onError: errorResponse => {
    const { graphQLErrors } = errorResponse;
    if (graphQLErrors && graphQLErrors.length > 0) {
      Message.error(graphQLErrors[0].message || "服务器繁忙");
    }
  }
});
