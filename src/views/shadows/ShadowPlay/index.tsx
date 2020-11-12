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
import { useShadowQuery, ShadowQuery, ShadowMedium } from "@/schema";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";

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

export const ShadowPlayContext = React.createContext<
  [ShadowQuery | undefined, ShadowMedium | undefined]
>([undefined, undefined]);

export default function ShadowPlay() {
  const classes = useStyles();
  const { id } = useParams();
  const [shadowMedium, setShadowMedium] = React.useState<
    ShadowMedium | undefined
  >();
  let { data } = useShadowQuery({
    variables: {
      id: id
    }
  });

  React.useEffect(() => {
    if (data?.shadow?.sources?.length) {
      setShadowMedium(data.shadow.sources[0]);
    }
  }, [data]);

  return (
    <Box className={classes.root}>
      <ShadowPlayContext.Provider value={[data, shadowMedium]}>
        <FullScreen>
          <BodyScreen>
            <ShadowPlayer
              controls
              playing
              url={shadowMedium?.url}
              light={
                shadowMedium?.cover ? shadowMedium?.cover : DEFULAT_SHADOW_COVER
              }
            />
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
