import * as React from "react";
import {
  Box,
  Typography,
  Link,
  GridList,
  GridListTile
} from "@material-ui/core";
import { VideoWithAuthor } from "@/components/VideoCard";
import Sort from "./components/Sort";
import Filter from "./components/Filter";

export default function MovieHome() {
  return (
    <Box padding={0}>
      {/* <Box
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
      </Box> */}
      <Sort />
      <Filter />
      {/* <GridList cellHeight="auto" cols={5}>
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
      </GridList> */}
    </Box>
  );
}
