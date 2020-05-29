import * as React from "react";
import MovieRecommend from "./Movie";
// import TvRecommend from "./Tv";
import { Box } from "@material-ui/core";

export default function Recommend() {
  return (
    <>
      <Box paddingTop={4}>
        <MovieRecommend />
      </Box>
      {/* <Box paddingTop={4}>
        <TvRecommend />
      </Box> */}
    </>
  );
}
