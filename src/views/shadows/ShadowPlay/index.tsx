import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ShadowPlayer } from "@/components/app/Player";
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
import { useShadowQuery, ShadowQuery } from "@/schema";

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
      padding: theme.spacing(2, 4),
      height: "100%",
      overflow: "auto"
    }
  })
);

export const ShadowPlayContext = React.createContext<ShadowQuery | undefined>(
  undefined
);

export default function ShadowPlay() {
  const classes = useStyles();
  const { id } = useParams();
  let { data } = useShadowQuery({
    variables: {
      id: id
    }
  });

  return (
    <Box className={classes.root}>
      <ShadowPlayContext.Provider value={data}>
        <FullScreen>
          <BodyScreen>
            <ShadowPlayer />
          </BodyScreen>
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
      </ShadowPlayContext.Provider>
    </Box>
  );
}
