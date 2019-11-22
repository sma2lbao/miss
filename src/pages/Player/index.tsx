import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import VideoPlayer from "./components/VideoPlayer";
import NextPlay from "./components/NextPlay";
import VideoInfo from "./components/VideoInfo";
import Comment from "./components/Comment";
import { Box } from "@material-ui/core";
import { MediaType } from "./components/VideoPlayer/player.interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: "100%"
    }
  })
);

export default function Player() {
  const classes = useStyles();
  // https://player.vimeo.com/external/188421287.sd.mp4?s=bdbf8a61c40502211971571fef384f52fe79dbbe&profile_id=164
  // https://pan.baidu.com/api/streaming?path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2Fflutter%E5%9F%BA%E7%A1%80-%20%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B%20%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95%2F12.Navigation.mp4&app_id=250528&clienttype=0&type=M3U8_FLV_264_480&vip=0&adToken=

  return (
    <Box className={classes.root}>
      <VideoPlayer
        mediaType={MediaType.M3U8}
        src="https://pan.baidu.com/api/streaming?path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2Fflutter%E5%9F%BA%E7%A1%80-%20%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B%20%E4%B8%AD%E6%96%87%E5%AD%97%E5%B9%95%2F12.Navigation.mp4&app_id=250528&clienttype=0&type=M3U8_FLV_264_480&vip=0&adToken="
      />
      {/* <div>
        <VideoInfo />
      </div>
      <div>
        <NextPlay />
      </div> */}
      {/* <Comment /> */}
    </Box>
  );
}
