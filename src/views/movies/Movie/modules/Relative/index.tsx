import * as React from "react";
import { MediaNormal } from "@/components/app/Media";
import { Box, GridListTile, GridList, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useMovieUrgesByMovieQuery } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0)
    }
  })
);

export default function Relative() {
  const classes = useStyles();
  const { id } = useParams();
  const { data, error, loading } = useMovieUrgesByMovieQuery({
    variables: {
      movie_id: id
    }
  });

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1" gutterBottom>
        喜欢该视频的也喜欢
      </Typography>
      {data?.movie_urges_by_movie?.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data?.movie_urges_by_movie.map((movie, idx) => {
            return (
              <GridListTile key={idx}>
                <MediaNormal {...movie} />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <div>
          <SpecialBox
            loading={loading}
            error={!!error}
            placeholderTitle="暂无相关推荐"
          />
        </div>
      )}
    </Box>
  );
}
