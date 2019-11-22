import * as React from "react";
import {
  Box,
  Chip,
  Avatar,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      padding: theme.spacing(2, 3)
    }
  })
);

export default function Sort() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Chip color="primary" avatar={<Avatar>L</Avatar>} label="类别一" />
    </Box>
  );
}
