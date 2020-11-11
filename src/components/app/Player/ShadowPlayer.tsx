import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AspectRatioBox } from "@/components/base/AspectRatioBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {
      width: "100% !important",
      height: "100% !important"
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
    <AspectRatioBox ratio={16 / 10}>
      <ReactPlayer className={classes.player} {...rest} url={url} />
    </AspectRatioBox>
  );
};

ShadowPlayer.defaultProps = {
  controls: true
};

export default ShadowPlayer;
