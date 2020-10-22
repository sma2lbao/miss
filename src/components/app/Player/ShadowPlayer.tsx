import * as React from "react";
import ReactPlayer from "react-player";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      paddingTop: "calc(56.25%)",
      position: "relative"
    },
    player: {
      width: "100% !important",
      height: "100% !important",
      position: "absolute",
      top: 0,
      left: 0
    }
  })
);

export const ShadowPlayer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactPlayer
        className={classes.player}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing
      />
    </div>
  );
};

export default ShadowPlayer;
