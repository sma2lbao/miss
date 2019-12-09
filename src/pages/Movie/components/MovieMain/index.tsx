import React from "react";
import { Box, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Favorite } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0)
    }
  })
);

export default function MovieMain() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h6" gutterBottom>
          评分
        </Typography>
        <Rating
          name="customized-empty"
          value={2}
          precision={0.5}
          icon={<Favorite fontSize="inherit" />}
        />
      </Box>
      <Typography variant="h6">精彩评论</Typography>
      <Typography>视频图片</Typography>
    </Box>
  );
}
