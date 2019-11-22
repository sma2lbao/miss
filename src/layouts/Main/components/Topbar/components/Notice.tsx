import * as React from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Mail } from "@material-ui/icons";

export default function Notice() {
  return (
    <IconButton color="inherit">
      <Mail />
    </IconButton>
  );
}
