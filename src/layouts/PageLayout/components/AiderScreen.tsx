import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 430
    }
  })
);

interface AiderScreenProps {
  children: React.ReactNode;
}

export default function AiderScreen(props: AiderScreenProps) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
