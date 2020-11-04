import * as React from "react";
import ShadowRecommend from "./Shadow";
// import TvRecommend from "./Tv";
import { Box } from "@material-ui/core";

export default function Recommend() {
  return (
    <>
      <Box>
        <ShadowRecommend />
      </Box>
      {/* <Box paddingTop={4}>
        <TvRecommend />
      </Box> */}
    </>
  );
}
