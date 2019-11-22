import * as React from "react";
import {
  Box,
  Typography,
  Avatar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(1)
    },
    main: {
      flex: 1
    },
    infoItem: {
      "& + &": {
        marginLeft: theme.spacing(1)
      }
    }
  })
);

function CommentItem() {
  const classes = useStyles();

  return (
    <Box>
      <Box display="flex">
        <Avatar className={classes.avatar}>L</Avatar>
        <div className={classes.main}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>白居易</Typography>
            <Typography variant="caption">2019/10/10 12:22</Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" className={classes.infoItem}>
              like 2
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              dislike 0
            </Typography>
          </Box>
        </div>
      </Box>
      <Typography variant="body2">
        邯郸驿里逢冬至，抱膝灯前影伴身。 想得家中夜深坐，还应说着远行人。
      </Typography>
    </Box>
  );
}

export default CommentItem;
