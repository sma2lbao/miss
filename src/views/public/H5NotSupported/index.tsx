import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import { Placeholder } from "@/components/base/Placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2),
      background: theme.palette.background.paper
    }
  })
);

export default function H5NotSupported() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Placeholder title="暂不支持移动端访问，请在PC浏览器访问。" />
    </div>
  );
}
