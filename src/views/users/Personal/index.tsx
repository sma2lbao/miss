import * as React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BasicSetting, VideoManager, Playlist } from "./modules";
import { BodyScreen, FullScreen } from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      flexDirection: "column"
    }
  })
);

export default function Personal() {
  const classes = useStyles();
  return (
    <FullScreen>
      <BodyScreen className={classes.body}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <BasicSetting />
          </Grid>
          <Grid item xs={5}>
            <BasicSetting />
          </Grid>
          <Grid item xs={3}>
            <BasicSetting />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <VideoManager />
          </Grid>
          <Grid item xs={5}>
            <Playlist />
          </Grid>
        </Grid>
      </BodyScreen>
    </FullScreen>
  );
}
