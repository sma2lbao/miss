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

  // go movie detail page.
  const gotoMovie = (movie_id: number | undefined | null) => {
    history.push(`${MOVIE_DETAIL}/${movie_id}`);
  };

  // go movie home page.
  const gotoMovieHome = () => {
    history.push(MOVIE_HOME);
  };

  // go movie play page.
  const gotoMoviePlay = (movie_id: number | undefined | string) => {
    history.push(`${MOVIE_PLAY}/${movie_id}`);
  };

  // go movie upload.
  const gotoMovieUpload = () => {
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
    gotoMovie,
    gotoMovieHome,
    gotoMoviePlay,
    gotoMovieUpload,
    gotoAuthCompletion
  };
};
