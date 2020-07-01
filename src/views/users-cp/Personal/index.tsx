import * as React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BasicSetting, VideoManager, Playlist } from "./modules";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: "1200px"
      // height: "222px",
      // backgroundColor: "#fff"
    },
    aider: {
      width: "430px",
      height: "100px",
      backgroundColor: "yellow"
    }
  })
);

export default function Personal() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
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
      </div>
    </div>
  );
}
