import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { CustomThemeProvider } from "./theme";
import AppRoute from "./router";
import { client } from "./graphql";
import { SnackbarUtilsConfigurator } from "./components/base/Message";

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilsConfigurator />
        <ApolloProvider client={client}>
          <AppRoute />
        </ApolloProvider>
      </SnackbarProvider>
    </CustomThemeProvider>
  );
};

export default App;
