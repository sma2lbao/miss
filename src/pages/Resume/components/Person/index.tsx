import * as React from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    person: {
      width: 275,
      background: theme.palette.background.paper,
      padding: theme.spacing(3)
      // textAlign: "center"
    },
    avatar: {
      width: 80,
      height: 80,
      margin: "auto"
    },
    cell: {
      marginTop: theme.spacing(1)
    }
  })
);

export default function PersonCard() {
  const classes = useStyles();

  return (
    <Box className={classes.person}>
      {/* <Avatar
        className={classes.avatar}
        alt="avatar"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562763235177&di=ff3c425ba5b3be386d2a76dfd122f0f4&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201504%2F03%2F20150403H4617_Na8vX.jpeg"
      ></Avatar>
      <Typography variant="h6" align="center">
        李观保
      </Typography>
      <Typography variant="subtitle1" align="center">
        前端开发工程师
      </Typography>
      <Typography>联系方式</Typography>
      <div className={classes.cell}>
        <Typography variant="caption" color="textSecondary">
          邮箱
        </Typography>
        <Typography variant="body2">sma2lbao@gmail.com</Typography>
      </div>
      <div className={classes.cell}>
        <Typography variant="caption" color="textSecondary">
          手机号
        </Typography>
        <Typography variant="body2">17605812021</Typography>
      </div>
      <div className={classes.cell}>
        <Typography variant="caption" color="textSecondary">
          住址
        </Typography>
        <Typography variant="body2">深圳市-宝安区-桥头</Typography>
      </div>
      <div className={classes.cell}>
        <Typography variant="caption" color="textSecondary">
          个人网址
        </Typography>
        <Typography variant="body2">https://www.sma2lbao.cn</Typography>
      </div> */}
    </Box>
  );
}
