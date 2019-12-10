import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { FullScreenLayoutProps } from "../layout.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  })
);

export default function FullScreen(props: FullScreenLayoutProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>{props.children}</div>
  );
}
