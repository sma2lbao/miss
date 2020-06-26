import * as React from "react";
import { FullScreen, BodyScreen } from "@/layouts/PageLayout";
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

export const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <FullScreen className={classes.root}>
      <Box className={classes.box}>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
        <Typography variant="h2">Oops</Typography>
        <Typography variant="body1">页面未找到！</Typography>
        <Button>返回首页</Button>
      </Box>
    </FullScreen>
  );
};

export default NotFound;
