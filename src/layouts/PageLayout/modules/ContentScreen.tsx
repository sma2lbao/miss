import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { ContentScreenLayoutProps } from "../layout.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1200,
      flex: 3
      // flexGrow: 3,
      // flexShrink: 3,
      // flexBasis: "auto"
    }
  })
);

export default function ContentScreen(props: ContentScreenLayoutProps) {
  const classes = useStyles();

  return (
    <div
      style={Object.assign({}, props.width ? { width: props.width } : {})}
      className={clsx(classes.root, props.className)}
    >
      {props.children}
    </div>
  );
}
