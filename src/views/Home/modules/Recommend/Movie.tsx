import * as React from "react";
import { Typography, Box, Link, Grow } from "@material-ui/core";
import { MediaNormal } from "@/components/app/Media";
import { GridList, GridListTile } from "@material-ui/core";
import { useMovieUrgesQuery } from "@/schema";
import { useRouterHelper } from "@/hooks";
import { SpecialBox } from "@/components/public/SpecialBox";

export default function MovieRecommend() {
  const RouterHelper = useRouterHelper();
  const { data, loading, error } = useMovieUrgesQuery();

  return (
    <Box padding={0}>
      <Box
        paddingY={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography component="span" variant="h6">
          电影推荐
        </Typography>
        <Link
          onClick={RouterHelper.gotoMovieHome}
          color="textSecondary"
          variant="caption"
        >
          更多
        </Link>
      </Box>

      {data?.movie_urges.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data.movie_urges.map((movie: any, index: number) => {
            return (
              <Grow key={index} in timeout={index * 500}>
                <GridListTile cols={movie.cols || 1}>
                  <MediaNormal key={index} {...movie} />
                </GridListTile>
              </Grow>
            );
          })}
        </GridList>
      ) : (
        <SpecialBox
          loading={loading}
          error={!!error}
          loadingNode={() => {
            return (
              <GridList cellHeight="auto" cols={4}>
                {new Array(8).map((_, index: number) => {
                  return (
                    <GridListTile key={index} cols={1}>
                      <MediaNormal loading />
                    </GridListTile>
                  );
                })}
              </GridList>
            );
          }}
        />
      )}
    </Box>
  );
}
