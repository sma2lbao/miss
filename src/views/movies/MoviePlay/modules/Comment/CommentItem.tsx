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
      marginRight: theme.spacing(2)
    },
    main: {
      flex: 1
    },
    infoItem: {
      "& + &": {
        marginLeft: theme.spacing(2)
      }
    },
    commentText: {
      marginTop: theme.spacing(1)
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
            <Typography>昵称</Typography>
            <Typography variant="caption">2020年10月01日</Typography>
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
      <Typography variant="body2" className={classes.commentText}>
        你的评论内容。你的评论内容。你的评论内容。你的评论内容。你的评论内容。你的评论内容。
      </Typography>
    </Box>
  );
}

export default CommentItem;
