import * as React from "react";
import { Image } from "@/components/base/Image";
import { MovieContext } from "../..";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
    },
    main: {
      position: "absolute",
      top: "50%",
      right: 0,
      width: "50%",
      padding: theme.spacing(0, 8),
      transform: "translate(0, -50%)"
    }
  })
);

export const Top: React.FC = () => {
  const movieQuery = React.useContext(MovieContext);
  const classes = useStyles();
  const RouterHelper = useRouterHelper();

  const goMoviePlay = () => {
    RouterHelper.gotoMoviePlay(movieQuery?.movie.id);
  };

  return (
    <div className={classes.root}>
      <Image
        aspectRatio={16 / 9}
        src={
          (movieQuery && movieQuery.movie && movieQuery.movie.cover) ||
          DEFULAT_MOVIE_COVER
        }
      />
      <div className={classes.main}>
        <Typography variant="h4" component="div">
          电影名
        </Typography>
        <div></div>
        <Typography variant="caption" component="div">
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
        </Typography>
        <div>
          <Button onClick={goMoviePlay}>播放</Button>
        </div>
      </div>
    </div>
  );
};

export default Top;
