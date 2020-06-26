import * as React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    content: {}
  })
);

export default function Top() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display="flex" p={2} alignItems="center">
        <Avatar>S</Avatar>
        <Box ml={1}>
          <Typography>Sma2lBao</Typography>
          <Typography>ShengZhen</Typography>
        </Box>
        <Button>订阅</Button>
      </Box>
      <Box className={classes.content}>
        <Typography variant="subtitle2">江城子·乙卯正月二十日夜记梦</Typography>
        <Typography variant="body2" color="textSecondary">
          十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。
          夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。(肠断
          一作：断肠)
        </Typography>
      </Box>
    </Box>
  );
}
