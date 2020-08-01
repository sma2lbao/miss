// import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import {
  PROFILE,
  MOVIE_DETAIL,
  HOME,
  MOVIE_HOME
} from "@/common/constants/route.constant";

export const useRouteHelper = () => {
  const history = useHistory();

  // go home page.
  const gotoHome = () => {
    history.push(`${HOME}`);
  };

  // go profile page.
  const gotoProfile = (username: string | undefined) => {
    history.push(`${PROFILE}/${username}`);
  };

  // go movie detail page.
  const gotoMovie = (movie_id: number | undefined) => {
    history.push(`${MOVIE_DETAIL}/${movie_id}`);
  };

  // go movie home page.
  const gotoMovieHome = () => {
    history.push(MOVIE_HOME);
  };

  return {
    push: (path: string, state?: any) => {
      // console.log(path, state);
      history.push(path, state);
    },
    gotoHome,
    gotoProfile,
    gotoMovie,
    gotoMovieHome
  };
};
