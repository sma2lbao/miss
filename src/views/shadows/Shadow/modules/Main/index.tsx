import React from "react";
import { Box, GridList, GridListTile } from "@material-ui/core";
// import { Rating } from "@material-ui/lab";
// import { Favorite } from "@material-ui/icons";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MediaOwn } from "@/components/app/Media";
import { ShadowContext } from "../..";
import Placeholder from "@/components/base/Placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0)
    },
    box: {
      padding: theme.spacing(2, 0),

      "& + &": {
        borderTop: `1px solid ${theme.palette.divider}`
      }
    }
  })
);

export const Main: React.FC = () => {
  const classes = useStyles();
  const shadowQuery = React.useContext(ShadowContext);

  return (
    <Box className={classes.root}>
      {/* <Box className={classes.box}>
        <Typography variant="subtitle1" gutterBottom>
          平均评分
        </Typography>
        <Rating
          readOnly
          value={2}
          precision={0.5}
          icon={<Favorite fontSize="inherit" />}
        />
      </Box> */}
      <Box className={classes.box}>
        {/* <Typography variant="subtitle1" gutterBottom>
          相关资源
        </Typography> */}
        {shadowQuery?.shadow.sources?.length ? (
          <GridList cellHeight="auto" cols={4}>
            {shadowQuery.shadow.sources.map((source, idx) => {
              return (
                <GridListTile key={idx} cols={1}>
                  <MediaOwn {...source} />
                </GridListTile>
              );
            })}
          </GridList>
        ) : (
          <div>
            <Placeholder title="暂无相关资源" />
          </div>
        )}
      </Box>
      {/* <Box className={classes.box}>
        <Typography variant="subtitle1">精彩点评</Typography>
      </Box> */}
    </Box>
  );
};
export default Main;
