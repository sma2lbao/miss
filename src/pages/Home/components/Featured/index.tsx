import * as React from "react";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { VideoWithAuthor } from "@/components/VideoCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    banner: {
      display: "flex",
      flex: 1
    },
    bannerItem: {
      minHeight: 200,
      // backgroundColor: "red",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      "& + &": {
        marginLeft: theme.spacing(2)
      }
    }
  })
);

export default function Featured() {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <Box mb={3}>
          <Typography variant="h6" gutterBottom>
            {/* 每周精选 */}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {/* 古诗词 */}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {/* 东风夜放花千树，更吹落，星如雨。宝马雕车香满路。凤箫声动，玉壶光转，一夜鱼龙舞。
            蛾儿雪柳黄金缕，笑语盈盈暗香去。众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。 */}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Box mr={1}>
            <IconButton size="small">
              <KeyboardArrowLeft />
            </IconButton>
          </Box>
          <div className={classes.banner}>
            <div className={classes.bannerItem}>
              <VideoWithAuthor />
            </div>
            <div className={classes.bannerItem}>
              <VideoWithAuthor />
            </div>
          </div>
          <Box ml={1}>
            <IconButton size="small">
              <KeyboardArrowRight />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
