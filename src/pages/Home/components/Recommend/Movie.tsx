import * as React from "react";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { VideoWithAuthor } from "@/components/VideoCard";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { GridList, GridListTile } from "@material-ui/core";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const RECOMMEND_MOVIES = gql`
  {
    recommend_movies {
      id
      title
      sub_title
      posters
      create_at
      author {
        username
        nickname
        avatar
      }
      sources {
        duration
      }
    }
  }
`;

export default function MovieRecommend() {
  const { data } = useQuery(RECOMMEND_MOVIES);

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
        <Link href="" color="textSecondary" variant="caption">
          更多
        </Link>
      </Box>

      {data && data.recommend_movies && data.recommend_movies.length > 0 && (
        <GridList cellHeight="auto" cols={4}>
          {data.recommend_movies.map((movie: any, index: number) => {
            return (
              <GridListTile key={index} cols={movie.cols || 1}>
                <VideoWithAuthor key={index} {...movie} />
              </GridListTile>
            );
          })}
        </GridList>
      )}
    </Box>
  );
}
