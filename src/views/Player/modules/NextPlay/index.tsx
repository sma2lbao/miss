import * as React from "react";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";

export default function NextPlay() {
  return (
    <Box py={2}>
      <Typography variant="subtitle1" gutterBottom>
        {/* 接下来播放 */}
      </Typography>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile cols={1}>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile cols={1}>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile cols={1}>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile cols={1}>
          <VideoWithAuthor />
        </GridListTile>
        <GridListTile cols={1}>
          <VideoWithAuthor />
        </GridListTile>
      </GridList>
    </Box>
  );
}
