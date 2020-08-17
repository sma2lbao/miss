import React from "react";
import { Box, Typography, GridList, GridListTile } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MediaNormal } from "@/components/app/MediaCard";
// import Placeholder from "@/components/base/Placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0)
    },
    box: {
      padding: theme.spacing(2, 0),

      "& + &": {
        borderTop: `1px solid ${theme.palette.divider}`
      }
    }
  })
);

export const EditMovieMain: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.box}>
        <Typography variant="subtitle1" gutterBottom>
          相关资源
        </Typography>
        <GridList cellHeight="auto" cols={4}>
          <GridListTile cols={1}>
            <MediaNormal />
          </GridListTile>
        </GridList>
      </Box>
      {/* <Box className={classes.box}>
        <Typography variant="subtitle1">精彩点评</Typography>
      </Box> */}
    </Box>
  );
};
