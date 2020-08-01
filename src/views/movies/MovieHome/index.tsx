import * as React from "react";
import { VideoWithAuthor } from "@/components/app/VideoCard";
import { ContentScreen, AiderScreen, BodyScreen } from "@/layouts/PageLayout";
import { Filter, Sort } from "./modules";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Box,
  Fab,
  useScrollTrigger,
  Zoom,
  Button,
  Typography
} from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";
import { useMoviesPaginatedQuery } from "@/schema";

interface Props {
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: "0 auto",
      padding: theme.spacing(2),
      background: theme.palette.background.paper
    },
    gridRoot: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: theme.spacing(1, 1),
      gridAutoFlow: "row dense"
    },
    gridCard: {
      gridRow: "1 span",
      gridColumn: "1 span"
    },
    footer: {
      padding: theme.spacing(2),
      textAlign: "center"
    },
    scollButton: {
      position: "fixed",
      right: theme.spacing(2),
      bottom: theme.spacing(2)
    }
  })
);

export default function MovieHome(props: Props) {
  const { data, loading, fetchMore } = useMoviesPaginatedQuery({
    variables: {
      query: {
        first: 16
      }
    }
  });
  const loadMore = () => {
    fetchMore({
      variables: {
        query: {
          last: 8,
          after: data?.movies_paginated?.pageInfo?.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.movies_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.movies_paginated;
          return {
            movies_paginated: {
              pageInfo,
              totalCount,
              edges: [...previousQueryResult.movies_paginated.edges, ...edges],
              __typename: previousQueryResult.movies_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  const classes = useStyles();
  const { window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 500
  });

  return (
    <BodyScreen>
      <ContentScreen className={classes.content}>
        <Box className={classes.gridRoot}>
          {data?.movies_paginated?.edges?.map((edge: any) => {
            return (
              <div key={edge.cursor} className={classes.gridCard}>
                <VideoWithAuthor {...edge.node} />
              </div>
            );
          })}
        </Box>
        {data?.movies_paginated?.pageInfo?.hasNextPage && (
          <Box className={classes.footer}>
            <Button onClick={loadMore} disabled={loading}>
              <Typography color="textSecondary" variant="caption">
                {loading ? "加载中..." : "加载更多"}
              </Typography>
            </Button>
          </Box>
        )}
      </ContentScreen>
      <AiderScreen sticky>
        <Sort />
        <Filter />
      </AiderScreen>
      <Zoom in={trigger}>
        <Fab size="small" className={classes.scollButton}>
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </BodyScreen>
  );
}
