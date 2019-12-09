import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  })
);

interface FullScreenProps {
  children: React.ReactNode;
  className?: String;
}

export default function FullScreen(props: FullScreenProps) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, props.className)}>{props.children}</div>
  );
}
