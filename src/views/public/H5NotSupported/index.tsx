import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

export default function H5NotSupported() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">
        暂不支持移动端访问，请在PC浏览器访问。
      </Typography>
    </Paper>
  );
}
