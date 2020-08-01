import * as React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
// import { Skeleton } from "@material-ui/lab";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { VideoWithAuthorProps } from "./video";
import Duration from "../Duration";
import {
  DEFULAT_MOVIE_COVER,
  DEFAULT_USER_AVATAR
} from "@/common/constants/default.constant";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%"
    },
    poster: {
      position: "relative"
    },
    avatar: {
      width: 56,
      height: 56,
      border: "3px solid #fff",
      position: "absolute",
      bottom: -28,
      right: 10,
      [theme.breakpoints.down("md")]: {
        width: 40,
        height: 40,
        bottom: -20,
        right: 8
      }
    },
    duration: {
      position: "absolute",
      left: 10,
      bottom: 10
    }
  })
);
export const VideoWithAuthor: React.FC<VideoWithAuthorProps> = (
  props: VideoWithAuthorProps
) => {
  const classes = useStyles();
  return (
    <Box className={classes.wrap}>
      <div className={classes.poster}>
        <Image src={DEFULAT_MOVIE_COVER || props.cover} aspectRatio={16 / 9} />
        {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )}
        <Avatar
          className={classes.avatar}
          src={(props.author && props.author.avatar) || DEFAULT_USER_AVATAR}
        ></Avatar>
      </div>
      <Box padding={1}>
        <Typography variant="body2" color="textSecondary">
          {props.author && (props.author.nickname || props.author.username)}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {props.title}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="textSecondary">
            观看次数：TODO
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {moment(props.create_at).format("YYYY-MM-DD")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

VideoWithAuthor.defaultProps = {
  title: "视频标题",
  subtitle: "视频副标题",
  create_at: new Date(),
  duration: 3242341,
  author: {
    username: "sma2lbao",
    nickname: "昵称",
    avatar: ""
  }
} as Partial<VideoWithAuthorProps>;

export default VideoWithAuthor;
