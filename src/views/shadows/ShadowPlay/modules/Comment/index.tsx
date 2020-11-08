import * as React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import CommentItem from "./CommentItem";
import AddComment from "./AddComment";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  useReviewsPaginatedQuery,
  ReviewMedium,
  useCreateReviewMutation,
  useReviewCreatedSubscription,
  ReviewsPaginatedDocument
} from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";
import { ShadowPlayContext } from "../..";

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
  const [, shadowMedium] = React.useContext(ShadowPlayContext);
  let type_id = shadowMedium ? +shadowMedium?.id : -1;
  const { data, loading, fetchMore, error } = useReviewsPaginatedQuery({
    variables: {
      query: {
        last: 16
      },
      type: ReviewMedium.Medium,
      type_id
    },
    skip: type_id === -1
  });

  useReviewCreatedSubscription({
    variables: {
      type: ReviewMedium.Medium,
      type_id
    },
    skip: type_id === -1,
    onSubscriptionData({ client, subscriptionData }) {
      const newItem = subscriptionData.data?.review_created;
      client.writeQuery({
        query: ReviewsPaginatedDocument,
        variables: {
          query: {
            last: 16
          },
          type: ReviewMedium.Medium,
          type_id
        },
        data: Object.assign({}, data, {
          reviews_paginated: {
            ...data?.reviews_paginated,
            edges: [
              { cursor: Date.now(), __typename: "ReviewEdge", node: newItem },
              ...data?.reviews_paginated.edges
            ]
          }
        })
      });
    }
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        type: ReviewMedium.Medium,
        type_id,
        query: {
          last: 8,
          before: data?.reviews_paginated.pageInfo.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.reviews_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.reviews_paginated;
          return {
            reviews_paginated: {
              pageInfo,
              totalCount,
              edges: [...previousQueryResult.reviews_paginated.edges, ...edges],
              __typename: previousQueryResult.reviews_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  const [applyComment] = useCreateReviewMutation();

  const handleSubmit = (text: string, callback: Function) => {
    applyComment({
      variables: {
        review: {
          content: text,
          type: ReviewMedium.Medium,
          type_id
        }
      }
    });
    callback();
  };

  return (
    <Box>
      <AddComment onSubmit={handleSubmit} />
      <Typography variant="subtitle2" className={classes.commentTitle}>
        {/* 评论 */}
      </Typography>
      <div>
        {data?.reviews_paginated?.edges?.length ? (
          <div>
            {data?.reviews_paginated?.edges?.map((edge: any, idx) => {
              return (
                <div key={idx}>
                  <CommentItem {...edge.node} />
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
