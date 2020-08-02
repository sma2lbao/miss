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
        <div>
          <Typography variant="h4">Sma2lBao</Typography>
        </div>
        <div>
          <Typography>68 Videos</Typography>
          <Typography>135k Subscribers</Typography>
        </div>
        <div>
          <Typography>个人简介balabala</Typography>
        </div>
        <div>
          <div>Born</div>
          <div>
            <Typography>个人简介balabala</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
