import * as React from "react";
import { Route, RouteProps } from "react-router-dom";
import { LoadingDefault } from "@/components/base/Loading";
import { useAuth, useRouterHelper } from "@/hooks";
// import Message from "@/components/base/Message";

interface IProps extends RouteProps {
  layout?: any;
  component: any;
  lazy?: boolean;
  loading?: any;
  authority?: Authority;
}

export enum Authority {
  GUEST,
  MEMBER,
  ADMIN,
  ROOT
}

export const RouteWithLayout = (props: IProps) => {
  const {
    layout: Layout,
    component: Component,
    loading: Loading,
    lazy,
    authority,
    ...rest
  } = props;
  const RouterHelper = useRouterHelper();
  const { hasLogged } = useAuth();
  if (authority !== Authority.GUEST && !hasLogged) {
    // Message.toast("请先登录");
    RouterHelper.redirectAuthLogin(true);
  }
  return Layout ? (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          {lazy ? (
            <React.Suspense
              fallback={Loading ? <Loading /> : <LoadingDefault />}
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
              fallback={Loading ? <Loading /> : <LoadingDefault />}
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
};
RouteWithLayout.defaultProps = {
  authority: Authority.GUEST
};

export default RouteWithLayout;
