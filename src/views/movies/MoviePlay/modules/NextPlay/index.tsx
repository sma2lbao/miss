import * as React from "react";
import { MediaNormal } from "@/components/app/Media";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import { useMovieNextUrgesByMovieQuery } from "@/schema";
import { useParams } from "react-router-dom";
import Placeholder from "@/components/base/Placeholder";

export default function NextPlay() {
  const { id } = useParams();
  const { data, error, loading } = useMovieNextUrgesByMovieQuery({
    variables: {
      movie_id: id
    }
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <Box py={2}>
      <Typography variant="subtitle1" gutterBottom>
        接下来播放
      </Typography>
      {data?.movie_next_urges_by_movie.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data.movie_next_urges_by_movie.map((item, idx) => {
            return (
              <GridListTile cols={1} key={idx}>
                <MediaNormal />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <div>
          <Placeholder title="暂无可播放资源" />
        </div>
      )}
    </Box>
  );
}
