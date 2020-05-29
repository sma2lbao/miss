import * as React from "react";
import {
  Box
  // Typography,
  // Link,
  // GridList,
  // GridListTile,
  // Divider
} from "@material-ui/core";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import {
  ContentScreen,
  // AiderScreen,
  FullScreen
  // BodyScreen,
} from "@/layouts/PageLayout";
import { Filter, Sort } from "./modules";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

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
    }
  })
);

export default function MovieHome() {
  const classes = useStyles();

  return (
    <Box padding={0}>
      <FullScreen className={classes.filterFull}>
        <ContentScreen width={1200}>
          <Sort />
          <Filter />
        </ContentScreen>
      </FullScreen>

      <ContentScreen className={classes.content}>
        <div className={classes.gridRoot}>
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
        </div>
        {/* <GridList cellHeight="auto" cols={4}>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
          <GridListTile>
            <VideoWithAuthor />
          </GridListTile>
        </GridList> */}
      </ContentScreen>
    </Box>
  );
}
