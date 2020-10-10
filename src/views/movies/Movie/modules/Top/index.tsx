import * as React from "react";
import { Image } from "@/components/base/Image";
import { MovieContext } from "../..";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import { useRouterHelper } from "@/hooks";
import { PlayCircleOutline } from "@material-ui/icons";

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
          {movieQuery?.movie.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {movieQuery?.movie.sub_title}
        </Typography>
        {/* <div></div> */}
        <Typography variant="body2" component="div">
          {movieQuery?.movie.description}
        </Typography>
        <Box mt={3}>
          <IconButton onClick={goMoviePlay}>
            <PlayCircleOutline />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Top;
