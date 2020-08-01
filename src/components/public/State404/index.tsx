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
import { useHistory } from "react-router";
import { HOME } from "@/common/constants/route.constant";

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

export const State404: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
        <Typography variant="h4" gutterBottom>
          页面未找到
        </Typography>
        <Button onClick={() => history.push(HOME)}>返回首页</Button>
      </Box>
    </div>
  );
};

export default State404;
