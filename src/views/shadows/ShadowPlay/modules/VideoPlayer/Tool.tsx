import * as React from "react";
import { Pause, PlayArrow, SlowMotionVideo } from "@material-ui/icons";
import { ToolProps, PlayStatus } from "./player.interface";
import { Box, IconButton } from "@material-ui/core";

export default function Tool(props: ToolProps) {
  const { status, onPlay, onPause } = props;
  return (
    <Box>
      {(status === PlayStatus.Ready || status === PlayStatus.Pause) && (
        <IconButton onClick={onPlay}>
          <PlayArrow />
        </IconButton>
      )}
      {status === PlayStatus.Playing && (
        <IconButton onClick={onPause}>
          <Pause />
        </IconButton>
      )}
      {status === PlayStatus.Waiting && (
        <IconButton>
          <SlowMotionVideo />
        </IconButton>
      )}
    </Box>
  );
}
