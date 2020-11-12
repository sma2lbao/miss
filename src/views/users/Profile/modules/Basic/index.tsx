import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { DEFAULT_PROFILE_COVER } from "@/common/constants/default.constant";
import { Typography } from "@material-ui/core";
import { ProfileContext } from "../..";
import { useFansTotalQuery, useFollowsTotalQuery } from "@/schema";
import { SpecialBoxText } from "@/components/public/SpecialBox";

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
  const [userQuery] = React.useContext(ProfileContext);
  const {
    data: fansData,
    loading: fansLoading,
    error: fansError
  } = useFansTotalQuery();
  const {
    data: followsData,
    loading: followsLoading,
    error: followsError
  } = useFollowsTotalQuery();

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
            {userQuery?.user.nickname}
          </Typography>
        </div>
        <Typography gutterBottom className={classes.pirmaryColor}>
          <SpecialBoxText loading={fansLoading} error={!!fansError} />
          {fansData?.fans_total || 0} Subscribers
        </Typography>
        <Typography gutterBottom className={classes.pirmaryColor}>
          <SpecialBoxText loading={followsLoading} error={!!followsError} />
          {followsData?.follows_total || 0} Follower
        </Typography>
        <Typography
          component="div"
          variant="caption"
          className={classes.secondColor}
          gutterBottom
        >
          {userQuery?.user.description}
        </Typography>
        {/* <div>
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
        </div> */}
      </div>
    </div>
  );
};

export default Basic;
