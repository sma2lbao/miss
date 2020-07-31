import * as React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
  Button
} from "@material-ui/core";

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

export const State50x: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.box}>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
        <Typography variant="h4" gutterBottom>
          服务器错误
        </Typography>
        <Button>返回首页</Button>
      </Box>
    </div>
  );
};

export default State50x;
