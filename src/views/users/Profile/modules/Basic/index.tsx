import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { DEFAULT_PROFILE_COVER } from "@/common/constants/default.constant";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    cover: {},
    coverImg: {
      width: "100%",
      objectFit: "contain"
    },
    info: {
      padding: theme.spacing(3, 4)
    },
    pirmaryColor: {
      color: "#fff"
    },
    secondColor: {
      color: "#aaa"
    }
  })
);

export const Basic: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.cover}>
        <img
          alt="cover"
          className={classes.coverImg}
          src={DEFAULT_PROFILE_COVER}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.pirmaryColor}>
          <Typography gutterBottom variant="h4">
            Sma2lBao
          </Typography>
        </div>
        <Typography gutterBottom className={classes.pirmaryColor}>
          135k Subscribers
        </Typography>
        <Typography
          component="div"
          variant="caption"
          className={classes.secondColor}
          gutterBottom
        >
          个人简介balabala 个人简介balabala 个人简介balabala 个人简介balabala
          个人简介balabala 个人简介balabala 个人简介balabala 个人简介balabala
          个人简介balabala 个人简介balabala 个人简介balabala 个人简介balabala
          个人简介balabala 个人简介balabala 个人简介balabala
        </Typography>
        <div>
          <Typography
            variant="subtitle2"
            component="div"
            gutterBottom
            className={classes.pirmaryColor}
          >
            Born
          </Typography>
          <Typography
            className={classes.secondColor}
            component="div"
            variant="caption"
          >
            出生日期
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Basic;
