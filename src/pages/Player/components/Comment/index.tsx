import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";

export default function Comment() {
  return (
    <Box>
      <AddComment />
      <Typography>评论</Typography>
      <div>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </Box>
  );
}
