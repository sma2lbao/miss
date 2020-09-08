import * as React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { MediaNormal } from "@/components/app/Media";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {}
  })
);

export default function TvRecommend() {
  return (
    <Box padding={0}>
      <div>
        <Typography component="span" variant="h6">
          剧集推荐
        </Typography>
        <Typography
          component="span"
          variant="caption"
          color="textSecondary"
          style={{ marginLeft: "20px" }}
        >
          更多
        </Typography>
      </div>
      <Grid container justify="space-between">
        {/* <MediaNormal />
        <MediaNormal />
        <MediaNormal />
        <MediaNormal />
        <MediaNormal />
        <MediaNormal /> */}
      </Grid>
    </Box>
  );
}
