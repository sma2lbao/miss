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
import { MediaNormal } from "@/components/app/MediaCard";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    item: {
      flex: 1,
      overflow: "hidden",
      "& + &": {
        marginLeft: theme.spacing(1)
      }
    },
    wrap: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    mainButton: {
      marginLeft: theme.spacing(1),
      flexShrink: 0
    },
    content: {}
  })
);

export const Top: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={clsx(classes.item, classes.wrap)}>
        <Box className={classes.main}>
          <Box display="flex" alignItems="center">
            <Avatar>S</Avatar>
            <Box ml={1}>
              <Typography variant="subtitle1">Sma2lBao</Typography>
              <Typography variant="caption">ShengZhen</Typography>
            </Box>
          </Box>
          <Button className={classes.mainButton}>订阅</Button>
        </Box>
        <Box className={classes.content}>
          <Typography gutterBottom variant="subtitle2" component="div">
            江城子·乙卯正月二十日夜记梦
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="div"
          >
            十年生死两茫茫，不思量，自难忘。千里孤坟，无处话凄凉。纵使相逢应不识，尘满面，鬓如霜。
            夜来幽梦忽还乡，小轩窗，正梳妆。相顾无言，惟有泪千行。料得年年肠断处，明月夜，短松冈。(肠断
            一作：断肠)
          </Typography>
          <div>
            <Typography variant="caption">观看数： TODO</Typography>
            <Typography variant="caption">点赞数： TODO</Typography>
            <Typography variant="caption">发布时间： TODO</Typography>
          </div>
        </Box>
      </div>
      <div className={classes.item}>
        <MediaNormal />
      </div>
    </Box>
  );
};

export default Top;
