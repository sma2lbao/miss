import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }
  })
);

interface BodyScreenProps {
  children: React.ReactNode;
}

export default function BodyScreen(props: BodyScreenProps) {
  const classes = useStyles();

  return <div className={classes.root}>{props.children}</div>;
}
