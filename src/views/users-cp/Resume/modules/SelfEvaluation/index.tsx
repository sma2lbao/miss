import * as React from "react";
import { Chip, Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Battery20, SignalWifi1Bar } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chipWrap: {
      "& > *": {
        margin: theme.spacing(0.5)
      }
    }
  })
);

export default function SelfEvaluation() {
  const classes = useStyles();

  return (
    <Box p={2} bgcolor="#fff">
      <Typography variant="body1" gutterBottom>
        似花还似非花，也无人惜从教坠。抛家傍路，思量却是，无情有思。萦损柔肠，困酣娇眼，欲开还闭。梦随风万里，寻郎去处，又还被、莺呼起。不恨此花飞尽，恨西园、落红难缀。晓来雨过，遗踪何在？一池萍碎。春色三分，二分尘土，一分流水。细看来，不是杨花，点点是离人泪。
      </Typography>
      <div className={classes.chipWrap}>
        <Chip
          variant="outlined"
          color="primary"
          icon={<Battery20 />}
          label="三个字"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<SignalWifi1Bar />}
          label="四个字了"
        />
        <Chip
          variant="outlined"
          color="primary"
          icon={<Battery20 />}
          label="三个字"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<SignalWifi1Bar />}
          label="四个字了"
        />
        <Chip
          variant="outlined"
          color="primary"
          icon={<Battery20 />}
          label="三个字"
        />
        <Chip
          variant="outlined"
          color="secondary"
          icon={<SignalWifi1Bar />}
          label="四个字了"
        />
      </div>
    </Box>
  );
}
