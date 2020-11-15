import * as React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaNormalProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import moment from "moment";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%",
      pointerEvents: (props: MediaNormalProps) => {
        return props.disabled || props.loading ? "none" : "auto";
      }
    },
    cover: {
      position: "relative"
    },
    avatar: {
      width: 56,
      height: 56,
      backgroundColor: "#eee",
      border: "3px solid #fff",
      position: "absolute",
      bottom: -28,
      right: 10,
      borderRadius: "50%",
      [theme.breakpoints.down("md")]: {
        width: 40,
        height: 40,
        bottom: -20,
        right: 8
      }
    },
    desc: {
      overflow: "hidden",
      display: "-webkit-box",
      textOverflow: "ellipsis",
      "-webkit-line-clamp": 2,
      "-webkit-box-orient": "vertical"
    },
    duration: {
      position: "absolute",
      left: 10,
      bottom: 10
    }
  })
);
export const MediaNormal: React.FC<MediaNormalProps> = (
  props: MediaNormalProps
) => {
  const classes = useStyles(props);

  const handleClickRoot = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onClickRoot && props.onClickRoot(e);
  };

  const handleClickAuthor = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onClickAuthor && props.onClickAuthor(e);
  };

  if (props.loading) {
    return <MediaNormalLoading classes={classes} />;
  }

  return (
    <Box className={classes.wrap} onClick={handleClickRoot}>
      <div className={classes.cover}>
        <Image src={props.cover || DEFULAT_SHADOW_COVER} aspectRatio={16 / 9} />
        {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )}
        <Avatar
          onClick={handleClickAuthor}
          className={classes.avatar}
          src={props.author && props.author.avatar}
        ></Avatar>
      </div>
      <Box padding={1}>
        <Typography
          onClick={handleClickAuthor}
          variant="body2"
          color="textSecondary"
        >
          {props.author && (props.author.nickname || props.author.username)}
        </Typography>
        <Typography variant="subtitle1" noWrap>
          {props.title || props.name}
        </Typography>
        {props.showDescription && (
          <Typography
            className={classes.desc}
            variant="body2"
            color="textSecondary"
          >
            {props.description}
          </Typography>
        )}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Typography variant="caption" color="textSecondary">
            观看次数：TODO
          </Typography> */}
          <Typography variant="caption" color="textSecondary">
            发布于：{moment(props.create_at).format("YYYY-MM-DD")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const MediaNormalLoading = props => {
  return (
    <Box className={props.classes.wrap}>
      <div className={props.classes.cover}>
        <Image aspectRatio={16 / 9} />
        <div className={props.classes.avatar}>
          <Skeleton width="100%" height="100%" variant="circle"></Skeleton>
        </div>
      </div>
      <Box padding={1}>
        <Typography variant="body2" color="textSecondary">
          <Skeleton width="20%" />
        </Typography>
        <Typography variant="subtitle1" noWrap>
          <Skeleton width="40%" />
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Skeleton width="30%" />
          <Skeleton width="40%" />
          {/* <Typography variant="subtitle2" color="textSecondary">
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default MediaNormal;
