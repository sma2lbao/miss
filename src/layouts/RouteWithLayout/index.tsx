import * as React from "react";
import { Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  layout?: any;
  component: any;
}

export default function RouteWithLayout(props: IProps) {
  const { layout: Layout, component: Component, ...rest } = props;

  return Layout ? (
    <Route
      {...rest}
      render={matchProps => <Layout>{<Component {...matchProps} />}</Layout>}
    />
  ) : (
    <Route {...rest} component={Component} />
  );
}
