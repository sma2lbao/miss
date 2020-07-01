import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Typography,
  Divider,
  GridListTile,
  GridList
} from "@material-ui/core";
import { VideoNormal } from "@/components/app/VideoCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius
    },
    title: {
      padding: theme.spacing(1.5, 2)
    },
    content: {
      padding: theme.spacing(1.5, 2)
    }
  })
);

export default function VideoManager() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Video Manager
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <GridList cols={3}>
          <GridListTile>
            <VideoNormal />
          </GridListTile>
          <GridListTile>
            <VideoNormal />
          </GridListTile>
          <GridListTile>
            <VideoNormal />
          </GridListTile>
          <GridListTile>
            <VideoNormal />
          </GridListTile>
        </GridList>
      </Box>
    </Box>
  );
}
