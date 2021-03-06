import * as React from "react";
import { MediaNormal } from "@/components/app/Media";
import {
  ContentScreen,
  AiderScreen,
  BodyScreen,
  FullScreen
} from "@/layouts/PageLayout";
import { Filter, Sort } from "./modules";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Box,
  // Fab,
  // useScrollTrigger,
  // Zoom,
  Button,
  Typography,
  GridList,
  GridListTile
} from "@material-ui/core";
// import { KeyboardArrowUp } from "@material-ui/icons";
import { useShadowsPaginatedQuery } from "@/schema";
import { useRouterHelper } from "@/hooks";
import { SpecialBox } from "@/components/public/SpecialBox";

interface Props {
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: "0 auto",
      padding: theme.spacing(8),
      background: theme.palette.background.paper
    },
    aider: {
      backgroundColor: theme.palette.background.paper,
      width: "100%",
      padding: theme.spacing(2, 2),
      borderLeft: "1px solid",
      borderColor: theme.palette.divider
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

export default function ShadowHome(props: Props) {
  const RouterHelper = useRouterHelper();
  const { data, loading, error, fetchMore } = useShadowsPaginatedQuery({
    variables: {
      query: {
        last: 16
      }
    }
  });
  const loadMore = () => {
    fetchMore({
      variables: {
        query: {
          last: 8,
          before: data?.shadows_paginated?.pageInfo?.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.shadows_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.shadows_paginated;
          return {
            shadows_paginated: {
              pageInfo,
              totalCount,
              edges: [...previousQueryResult.shadows_paginated.edges, ...edges],
              __typename: previousQueryResult.shadows_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  const classes = useStyles();
  // const { window } = props;
  // const trigger = useScrollTrigger({
  //   target: window ? window() : undefined,
  //   disableHysteresis: true,
  //   threshold: 500,
  // });

  return (
    <FullScreen>
      <BodyScreen>
        <ContentScreen className={classes.content}>
          {data?.shadows_paginated?.edges?.length ? (
            <Box className={classes.gridRoot}>
              {data?.shadows_paginated?.edges?.map((edge: any) => {
                return (
                  <div key={edge.cursor} className={classes.gridCard}>
                    <MediaNormal
                      {...edge.node}
                      onClickRoot={() => RouterHelper.gotoShadow(edge.node.id)}
                      onClickAuthor={() =>
                        RouterHelper.gotoProfile(edge.node.author.username)
                      }
                    />
                  </div>
                );
              })}
            </Box>
          ) : (
            <SpecialBox
              loading={loading}
              error={!!error}
              placeholder
              placeholderTitle="暂无结果"
              loadingNode={
                <GridList cellHeight="auto" cols={4}>
                  {[0, 0, 0, 0, 0, 0, 0, 0].map((_, index: number) => {
                    return (
                      <GridListTile key={index} cols={1}>
                        <MediaNormal loading />
                      </GridListTile>
                    );
                  })}
                </GridList>
              }
            />
          )}

          {data?.shadows_paginated?.pageInfo?.hasNextPage && (
            <Box className={classes.footer}>
              <Button onClick={loadMore} disabled={loading}>
                <Typography color="textSecondary" variant="caption">
                  {loading ? "加载中..." : "加载更多"}
                </Typography>
              </Button>
            </Box>
          )}
        </ContentScreen>
        <AiderScreen sticky className={classes.aider}>
          <Sort />
          <Filter />
        </AiderScreen>

        {/* <Zoom in={trigger}>
          <Fab size="small" className={classes.scollButton}>
            <KeyboardArrowUp />
          </Fab>
        </Zoom> */}
      </BodyScreen>
    </FullScreen>
  );
}
