import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { AiderScreenLayoutProps } from "../layout.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400
    }
  })
);

export default function AiderScreen(props: AiderScreenLayoutProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>{props.children}</div>
  );
}
