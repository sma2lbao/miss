import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";
import Image from "@/components/Image";
import MovieMain from "./components/MovieMain";
import About from "./components/About";
import Relative from "./components/Relative";
import Cast from "./components/Cast";
import PageLayout, {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: "flex",
      margin: "0 auto"
    },
    main: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1, 6),
      borderRight: `1px solid ${theme.palette.divider}`,
      flex: 4
    },
    aider: {
      flex: 1
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
      <BodyScreen className={classes.body}>
        <ContentScreen className={classes.main}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="信息"></Tab>
            <Tab label="相关推荐"></Tab>
            <Tab label="关于"></Tab>
          </Tabs>
          <div className={classes.content}>
            {tab === 0 && <MovieMain />}
            {tab === 1 && <Relative />}
            {tab === 2 && <About />}
          </div>
        </ContentScreen>
        <AiderScreen className={classes.aider}>
          <Cast />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
}
