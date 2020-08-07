import * as React from "react";
// import { Box } from "@material-ui/core";
import { EditMovieHome, EditMoviePlay } from "./modules";

export enum MovieUploadStep {
  EIDT_MOVIE_HOME = 0,
  EIDT_MOVIE_PLAY = 1
}

export const MovieUpload: React.FC = () => {
  const [curStep] = React.useState(MovieUploadStep.EIDT_MOVIE_HOME);

  return (
    <div>
      {curStep === MovieUploadStep.EIDT_MOVIE_HOME && <EditMovieHome />}
      {curStep === MovieUploadStep.EIDT_MOVIE_PLAY && <EditMoviePlay />}
    </div>
  );
};
export default MovieUpload;
