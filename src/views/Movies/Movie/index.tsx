import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";
import Image from "@/components/base/Image";
import { MovieMain, Relative, Cast, About } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

const MOVIE = gql`
  query($id: Int!) {
    movie(id: $id) {
      title
      cover
      posters
      actors
      description
      author {
        nickname
        avatar
      }
    }
  }
`;

export default function Movie() {
  const { data, error } = useQuery(MOVIE, {
    variables: {
      id: 1
    }
  });
  console.log(data, error);

  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <Box>
      <FullScreen>
        <Image
          aspectRatio={16 / 9}
          src={data && data.movie && data.movie.cover}
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
            {tab === 2 && (
              <About html={data && data.movie && data.movie.description} />
            )}
          </div>
        </ContentScreen>
        <AiderScreen className={classes.aider}>
          <Cast />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
}
