import React from "react";
import { Box, Typography, GridList, GridListTile } from "@material-ui/core";
// import { Rating } from "@material-ui/lab";
// import { Favorite } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MediaNormal } from "@/components/app/MediaCard";
import { MovieContext } from "../..";
import Placeholder from "@/components/base/Placeholder";

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

export default function MovieMain() {
  const classes = useStyles();
  const movieQuery = React.useContext(MovieContext);

  return (
    <Box className={classes.root}>
      {/* <Box className={classes.box}>
        <Typography variant="subtitle1" gutterBottom>
          平均评分
        </Typography>
        <Rating
          readOnly
          value={2}
          precision={0.5}
          icon={<Favorite fontSize="inherit" />}
        />
      </Box> */}
      <Box className={classes.box}>
        <Typography variant="subtitle1" gutterBottom>
          相关资源
        </Typography>
        {movieQuery?.movie.sources.length ? (
          <GridList cellHeight="auto" cols={4}>
            {movieQuery.movie.sources.map((source, idx) => {
              return (
                <GridListTile cols={1}>
                  <MediaNormal />
                </GridListTile>
              );
            })}
          </GridList>
        ) : (
          <div>
            <Placeholder title="暂无相关资源" />
          </div>
        )}
      </Box>
      <Box className={classes.box}>
        <Typography variant="subtitle1">精彩点评</Typography>
      </Box>
    </Box>
  );
}
