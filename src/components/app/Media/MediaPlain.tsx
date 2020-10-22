import * as React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { MediaPlainProps } from "./media";
import Duration from "../Duration";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
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
export const MediaPlain: React.FC<MediaPlainProps> = (
  props: MediaPlainProps
) => {
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
    </Box>
  );
};

MediaPlain.defaultProps = {
  create_at: new Date(),
  duration: 3242341
} as Partial<MediaPlainProps>;

export default MediaPlain;
