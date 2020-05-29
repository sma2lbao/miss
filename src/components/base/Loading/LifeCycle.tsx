import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

export default function LifeCycle() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
