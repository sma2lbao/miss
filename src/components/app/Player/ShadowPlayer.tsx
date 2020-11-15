import * as React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AspectRatioBox } from "@/components/base/AspectRatioBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {
      width: "100% !important",
      height: "100% !important",
      background: "#000"
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
    <AspectRatioBox ratio={16 / 9}>
      <ReactPlayer
        className={classes.player}
        {...rest}
        url={url}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload noremoteplayback",
              disablePictureInPicture: true,
              onContextMenu: e => e.preventDefault()
            }
          }
        }}
      />
    </AspectRatioBox>
  );
};

ShadowPlayer.defaultProps = {
  controls: true
};

export default ShadowPlayer;
