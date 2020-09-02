import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tab, Box, Tabs } from "@material-ui/core";
import { MovieMain, Relative, Cast, About, Top } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import { useMovieQuery, MovieQuery } from "@/schema";
import { useParams } from "react-router";
import { SpecialBox } from "@/components/public/SpecialBox";

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
  INFO = 0,
  RELATIVE = 1,
  ABOUT = 2
}

export default function Movie() {
  const { id } = useParams();
  const { data, error, loading } = useMovieQuery({
    variables: {
      id: id
    }
  });

  const classes = useStyles();
  const [tab, setTab] = React.useState(TabStatus.INFO);

  return (
    <Box>
      {data?.movie ? (
        <MovieContext.Provider value={data}>
          <FullScreen>
            <BodyScreen>
              <Top />
            </BodyScreen>
          </FullScreen>
          <BodyScreen>
            <ContentScreen className={classes.main}>
              <Tabs value={tab} onChange={(_, val) => setTab(val)}>
                <Tab label="信息"></Tab>
                <Tab label="相关推荐"></Tab>
                <Tab label="关于"></Tab>
              </Tabs>
              <div className={classes.content}>
                <div hidden={tab !== TabStatus.INFO}>
                  <MovieMain />
                </div>
                <div hidden={tab !== TabStatus.RELATIVE}>
                  <Relative />
                </div>
                <div hidden={tab !== TabStatus.ABOUT}>
                  <About html={data?.movie?.description || ""} />
                </div>
                {/* <TabContext value={tab}>
                  <TabPanel value={TabStatus.INFO}>
                    <MovieMain />
                  </TabPanel>
                  <TabPanel value={TabStatus.RELATIVE}>
                    <Relative />
                  </TabPanel>
                  <TabPanel value={TabStatus.ABOUT}>
                    <About html={data?.movie?.description || ""} />
                  </TabPanel>
                </TabContext> */}
              </div>
            </ContentScreen>
            <AiderScreen className={classes.aider}>
              <Cast />
            </AiderScreen>
          </BodyScreen>
        </MovieContext.Provider>
      ) : (
        <SpecialBox error={!!error} loading={loading} />
      )}
    </Box>
  );
}
