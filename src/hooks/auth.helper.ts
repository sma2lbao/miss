import * as React from "react";
import { useMeLazyQuery, User } from "@/schema";
import { useRouterHelper } from "./router.helper";

export const useAuth = () => {
  const RouterHelper = useRouterHelper();
  const [hasLogged, setHasLogged] = React.useState<boolean>(false);
  const [member, setMember] = React.useState<User | null>(null);
  const access_token = localStorage.getItem("access_token");
  const [meQuery, { data }] = useMeLazyQuery();

  React.useEffect(() => {
    if (access_token) {
      meQuery();
    } else {
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

  return {
    hasLogged,
    member,
    verify
  };
};
