import * as React from "react";
import {
  Theme,
  createStyles,
  makeStyles,
  Box,
  StandardProps
} from "@material-ui/core";
import clsx from "clsx";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    duration: {
      color: "#fff",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      borderRadius: theme.shape.borderRadius,
      width: 60,
      height: 24,
      fontSize: 12
    }
  })
);

interface DurationProps extends StandardProps<HTMLElement, "root"> {
  duration: number;
  unit?: "ms" | "s";
  classes?: any;
}

function Duration(props: DurationProps) {
  const classes = useStyles();
  let { duration, unit } = props;
  if (unit === "s") {
    duration = duration * 1000;
  }

  // 转换成毫秒
  const hh = moment.duration(duration, "ms").hours() + "";
  const mm = moment.duration(duration, "ms").minutes() + "";
  const ss = moment.duration(duration, "ms").seconds() + "";
  const format =
    hh.padStart(2, "0") + ":" + mm.padStart(2, "0") + ":" + ss.padStart(2, "0");

  return (
    <Box
      className={clsx(classes.duration, props.classes.root, props.className)}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {format}
    </Box>
  );
}

Duration.defaultProps = {
  unit: "ms"
} as Partial<DurationProps>;

export default Duration;
