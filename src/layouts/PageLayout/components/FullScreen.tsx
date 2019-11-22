import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  })
);

interface FullScreenProps {
  children: React.ReactNode;
}

export default function FullScreen(props: FullScreenProps) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
