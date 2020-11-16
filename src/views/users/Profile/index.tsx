import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Divider, Box } from "@material-ui/core";
import { Medias, Basic, Playlists, Top } from "./modules";
import {
  BodyScreen,
  ContentScreen,
  AiderScreen,
  FullScreen
} from "@/layouts/PageLayout";
import { useParams } from "react-router-dom";
import { useUserQuery, UserQuery, Shadow } from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    aider: {
      background: "#333"
    },
    content: {
      padding: theme.spacing(6, 4)
    }
  })
);

export const ProfileContext = React.createContext<
  [
    UserQuery | undefined,
    [Shadow | undefined, React.Dispatch<Shadow | undefined>]
  ]
>([undefined, [undefined, () => {}]]);

export default function Profile() {
  const classes = useStyles();
  const { username } = useParams();
  const { data, loading, error } = useUserQuery({
    variables: {
      username
    }
  });
  const [topShadow, setTopShadow] = React.useState<Shadow | undefined>();
  const [tab, setTab] = React.useState(0);

  return (
    <FullScreen>
      <Helmet>
        <title>{data?.user.username || data?.user.nickname}的个人主页</title>
      </Helmet>
      {data?.user ? (
        <BodyScreen>
          <ProfileContext.Provider value={[data, [topShadow, setTopShadow]]}>
            <AiderScreen className={classes.aider}>
              <Basic />
            </AiderScreen>
            <ContentScreen className={classes.content}>
              <Top />
              <Divider />
              <div>
                <Tabs value={tab} onChange={(e, value) => setTab(value)}>
                  <Tab label="视频"></Tab>
                  <Tab label="列表" disabled></Tab>
                  {/* <Tab label="社区"></Tab> */}
                </Tabs>
                <Box py={2} hidden={tab !== 0}>
                  <Medias />
                </Box>
                <Box py={2} hidden={tab !== 1}>
                  <Playlists />
                </Box>
              </div>
            </ContentScreen>
          </ProfileContext.Provider>
        </BodyScreen>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </FullScreen>
  );
}
