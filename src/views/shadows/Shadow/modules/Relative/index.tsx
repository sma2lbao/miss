import * as React from "react";
import { MediaNormal } from "@/components/app/Media";
import { Box, GridListTile, GridList } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useShadowUrgesByShadowQuery } from "@/schema";
import { useParams } from "react-router-dom";
import { SpecialBox } from "@/components/public/SpecialBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 0)
    }
  })
);

export const Relative: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, error, loading } = useShadowUrgesByShadowQuery({
    variables: {
      shadow_id: id
    }
  });

  return (
    <Box className={classes.root}>
      {/* <Typography variant="subtitle1" gutterBottom>
        喜欢该视频的也喜欢
      </Typography> */}
      {data?.shadow_urges_by_shadow?.length ? (
        <GridList cellHeight="auto" cols={4}>
          {data?.shadow_urges_by_shadow.map((shadow, idx) => {
            return (
              <GridListTile key={idx}>
                <MediaNormal {...shadow} />
              </GridListTile>
            );
          })}
        </GridList>
      ) : (
        <div>
          <SpecialBox
            loading={loading}
            error={!!error}
            placeholderTitle="暂无相关推荐"
          />
        </div>
      )}
    </Box>
  );
};

export default Relative;
