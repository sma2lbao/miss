import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import { Box } from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";
// import Image from "@/components/Image";
import { NextPlay, VideoInfo, Comment } from "./modules";
import { useParams } from "react-router";
import { useMovieQuery } from "@/schema";

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
    videoRoot: {
      width: "100%",
      paddingTop: "calc(56.25%)",
      position: "relative"
    },
    video: {
      width: "100% !important",
      height: "100% !important",
      position: "absolute",
      top: 0,
      left: 0
    },
    content: {
      padding: theme.spacing(2, 5),
      borderRight: `1px solid ${theme.palette.divider}`
    },
    aider: {
      padding: theme.spacing(2, 4),
      height: "100%",
      overflow: "auto"
    }
  })
);

export default function MoviePlay() {
  const classes = useStyles();
  const { id } = useParams();
  let { data } = useMovieQuery({
    variables: {
      id: id
    }
  });
  console.log(data?.movie);

  return (
    <Box className={classes.root}>
      <FullScreen>
        {/* <Image aspectRatio={16 / 9} /> */}
        <div className={classes.videoRoot}>
          <ReactPlayer
            className={classes.video}
            // url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            // playing
          />
        </div>
      </FullScreen>
      <BodyScreen className={classes.body}>
        <ContentScreen className={classes.content}>
          <VideoInfo />
          <NextPlay />
        </ContentScreen>
        <AiderScreen sticky className={classes.aider}>
          <Comment />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
}
