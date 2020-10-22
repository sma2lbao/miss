import * as React from "react";
import { MediaNormal } from "@/components/app/Media";
import { GridList, GridListTile, Typography, Box } from "@material-ui/core";
import { useShadowNextUrgesByShadowQuery } from "@/schema";
import { useParams } from "react-router-dom";
import Placeholder from "@/components/base/Placeholder";

export default function NextPlay() {
  const { id } = useParams();
  const { data, error, loading } = useShadowNextUrgesByShadowQuery({
    variables: {
      shadow_id: id
    }
  });
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <Box py={2}>
      <Typography variant="subtitle1" gutterBottom>
        接下来播放
      </Typography>
      {data?.shadow_next_urges_by_shadow.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data.shadow_next_urges_by_shadow.map((item, idx) => {
            return (
              <GridListTile cols={1} key={idx}>
                <MediaNormal {...item} />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <div>
          <Placeholder title="暂无可播放资源" />
        </div>
      )}
    </Box>
  );
}
