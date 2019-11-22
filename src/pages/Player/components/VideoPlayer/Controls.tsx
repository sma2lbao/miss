import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { LinearProgress, Slider } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Controls() {
  const classes = useStyles();

  return (
    <div>
      <Slider
        valueLabelDisplay="auto"
        // valueLabelFormat
        // getAriaValueText={(value: number) => value + ''}
      />
    </div>
  );
}
