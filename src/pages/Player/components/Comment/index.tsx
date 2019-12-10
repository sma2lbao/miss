import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: theme.spacing(2, 0),
      "& + &": {
        borderTop: `1px solid ${theme.palette.divider}`
      }
    },
    commentTitle: {
      padding: theme.spacing(1, 0)
    }
  })
);

export default function Comment() {
  const classes = useStyles();

  return (
    <Box>
      <AddComment />
      <Typography variant="subtitle2" className={classes.commentTitle}>
        评论
      </Typography>
      <div>
        <div className={classes.item}>
          <CommentItem />
        </div>
        <div className={classes.item}>
          <CommentItem />
        </div>
        <div className={classes.item}>
          <CommentItem />
        </div>
      </div>
    </Box>
  );
}
