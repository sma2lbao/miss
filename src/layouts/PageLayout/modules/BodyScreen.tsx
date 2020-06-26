import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { BodyScreenLayoutProps } from "../layout.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1600,
      display: "flex",
      margin: "0 auto"
    }
  })
);

export default function BodyScreen(props: BodyScreenLayoutProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>{props.children}</div>
  );
}
