import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
  Button
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      overflowY: "auto"
    },
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      fontSize: 120
    }
  })
);

export const State403: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
        <Typography variant="h4" gutterBottom>
          禁止访问
        </Typography>
        <Button>返回首页</Button>
      </Box>
    </div>
  );
};

export default State403;
