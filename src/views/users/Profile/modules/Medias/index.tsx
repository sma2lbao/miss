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
import { useUserShadowsPaginatedQuery } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";
import { ProfileContext } from "../..";

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
  const [, [, setTopShadow]] = React.useContext(ProfileContext);
  const { data, loading, error, fetchMore } = useUserShadowsPaginatedQuery({
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
          before: data?.user_shadows_paginated?.pageInfo?.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.user_shadows_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.user_shadows_paginated;
          return {
            user_shadows_paginated: {
              pageInfo,
              totalCount,
              edges: [
                ...previousQueryResult.user_shadows_paginated.edges,
                ...edges
              ],
              __typename: previousQueryResult.user_shadows_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  React.useEffect(() => {
    if (data?.user_shadows_paginated.edges?.length) {
      setTopShadow(data.user_shadows_paginated.edges[0].node);
    }
  }, [data, setTopShadow]);

  return (
    <Box>
      {data?.user_shadows_paginated.totalCount ? (
        <>
          <GridList cellHeight="auto" cols={4}>
            {data.user_shadows_paginated.edges?.map(item => {
              return (
                <GridListTile key={item.cursor} cols={1} rows={1}>
                  <MediaOwn {...item.node} />
                </GridListTile>
              );
            })}
          </GridList>
          {data?.user_shadows_paginated?.pageInfo?.hasNextPage && (
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
        <SpecialBox
          loading={loading}
          error={!!error}
          placeholder
          placeholderTitle="暂未上传视频"
        />
      )}
    </Box>
  );
};

export default Medias;
