// import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  PROFILE,
  MOVIE_DETAIL,
  HOME,
  MOVIE_HOME,
  MOVIE_PLAY,
  MOVIE_UPLOAD,
  AUTH_COMPLETION
} from "@/common/constants/route.constant";

export const useRouterHelper = () => {
  const history = useHistory();

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
    history.push(`${MOVIE_DETAIL}/${shadow_id}`);
  };

  // go shadow home page.
  const gotoShadowHome = () => {
    history.push(MOVIE_HOME);
  };

  // go shadow play page.
  const gotoShadowPlay = (shadow_id: number | undefined | string | null) => {
    history.push(`${MOVIE_PLAY}/${shadow_id}`);
  };

  // go shadow upload.
  const gotoShadowUpload = () => {
    history.push(`${MOVIE_UPLOAD}`);
  };

  // go info completion page.
  const gotoAuthCompletion = () => {
    history.push(`${AUTH_COMPLETION}`);
  };

  return {
    push: (path: string, state?: any) => {
      // console.log(path, state);
      history.push(path, state);
    },
    gotoHome,
    gotoProfile,
    gotoShadow,
    gotoShadowHome,
    gotoShadowPlay,
    gotoShadowUpload,
    gotoAuthCompletion
  };
};
