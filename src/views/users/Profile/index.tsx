import * as React from "react";
import Top from "./modules/Top";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Divider, Box } from "@material-ui/core";
import { Medias, Basic } from "./modules";
import { BodyScreen, ContentScreen, AiderScreen } from "@/layouts/PageLayout";
import { useParams } from "react-router-dom";

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

export default function Profile() {
  const classes = useStyles();
  const { username } = useParams();
  console.log(username);
  const [tab, setTab] = React.useState(0);

  return (
    <BodyScreen>
      <AiderScreen className={classes.aider}>
        <Basic />
      </AiderScreen>
      <ContentScreen className={classes.content}>
        <Top />
        <Divider />
        <div>
          <Tabs value={tab} onChange={(e, value) => setTab(value)}>
            <Tab label="视频"></Tab>
            <Tab label="列表"></Tab>
            <Tab label="社区"></Tab>
          </Tabs>
          <Box py={2}>{tab === 0 && <Medias />}</Box>
        </div>
      </ContentScreen>
    </BodyScreen>
  );
}
