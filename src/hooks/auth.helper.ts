import * as React from "react";
import { useMeLazyQuery, User } from "@/schema";
import { useRouterHelper } from "./router.helper";
import { useReactiveVar } from "@apollo/client";
import { accessTokenVar } from "@/graphql/variables";

export const useAuth = () => {
  const RouterHelper = useRouterHelper();
  const [hasLogged, setHasLogged] = React.useState<boolean>(false);
  const [member, setMember] = React.useState<User | null>(null);
  const [meQuery, { data }] = useMeLazyQuery();
  const access_token = useReactiveVar(accessTokenVar);

  React.useEffect(() => {
    if (access_token) {
      meQuery();
    } else {
      setMember(null);
      setHasLogged(false);
    }

    if (data?.me) {
      setHasLogged(true);
      setMember(data?.me);
    }
  }, [access_token, data, meQuery]);

  const verify = () => {
    if (hasLogged && member) {
      if (!member.email || !member.uid || !member.username) {
        RouterHelper.gotoAuthCompletion();
      } else {
        RouterHelper.gotoHome();
      }
    }
  };

  const setAccessToken = (access_token: string) => {
    localStorage.setItem("access_token", access_token);
    accessTokenVar(access_token);
  };

  return {
    hasLogged,
    member,
    verify,
    setAccessToken
  };
};
