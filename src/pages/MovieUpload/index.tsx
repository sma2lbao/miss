import * as React from "react";
import { Box } from "@material-ui/core";
import MovieEditor from "./components/MovieEditor";
import MoviePreview from "./components/MoviePreview";

export default function MovieUpload() {
  return (
    <Box display="flex">
      <Box flex={1}>
        <MoviePreview />
      </Box>
      <Box flex={1}>
        <MovieEditor />
      </Box>
    </Box>
  );
}
