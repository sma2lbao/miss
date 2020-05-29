import * as React from "react";
import { Typography, Box, Link, Grow } from "@material-ui/core";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { GridList, GridListTile } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
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
  console.log(data?.recommend_movies);
  const movies = data?.recommend_movies || [1, 2, 3, 4, 5, 6];

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
