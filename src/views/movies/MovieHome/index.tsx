import * as React from "react";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import { ContentScreen, AiderScreen, BodyScreen } from "@/layouts/PageLayout";
import { Filter, Sort } from "./modules";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Fab, useScrollTrigger, Zoom } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { useMoviesPaginatedQuery } from "@/schema";

interface Props {
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: "0 auto",
      padding: theme.spacing(2),
      background: theme.palette.background.paper
    },
    filterFull: {
      background: theme.palette.background.paper,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    gridRoot: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: theme.spacing(1, 1),
      gridAutoFlow: "row dense"
    },
    gridCardMain: {
      gridRow: "2 span",
      gridColumn: "2 span"
    },
    scollButton: {
      position: "fixed",
      right: theme.spacing(2),
      bottom: theme.spacing(2)
    }
  })
);

export default function MovieHome(props: Props) {
  const { data } = useMoviesPaginatedQuery();
  const classes = useStyles();
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 500
  });

  return (
    <BodyScreen>
      <ContentScreen className={classes.content}>
        <Box className={classes.gridRoot}>
          <div className={classes.gridCardMain}>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          {/* <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div>
          <div>
            <VideoWithAuthor />
          </div> */}
        </Box>
      </ContentScreen>
      <AiderScreen sticky>
        <Sort />
        <Filter />
      </AiderScreen>
      <Zoom in={trigger}>
        <Fab size="small" className={classes.scollButton}>
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </BodyScreen>
  );
}
