import * as React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useReviewsPaginatedQuery, ReviewMedium } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: theme.spacing(2, 0),
      "& + &": {
        borderTop: `1px solid ${theme.palette.divider}`
      }
    },
    commentTitle: {
      padding: theme.spacing(1, 0)
    }
  })
);

export default function Comment() {
  const classes = useStyles();
  const { id } = useParams();
  const { data, loading, fetchMore, error } = useReviewsPaginatedQuery({
    variables: {
      query: {
        last: 16
      },
      type: ReviewMedium.Medium,
      type_id: id
    }
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        type: ReviewMedium.Medium,
        type_id: id,
        query: {
          last: 8,
          after: data?.reviews_paginated.pageInfo.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        // if (fetchMoreResult?.reviews_paginated?.edges) {
        //   const {
        //     edges,
        //     pageInfo,
        //     totalCount,
        //   } = fetchMoreResult.reviews_paginated;
        //   return {
        //     shadows_paginated: {
        //       pageInfo,
        //       totalCount,
        //       edges: [...previousQueryResult.reviews_paginated.edges, ...edges],
        //       __typename: previousQueryResult.reviews_paginated.__typename,
        //     },
        //   };
        // }
        return previousQueryResult;
      }
    });
  };

  return (
    <Box>
      <AddComment />
      <Typography variant="subtitle2" className={classes.commentTitle}>
        {/* 评论 */}
      </Typography>
      <div>
        {data?.reviews_paginated?.edges?.length ? (
          <div>
            {data?.reviews_paginated?.edges?.map((edge: any) => {
              return (
                <div key={edge.cursor}>
                  <CommentItem />
                </div>
              );
            })}
            {data?.reviews_paginated?.pageInfo?.hasNextPage && (
              <Button onClick={loadMore} disabled={loading}>
                <Typography color="textSecondary" variant="caption">
                  {loading ? "加载中..." : "加载更多"}
                </Typography>
              </Button>
            )}
          </div>
        ) : (
          <SpecialBox error={!!error} loading={loading} placeholder />
        )}
      </div>
    </Box>
  );
}
