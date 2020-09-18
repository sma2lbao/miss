import * as React from "react";
import {
  Box,
  GridList,
  GridListTile,
  Button,
  Typography,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { MediaOwn } from "@/components/app/Media";
import { useUserMoviesPaginatedQuery } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(2),
      textAlign: "center"
    }
  })
);

export const Medias: React.FC = () => {
  const classes = useStyles();
  const { username } = useParams();
  const { data, loading, error, fetchMore } = useUserMoviesPaginatedQuery({
    variables: {
      query: {
        last: 8
      },
      author_username: username
    }
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        query: {
          last: 8,
          after: data?.user_movies_paginated?.pageInfo?.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.user_movies_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.user_movies_paginated;
          return {
            user_movies_paginated: {
              pageInfo,
              totalCount,
              edges: [
                ...previousQueryResult.user_movies_paginated.edges,
                ...edges
              ],
              __typename: previousQueryResult.user_movies_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  return (
    <Box>
      {data?.user_movies_paginated.totalCount ? (
        <>
          <GridList cellHeight="auto" cols={4}>
            {data.user_movies_paginated.edges?.map(item => {
              return (
                <GridListTile key={item.cursor} cols={1} rows={1}>
                  <MediaOwn {...item.node} />
                </GridListTile>
              );
            })}
          </GridList>
          {data?.user_movies_paginated?.pageInfo?.hasNextPage && (
            <Box className={classes.footer}>
              <Button onClick={loadMore} disabled={loading}>
                <Typography color="textSecondary" variant="caption">
                  {loading ? "加载中..." : "加载更多"}
                </Typography>
              </Button>
            </Box>
          )}
        </>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </Box>
  );
};

export default Medias;
