import * as React from "react";
import { EditAbout, EditCast, EditMovieMain, EditTop } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Tabs,
  Tab
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1, 6),
      borderRight: `1px solid ${theme.palette.divider}`
    }
  })
);

export const MovieUpload: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const topRef = React.createRef();
  const mainRef = React.createRef();
  const aboutRef = React.createRef();
  const castRef = React.createRef();

  return (
    <Box>
      <FullScreen>
        <BodyScreen>
          <EditTop ref={topRef} />
        </BodyScreen>
      </FullScreen>
      <BodyScreen>
        <ContentScreen className={classes.main}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="信息"></Tab>
            <Tab label="相关推荐" disabled></Tab>
            <Tab label="关于"></Tab>
          </Tabs>
          <div>
            <div hidden={tab !== 0}>
              <EditMovieMain ref={mainRef} />
            </div>
            {/* {tab === 1 && <Relative />} */}
            <div hidden={tab !== 2}>
              <EditAbout ref={aboutRef} />
            </div>
          </div>
        </ContentScreen>
        <AiderScreen>
          <EditCast ref={castRef} />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
};
export default MovieUpload;
