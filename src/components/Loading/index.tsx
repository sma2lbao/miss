import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    logo: {},
    content: {
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      fontWeight: "bold",
      fontSize: 50,
      color: "transparent",
      backgroundImage: "linear-gradient(#000, #000)",
      backgroundRepeat: "no-repeat",
      display: "inline-flex"
    }
  })
);

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}></div>
      <div className={classes.content}>Loading</div>
    </div>
  );
}
