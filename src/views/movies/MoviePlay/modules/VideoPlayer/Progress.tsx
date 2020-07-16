import * as React from "react";
import {
  // Theme,
  // createStyles,
  // makeStyles,
  Slider,
  Box,
  Typography
} from "@material-ui/core";
import { ProgressProps } from "./player.interface";
import moment from "moment";

// const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Progress(props: ProgressProps) {
  const { duration, currentTime, onChange } = props;

  const formatHandler = (duration: number): string => {
    // 转换成毫秒
    const hh = moment.duration(duration, "ms").hours() + "";
    const mm = moment.duration(duration, "ms").minutes() + "";
    const ss = moment.duration(duration, "ms").seconds() + "";
    const format =
      hh.padStart(2, "0") +
      ":" +
      mm.padStart(2, "0") +
      ":" +
      ss.padStart(2, "0");
    return format;
  };

  const durationFormat = formatHandler(duration);

  return (
    <Box display="flex">
      <Slider
        // marks
        // step={1000}
        min={0}
        max={duration}
        value={currentTime}
        valueLabelDisplay="auto"
        valueLabelFormat={value => {
          const valFormat = formatHandler(value);
          return valFormat;
        }}
        onChange={(e, val: any) => {
          onChange(val);
        }}
        onMouseMove={e => {
          // const { left, width } = e.currentTarget.getBoundingClientRect();
          // const x = e.clientX;
          // const percent = (x - left) / width;
          // const val = duration * percent;
        }}
        disabled={duration === 0}
      />
      <Typography>{formatHandler(currentTime)}/</Typography>
      <Typography>{durationFormat}</Typography>
    </Box>
  );
}
