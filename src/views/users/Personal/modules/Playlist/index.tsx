import * as React from "react";
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { usePlaylistsPaginatedQuery } from "@/schema";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius
    },
    title: {
      padding: theme.spacing(1.5, 2)
    },
    content: {
      padding: theme.spacing(1.5, 2)
    }
  })
);

export default function Playlist() {
  const { data, fetchMore } = usePlaylistsPaginatedQuery({
    variables: {
      query: {
        first: 8
      }
    }
  });
  const loadMore = () => {
    fetchMore({
      variables: {
        query: {
          last: 8,
          after: data?.playlists_paginated?.pageInfo?.endCursor
        }
      },
      updateQuery: (previousQueryResult, { fetchMoreResult }) => {
        if (fetchMoreResult?.playlists_paginated?.edges) {
          const {
            edges,
            pageInfo,
            totalCount
          } = fetchMoreResult.playlists_paginated;
          return {
            playlists_paginated: {
              pageInfo,
              totalCount,
              edges: [
                ...previousQueryResult.playlists_paginated.edges,
                ...edges
              ],
              __typename: previousQueryResult.playlists_paginated.__typename
            }
          };
        }
        return previousQueryResult;
      }
    });
  };

  const classes = useStyles();

  console.log(loadMore);

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Video Manager
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PlayCircleFilledIcon />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
              // secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
