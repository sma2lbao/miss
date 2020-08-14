import * as React from "react";
import { Image } from "@/components/base/Image";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button, Box } from "@material-ui/core";

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

export const EditTop: React.FC = () => {
  const classes = useStyles();
  const [movie] = React.useState({
    title: "",
    sub_title: "",
    description: ""
  });

  return (
    <div className={classes.root}>
      <Image aspectRatio={16 / 9} src={DEFULAT_MOVIE_COVER} />
      <div className={classes.main}>
        <Typography gutterBottom variant="h4" component="div">
          {movie.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {movie.sub_title}
        </Typography>
        {/* <div></div> */}
        <Typography variant="body2" component="div">
          {movie.description}
        </Typography>
        <Box mt={3}>
          <Button size="large" variant="contained" color="primary">
            播放
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default EditTop;