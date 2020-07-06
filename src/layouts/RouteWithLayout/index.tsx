import * as React from "react";
import { Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  layout?: any;
  component: any;
  lazy?: boolean;
  loading?: any;
}

export default function RouteWithLayout(props: IProps) {
  const {
    layout: Layout,
    component: Component,
    loading: Loading,
    lazy,
    ...rest
  } = props;

  return Layout ? (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          {lazy ? (
            <React.Suspense
              fallback={Loading ? <Loading /> : <div>loading</div>}
            >
              <Component {...matchProps} />
            </React.Suspense>
          ) : (
            <Component {...matchProps} />
          )}
        </Layout>
      )}
    />
  ) : (
    <Route
      {...rest}
      render={matchProps => {
        if (lazy) {
          return (
            <React.Suspense
              fallback={Loading ? <Loading /> : <div>loading</div>}
            >
              <Component {...matchProps} />
            </React.Suspense>
          );
        } else {
          return <Component {...matchProps} />;
        }
      }}
    />
  );
}
