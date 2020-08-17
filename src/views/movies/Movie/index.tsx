import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";
import { MovieMain, Relative, Cast, About, Top } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import { useMovieQuery, MovieQuery } from "@/schema";
import { useParams } from "react-router";

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

export default function Movie() {
  const { id } = useParams();
  const { data } = useMovieQuery({
    variables: {
      id: id
    }
  });

  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

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
            <Tabs value={tab} onChange={(e, val) => setTab(val)}>
              <Tab label="信息"></Tab>
              <Tab label="相关推荐"></Tab>
              <Tab label="关于"></Tab>
            </Tabs>
            <div className={classes.content}>
              {tab === 0 && <MovieMain />}
              {tab === 1 && <Relative />}
              {tab === 2 && <About html={data?.movie?.description || ""} />}
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
