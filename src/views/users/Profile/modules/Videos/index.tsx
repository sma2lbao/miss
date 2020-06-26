import * as React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { VideoNormal } from "@/components/app/VideoCard";

export default function Videos() {
  return (
    <Box>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile cols={1} rows={1}>
          <VideoNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <VideoNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <VideoNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <VideoNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <VideoNormal />
        </GridListTile>
      </GridList>
    </Box>
  );
}
