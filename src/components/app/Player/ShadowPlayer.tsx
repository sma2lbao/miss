import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
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

export interface PlayerBaseProps
  extends Pick<
    ReactPlayerProps,
    "url" | "playing" | "controls" | "muted" | "wrapper" | "light"
  > {}

export const ShadowPlayer: React.FC<PlayerBaseProps> = props => {
  const classes = useStyles();
  const { url, ...rest } = props;

  return (
    <div className={classes.root}>
      <ReactPlayer {...rest} className={classes.player} url={url} />
    </div>
  );
};

ShadowPlayer.defaultProps = {
  controls: true
};

export default ShadowPlayer;
