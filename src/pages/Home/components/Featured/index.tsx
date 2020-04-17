import * as React from "react";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { VideoWithAuthor } from "@/components/VideoCard";
import clsx from "clsx";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    bannerRoot: {
      flex: 1,
      overflow: "hidden"
    },
    banner: {
      paddingRight: "50%"
    },
    bannerItem: {
      minHeight: 200,
      margin: theme.spacing(0, 1),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  })
);

export default function Featured() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  return (
    <div>
      <Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            {/* 每周精选 */}
            <Skeleton animation="wave" height="100%" width={160} />
          </Typography>
          <Typography variant="h5" gutterBottom>
            {/* 古诗词 */}
            <Skeleton animation="wave" height="100%" width={40} />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {/* 东风夜放花千树，更吹落，星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
            蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。 */}
            <Skeleton animation="wave" height="100%" width={400} />
            <Skeleton animation="wave" height="100%" width={100} />
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box>
            <IconButton size="small" onClick={() => setIndex(index - 1)}>
              <KeyboardArrowLeft />
            </IconButton>
          </Box>
          <div className={classes.bannerRoot}>
            <VirtualizeSwipeableViews
              className={classes.banner}
              index={index}
              onChangeIndex={index => setIndex(index)}
              enableMouseEvents
              slideRenderer={params => {
                const { index, key } = params;
                // const templateIndex = ((index % 6) + 6) % 6;
                // console.log(mod(index, 3));
                return (
                  <div key={key} className={clsx(classes.bannerItem)}>
                    <VideoWithAuthor />
                  </div>
                );
              }}
            />
          </div>
          <Box>
            <IconButton size="small" onClick={() => setIndex(index + 1)}>
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
