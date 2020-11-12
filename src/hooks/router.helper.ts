// import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import {
  PROFILE,
  SHADOW_DETAIL,
  HOME,
  SHADOW_HOME,
  SHADOW_PLAY,
  SHADOW_UPLOAD,
  AUTH_COMPLETION,
  AUTH_LOGIN
} from "@/common/constants/route.constant";

export const useRouterHelper = () => {
  const history = useHistory();
  const location = useLocation();

  // go home page.
  const gotoHome = () => {
    history.push(`${HOME}`);
  };

  // go profile page.
  const gotoProfile = (username: string | undefined | null) => {
    history.push(`${PROFILE}/${username}`);
  };

  // go shadow detail page.
  const gotoShadow = (shadow_id: number | undefined | null | string) => {
    history.push(`${SHADOW_DETAIL}/${shadow_id}`);
  };

  // go shadow home page.
  const gotoShadowHome = () => {
    history.push(SHADOW_HOME);
  };

  // go shadow play page.
  const gotoShadowPlay = (
    shadow_id: number | undefined | string | null,
    state?: any
  ) => {
    history.push(`${SHADOW_PLAY}/${shadow_id}`, state);
  };

  // go shadow upload.
  const gotoShadowUpload = () => {
    history.push(`${SHADOW_UPLOAD}`);
  };

  // go info completion page.
  const gotoAuthCompletion = () => {
    history.push(`${AUTH_COMPLETION}`);
  };

  const redirectAuthLogin = (referrer?: boolean) => {
    history.replace(
      `${AUTH_LOGIN}`,
      referrer
        ? {
            __referrer_from__: location
          }
        : undefined
    );
  };

  return {
    push: (path: string, state?: any) => {
      history.push(path, state);
    },
    replace: (pathOrlocation, stateOptions?) => {
      history.replace(pathOrlocation, stateOptions);
    },
    gotoHome,
    gotoProfile,
    gotoShadow,
    gotoShadowHome,
    gotoShadowPlay,
    gotoShadowUpload,
    gotoAuthCompletion,
    redirectAuthLogin
  };
};
