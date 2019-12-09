import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";
import Image from "@/components/Image";
import About from "./components/About";
import Cast from "./components/Cast";
import Relative from "./components/Relative";
import PageLayout, {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    poster: {
      width: "100%"
    },
    main: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper
    },
    content: {
      flex: 1
    }
  })
);

export default function Movie() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <Box>
      <FullScreen>
        <Image
          aspectRatio={16 / 9}
          src="http://img02.tooopen.com/images/20151202/tooopen_sy_150140545166.jpg"
        />
      </FullScreen>
      <BodyScreen>
        <ContentScreen className={classes.main}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="Movie"></Tab>
            <Tab label="Related Videos"></Tab>
            <Tab label="About"></Tab>
          </Tabs>
          <div className={classes.content}>
            {tab === 0 && <Relative />}
            {tab === 1 && <Relative />}
            {tab === 2 && <About />}
          </div>
        </ContentScreen>
        {/* <AiderScreen>
          <Cast />
        </AiderScreen> */}
      </BodyScreen>
    </Box>
  );
}
