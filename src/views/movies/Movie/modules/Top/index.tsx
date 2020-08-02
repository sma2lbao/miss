import * as React from "react";
import { Image } from "@/components/base/Image";
import { MovieContext } from "../..";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button, Box } from "@material-ui/core";
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
      transform: "translate(0, -50%)",
      color: "#fff"
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
        <Typography gutterBottom variant="h4" component="div">
          电影名
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          电影信息补充
        </Typography>
        {/* <div></div> */}
        <Typography variant="body2" component="div">
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
          电影介绍一定要长，这样才能撑开布局，这样才好看，一般是三行最佳。
        </Typography>
        <Box mt={3}>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={goMoviePlay}
          >
            播放
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Top;
