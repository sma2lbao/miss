import { ReactiveVar, makeVar } from "@apollo/client";

export const httpDomainVar: ReactiveVar<string> = makeVar<string>(
  process.env.REACT_APP_HTTP_DOMAIN_URL || ""
);

export const accessTokenVar: ReactiveVar<string | undefined | null> = makeVar<
  string | undefined | null
>(localStorage.getItem("access_token"));

export const noticeFlagVar: ReactiveVar<boolean> = makeVar<boolean>(true);
