import * as React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { MediaOwn } from "@/components/app/MediaCard";

export const Medias: React.FC = () => {
  return (
    <Box>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile cols={1} rows={1}>
          <MediaOwn />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaOwn />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaOwn />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaOwn />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaOwn />
        </GridListTile>
      </GridList>
    </Box>
  );
};

export default Medias;
