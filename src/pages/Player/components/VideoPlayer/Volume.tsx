import * as React from "react";
import { IconButton, Popper, Slider } from "@material-ui/core";
import {
  VolumeOffRounded,
  VolumeMuteRounded,
  VolumeDownRounded,
  VolumeUpRounded
} from "@material-ui/icons";
import { VolumeProps } from "./player.interface";

export default function Volume(props: VolumeProps) {
  const { volume, muted, onClickMuted, onVolumeChange } = props;
  const anchorRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  return (
    <span
      ref={anchorRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <IconButton onClick={onClickMuted}>
        {muted && <VolumeOffRounded />}
        {!muted && volume === 0 && <VolumeMuteRounded />}
        {!muted && volume > 0 && volume <= 0.5 && <VolumeDownRounded />}
        {!muted && volume > 0.5 && <VolumeUpRounded />}
      </IconButton>
      <Popper
        placement="top"
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        <div style={{ height: 80 }}>
          <Slider
            step={0.01}
            min={0}
            max={1}
            value={volume}
            valueLabelDisplay="off"
            orientation="vertical"
            onChange={(e, val: any) => {
              onVolumeChange(val);
            }}
          />
        </div>
      </Popper>
    </span>
  );
}
