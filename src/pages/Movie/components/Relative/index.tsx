import * as React from "react";
import { VideoWithAuthor } from "@/components/VideoCard";
import { Box, GridListTile, GridList, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0)
    }
  })
);

export default function Relative() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        喜欢该视频的也喜欢
      </Typography>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile>
          <VideoWithAuthor />
        </GridListTile>
      </GridList>
    </Box>
  );
}
