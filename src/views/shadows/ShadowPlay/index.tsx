import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ShadowPlayer } from "@/components/app/Player";
import { Box, Collapse } from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";
// import Image from "@/components/Image";
import { NextPlay, VideoInfo, Comment } from "./modules";
import { useParams, useLocation } from "react-router";
import { useShadowQuery, ShadowQuery, ShadowMedium } from "@/schema";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import { Alert } from "@material-ui/lab";
import { Helmet } from "react-helmet";

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
  const location = useLocation();

  const [notice, setNotice] = React.useState(true);

  const { medium_id } = (location.state as any) || {
    medium_id: undefined
  };
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
      const playShadowMedium = data.shadow.sources.find(
        item => +item.id === +medium_id
      );
      setShadowMedium(playShadowMedium || data.shadow.sources[0]);
    }
  }, [data, medium_id]);

  return (
    <Box className={classes.root}>
      <Helmet>
        <title>{data?.shadow.title}</title>
      </Helmet>
      <ShadowPlayContext.Provider value={[data, shadowMedium]}>
        <FullScreen>
          <BodyScreen>
            <Collapse in={notice} style={{ width: "100%" }}>
              <Alert severity="warning" onClose={() => setNotice(false)}>
                {/* <AlertTitle>重要消息</AlertTitle> */}
                服务器配置低，请耐心等待加载...
              </Alert>
            </Collapse>
          </BodyScreen>
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
