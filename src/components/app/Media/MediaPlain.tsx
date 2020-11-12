import * as React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaPlainProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";

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
export const MediaPlain: React.FC<MediaPlainProps> = (
  props: MediaPlainProps
) => {
  const classes = useStyles();

  const handleClickRoot = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.onClickRoot && props.onClickRoot(e);
  };

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
      </div>
    </Box>
  );
};

export default MediaPlain;
