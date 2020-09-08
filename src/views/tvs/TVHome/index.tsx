import * as React from "react";
import {
  Box,
  Typography,
  Link,
  GridList,
  GridListTile
} from "@material-ui/core";
import { MediaNormal } from "@/components/app/Media";

export default function TVHome() {
  return (
    <Box padding={0}>
      <Box
        paddingY={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography component="span" variant="h6">
          电影推荐
        </Typography>
        <Link href="" color="textSecondary" variant="caption">
          更多
        </Link>
      </Box>
      <GridList cellHeight="auto" cols={5}>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
        <GridListTile>
          <MediaNormal />
        </GridListTile>
      </GridList>
    </Box>
  );
}
