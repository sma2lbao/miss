import * as React from "react";
import { Box, Typography, Avatar } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaNormalProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import moment from "moment";
import { useRouterHelper } from "@/hooks";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%"
    },
    cover: {
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
export const MediaNormal: React.FC<MediaNormalProps> = (
  props: MediaNormalProps
) => {
  const RouterHelper = useRouterHelper();
  const classes = useStyles();

  const goMovie = (e: React.MouseEvent) => {
    e.stopPropagation();
    RouterHelper.gotoMovie(props?.id);
  };

  const goProfile = (e: React.MouseEvent) => {
    e.stopPropagation();
    RouterHelper.gotoProfile(props?.author?.username);
  };

  if (props.loading) {
    return <MediaNormalLoading classes />;
  }

  return (
    <Box className={classes.wrap} onClick={goMovie}>
      <div className={classes.cover}>
        <Image src={DEFULAT_MOVIE_COVER || props.cover} aspectRatio={16 / 9} />
        {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )}
        <Avatar
          onClick={goProfile}
          className={classes.avatar}
          src={props.author && props.author.avatar}
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

const MediaNormalLoading = classes => {
  return (
    <Box className={classes.wrap}>
      <div className={classes.cover}>
        <Image aspectRatio={16 / 9} />
        <Avatar className={classes.avatar}></Avatar>
      </div>
      <Box padding={1}>
        <Typography variant="body2" color="textSecondary">
          <Skeleton width="20%" />
        </Typography>
        <Typography variant="subtitle1" noWrap>
          <Skeleton width="40%" />
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="textSecondary">
            <Skeleton width="30%" />
          </Typography>
          <Typography variant="caption" color="textSecondary">
            <Skeleton width="40%" />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MediaNormal;