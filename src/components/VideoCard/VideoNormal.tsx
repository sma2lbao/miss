import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/Image";
import Duration from "@/components/Duration";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    poster: {
      position: "relative"
    },
    duration: {
      position: "absolute",
      bottom: 10,
      left: 10
    }
  })
);

export default function VideoNormal() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.poster}>
        <Image
          aspectRatio={16 / 9}
          src="https://p.ssl.qhimg.com/dmfd/400_300_/t0120b2f23b554b8402.jpg"
        />
        <Duration duration={223888} classes={{ root: classes.duration }} />
      </div>
      <Box padding={1}>
        <Typography variant="subtitle1" noWrap>
          title
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" color="textSecondary">
            观看次数 29.1k
          </Typography>
          <Typography variant="caption" color="textSecondary">
            2019-12-12
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
