import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tab, Box } from "@material-ui/core";
import { MovieMain, Relative, Cast, About, Top } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import { useMovieQuery, MovieQuery } from "@/schema";
import { useParams } from "react-router";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export const MovieContext = React.createContext<MovieQuery | undefined>(
  undefined
);

enum TabStatus {
  INFO = "info",
  RELATIVE = "relative",
  ABOUT = "about"
}

export default function Movie() {
  const { id } = useParams();
  const { data } = useMovieQuery({
    variables: {
      id: id
    }
  });

  const classes = useStyles();
  const [tab, setTab] = React.useState(TabStatus.INFO);

  return (
    <Box>
      <MovieContext.Provider value={data}>
        <FullScreen>
          <BodyScreen>
            <Top />
          </BodyScreen>
        </FullScreen>
        <BodyScreen>
          <ContentScreen className={classes.main}>
            <TabList onChange={(_, val) => setTab(val)}>
              <Tab value={TabStatus.INFO} label="信息"></Tab>
              <Tab value={TabStatus.RELATIVE} label="相关推荐"></Tab>
              <Tab value={TabStatus.ABOUT} label="关于"></Tab>
            </TabList>
            <div className={classes.content}>
              <TabContext value={tab}>
                <TabPanel value={TabStatus.INFO}>
                  <MovieMain />
                </TabPanel>
                <TabPanel value={TabStatus.RELATIVE}>
                  <Relative />
                </TabPanel>
                <TabPanel value={TabStatus.ABOUT}>
                  <About html={data?.movie?.description || ""} />
                </TabPanel>
              </TabContext>
            </div>
          </ContentScreen>
          <AiderScreen className={classes.aider}>
            <Cast />
          </AiderScreen>
        </BodyScreen>
      </MovieContext.Provider>
    </Box>
  );
}
