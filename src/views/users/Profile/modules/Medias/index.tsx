import * as React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
import { MediaOwn } from "@/components/app/MediaCard";
import { useUserMoviesPaginatedQuery } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";

export const Medias: React.FC = () => {
  const { username } = useParams();
  const { data, loading, error } = useUserMoviesPaginatedQuery({
    variables: {
      query: {
        last: 10
      },
      author_username: username
    }
  });

  return (
    <Box>
      {data?.user_movies_paginated.totalCount ? (
        <GridList cellHeight="auto" cols={4}>
          {data.user_movies_paginated.edges?.map((item, idx) => {
            return (
              <GridListTile cols={1} rows={1}>
                <MediaOwn />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </Box>
  );
};

export default Medias;
