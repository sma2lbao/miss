import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import theme from "./theme";
import AppRoute from "./router";
import { client } from "./graphql";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <ApolloProvider client={client}>
          <AppRoute />
        </ApolloProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
