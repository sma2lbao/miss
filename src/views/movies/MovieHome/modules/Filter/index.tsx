import * as React from "react";
import { Box, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    }
  })
);

export default function Filter() {
  const classes = useStyles();

  return <Box className={classes.root}></Box>;
}
