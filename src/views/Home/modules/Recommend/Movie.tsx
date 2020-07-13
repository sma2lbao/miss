import * as React from "react";
import { Typography, Box, Link, Grow } from "@material-ui/core";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import { GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useMovieUrgesQuery } from "@/schema";

export default function MovieRecommend() {
  const { data } = useMovieUrgesQuery();
  console.log(data?.movie_urges);
  const movies = data?.movie_urges;

  return (
    <Box padding={0}>
      <Box
        paddingY={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography component="span" variant="h6">
          {/* 电影推荐 */}
          <Skeleton animation="wave" height="100%" width={160} />
        </Typography>
        <Link href="" color="textSecondary" variant="caption">
          {/* 更多 */}
          <Skeleton animation="wave" height="100%" width={50} />
        </Link>
      </Box>

      {movies && (
        <GridList cellHeight="auto" cols={4}>
          {movies.map((movie: any, index: number) => {
            return (
              <Grow key={index} in timeout={index * 800}>
                <GridListTile cols={movie.cols || 1}>
                  <VideoWithAuthor key={index} {...movie} />
                </GridListTile>
              </Grow>
            );
          })}
        </GridList>
      )}
    </Box>
  );
}
