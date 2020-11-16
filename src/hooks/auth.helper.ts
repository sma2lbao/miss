import * as React from "react";
import { useMeLazyQuery, User } from "@/schema";
import { useRouterHelper } from "./router.helper";
import { useReactiveVar } from "@apollo/client";
import { accessTokenVar } from "@/graphql/variables";
import { useLocation } from "react-router";

export const useAuth = () => {
  const RouterHelper = useRouterHelper();
  const [hasLogged, setHasLogged] = React.useState<boolean>(false);
  const [member, setMember] = React.useState<User | null>(null);
  const [meQuery, { data }] = useMeLazyQuery();
  const access_token = useReactiveVar(accessTokenVar);
  const location = useLocation();

  const verify = () => {
    const { __referrer_from__ } = (location.state as any) || {
      __referrer_from__: { pathname: "/" }
    };
    if (hasLogged && member) {
      if (!member.email || !member.uid || !member.username) {
        RouterHelper.gotoAuthCompletion();
      } else {
        RouterHelper.replace(__referrer_from__);
      }
    }
  };

  const setAccessToken = (access_token: string) => {
    localStorage.setItem("access_token", access_token);
    accessTokenVar(access_token);
  };

  const clearAccessToken = () => {
    localStorage.removeItem("access_token");
    accessTokenVar(undefined);
  };

  React.useEffect(() => {
    if (access_token) {
      meQuery();
      if (data?.me) {
        setHasLogged(true);
        setMember(data?.me);
      }
    } else {
      setMember(null);
      setHasLogged(false);
    }
    return () => {};
  }, [access_token, data, meQuery]);

  return {
    hasLogged,
    member,
    verify,
    setAccessToken,
    clearAccessToken
  };
};
