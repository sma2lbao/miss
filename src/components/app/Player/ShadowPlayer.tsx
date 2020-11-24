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
  const isM3u8 = url?.toString().endsWith(".m3u8");
  const videoRef = React.createRef<ReactPlayer>();

  return (
    <AspectRatioBox ratio={16 / 9}>
      <ReactPlayer
        ref={videoRef}
        className={classes.player}
        {...rest}
        url={url}
        config={{
          file: {
            forceHLS: isM3u8,
            attributes: {
              controlsList: "nodownload noremoteplayback",
              disablePictureInPicture: true,
              onContextMenu: e => e.preventDefault()
            }
          },
          youtube: {
            playerVars: {
              autoplay: rest.playing,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              controls: rest.controls
            },
            embedOptions: {}
          }
        }}
      />
    </AspectRatioBox>
  );
};

ShadowPlayer.defaultProps = {
  controls: true,
  playing: true
};

export default ShadowPlayer;
