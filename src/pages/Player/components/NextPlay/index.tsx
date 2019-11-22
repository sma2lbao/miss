import * as React from "react";
import { VideoNormal, VideoWithAuthor } from "@/components/VideoCard";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";

export default function NextPlay() {
  return (
    <Box py={2}>
      <Typography variant="h6" gutterBottom>
        接下来播放
      </Typography>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile cols={1}>
          <VideoNormal />
        </GridListTile>
      </GridList>
    </Box>
  );
}
