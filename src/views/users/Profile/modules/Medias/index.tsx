import * as React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { MediaNormal } from "@/components/app/MediaCard";

export const Medias: React.FC = () => {
  return (
    <Box>
      <GridList cellHeight="auto" cols={4}>
        <GridListTile cols={1} rows={1}>
          <MediaNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaNormal />
        </GridListTile>
        <GridListTile cols={1} rows={1}>
          <MediaNormal />
        </GridListTile>
      </GridList>
    </Box>
  );
};

export default Medias;
