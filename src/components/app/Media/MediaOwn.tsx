import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaOwnProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import moment from "moment";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%"
    },
    cover: {
      position: "relative"
    },
    duration: {
      position: "absolute",
      left: 10,
      bottom: 10
    }
  })
);
export const MediaOwn: React.FC<MediaOwnProps> = (props: MediaOwnProps) => {
  const RouterHelper = useRouterHelper();
  const classes = useStyles();

  const goShadow = (e: React.MouseEvent) => {
    e.stopPropagation();
    RouterHelper.gotoShadow(props?.id);
  };

  return (
    <Box className={classes.wrap} onClick={goShadow}>
      <div className={classes.cover}>
        <Image src={DEFULAT_MOVIE_COVER || props.cover} aspectRatio={16 / 9} />
        {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )}
      </div>
      <Box padding={1}>
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

MediaOwn.defaultProps = {
  title: "视频标题",
  subtitle: "视频副标题",
  create_at: new Date(),
  duration: 3242341
} as Partial<MediaOwnProps>;

export default MediaOwn;
