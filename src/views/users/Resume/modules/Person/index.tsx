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
      <Avatar
        className={classes.avatar}
        alt="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBouYESt5VYCK60K5uhGZhG-TfP29I6NjM2tBpYdM1sYXQQLyw"
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
        <Typography variant="body2">sma2lbao@qq.com</Typography>
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
      </div>
    </Box>
  );
}
