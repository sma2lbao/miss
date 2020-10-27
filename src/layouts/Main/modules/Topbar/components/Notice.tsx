import * as React from "react";
import { IconButton, Box } from "@material-ui/core";
import { Mail } from "@material-ui/icons";

export default function Notice() {
  return (
    <Box mx={0.5}>
      <IconButton color="inherit">
        <Mail />
      </IconButton>
    </Box>
  );
}
