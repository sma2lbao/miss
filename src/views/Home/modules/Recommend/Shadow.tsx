import * as React from "react";
import { Typography, Box, Link } from "@material-ui/core";
import { MediaNormal } from "@/components/app/Media";
import { GridList, GridListTile } from "@material-ui/core";
import { useShadowUrgesQuery } from "@/schema";
import { useRouterHelper } from "@/hooks";
import { SpecialBox } from "@/components/public/SpecialBox";

export default function ShadowRecommend() {
  const RouterHelper = useRouterHelper();
  const { data, loading, error } = useShadowUrgesQuery();

  return (
    <Box padding={0}>
      <Box
        paddingY={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography component="span" variant="h6">
          最新发布
        </Typography>
        <Link
          onClick={RouterHelper.gotoShadowHome}
          color="textSecondary"
          variant="caption"
          style={{ cursor: "pointer" }}
        >
          更多
        </Link>
      </Box>

      {data?.shadow_urges.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data.shadow_urges.map((shadow, index: number) => {
            return (
              // <Grow in>
              <GridListTile key={index} cols={1}>
                <MediaNormal
                  {...shadow}
                  onClickRoot={() => RouterHelper.gotoShadow(shadow.id)}
                  onClickAuthor={() => {
                    RouterHelper.gotoProfile(shadow.author.username);
                  }}
                />
              </GridListTile>
              // </Grow>
            );
          })}
        </GridList>
      ) : (
        <SpecialBox
          loading={loading}
          error={!!error}
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
          placeholder
          placeholderNode={
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
    </Box>
  );
}
