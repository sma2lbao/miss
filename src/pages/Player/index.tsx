import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import VideoPlayer from "./components/VideoPlayer";
import NextPlay from "./components/NextPlay";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import { Box } from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    body: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      margin: "0 auto"
    },
    content: {
      padding: theme.spacing(2, 5),
      borderRight: `1px solid ${theme.palette.divider}`
    },
    aider: {
      padding: theme.spacing(2, 4)
    }
  })
);

export default function Player() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FullScreen>
        <VideoPlayer src="https://player.vimeo.com/external/188421287.sd.mp4?s=bdbf8a61c40502211971571fef384f52fe79dbbe&profile_id=164" />
      </FullScreen>
      <BodyScreen className={classes.body}>
        <ContentScreen className={classes.content}>
          <VideoInfo />
          <NextPlay />
        </ContentScreen>
        <AiderScreen className={classes.aider}>
          <Comment />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
}
