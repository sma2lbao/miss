import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      // textAlign: "center"
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    root: {
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      fontWeight: "bold",
      color: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "linear-gradient(90deg, #e6e6e6 25%, #d6d6d6 37%, #e6e6e6 63%)",
      // backgroundImage: "linear-gradient(90deg, red 25%, blue 37%, red 63%)",
      backgroundSize: "400% 100%",
      // backgroundSize: "100% 100%",
      animation: "$skeleton-busy-animate 2s ease infinite",
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      fontSize: 90
    },
    content: {
      fontSize: 16
    },
    "@keyframes skeleton-busy-animate": {
      "0%": {
        backgroundPosition: "100% 50%"
      },
      "100%": {
        backgroundPosition: "0 50%"
      }
    }
  })
);

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <div className={classes.root}>
        <i className={clsx("iconfont icon-google", classes.logo)}></i>
        <div className={classes.content}>Loading</div>
      </div>
    </div>
  );
}
