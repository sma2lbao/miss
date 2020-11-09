import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaOwnProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import moment from "moment";

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
  const classes = useStyles();

  const handleClickRoot = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onClickRoot && props.onClickRoot(e);
  };

  return (
    <Box className={classes.wrap} onClick={handleClickRoot}>
      <div className={classes.cover}>
        <Image src={DEFULAT_SHADOW_COVER || props.cover} aspectRatio={16 / 9} />
        {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )}
      </div>
      <Box padding={1}>
        <Typography variant="subtitle1" noWrap>
          {props.title || props.name}
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

export default MediaOwn;
