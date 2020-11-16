import * as React from "react";
import { useParams } from "react-router-dom";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";
import {
  Box,
  GridList,
  GridListTile,
  Button,
  Typography,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";
import { MediaNormal } from "@/components/app/Media";
import { SpecialBox } from "@/components/public/SpecialBox";
import {
  useSearchShadowsPaginatedQuery,
  SearchShadowsPaginatedQuery
} from "@/schema";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: "0 auto",
      padding: theme.spacing(8),
      background: theme.palette.background.paper
    },
    aider: {
      backgroundColor: "#fff",
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

export const Search: React.FC = () => {
  const { word } = useParams();
  const RouterHelper = useRouterHelper();
  const classes = useStyles();
  const { data, loading, error, fetchMore } = useSearchShadowsPaginatedQuery({
    variables: {
      query: {
        last: 16
      },
      word: word
    }
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        query: {
          last: 8,
          before: data?.search_shadows_paginated?.pageInfo?.endCursor
        },
        word: word
      },
      updateQuery: (
        previousQueryResult: SearchShadowsPaginatedQuery,
        { fetchMoreResult }
      ) => {
        if (fetchMoreResult?.search_shadows_paginated.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.search_shadows_paginated;
          return {
            search_shadows_paginated: {
              pageInfo,
              totalCount,
              edges: [
                ...previousQueryResult.search_shadows_paginated.edges,
                ...edges
              ],
              __typename:
                previousQueryResult.search_shadows_paginated.__typename
            }
          };
        }

        return previousQueryResult;
      }
    });
  };

  return (
    <FullScreen>
      <BodyScreen>
        <ContentScreen className={classes.content}>
          {data?.search_shadows_paginated?.edges?.length ? (
            <Box className={classes.gridRoot}>
              {data?.search_shadows_paginated?.edges?.map((edge: any) => {
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
              placeholderTitle="暂无搜索结果"
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

          {data?.search_shadows_paginated?.pageInfo?.hasNextPage && (
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
          {/* <Sort /> */}
          {/* <Filter /> */}
        </AiderScreen>
      </BodyScreen>
    </FullScreen>
  );
};

export default Search;
