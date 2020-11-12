import * as React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Theme,
  createStyles,
  makeStyles
} from "@material-ui/core";
import { MediaPlain } from "@/components/app/Media";
import clsx from "clsx";
import { useFollowHelper, useRouterHelper } from "@/hooks";
import { ProfileContext } from "../..";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      paddingBottom: theme.spacing(2)
    },
    item: {
      flex: 1,
      overflow: "hidden",
      "& + &": {
        marginLeft: theme.spacing(2)
      }
    },
    wrap: {
      display: "flex",
      flexDirection: "column"
      // justifyContent: "space-between",
    },
    main: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacing(6)
    },
    mainButton: {
      marginLeft: theme.spacing(1),
      flexShrink: 0
    },
    content: {}
  })
);

export const Top: React.FC = () => {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [userQuery, [topShadow]] = React.useContext(ProfileContext);
  const { following, toggleFollow } = useFollowHelper({
    owner_uid: userQuery?.user.uid as string
  });

  return (
    <Box className={classes.root}>
      <div className={clsx(classes.item, classes.wrap)}>
        <Box className={classes.main}>
          <Box display="flex" alignItems="center">
            <Avatar src={userQuery?.user.avatar}></Avatar>
            <Box ml={1}>
              <Typography variant="subtitle1">
                {userQuery?.user.nickname}
              </Typography>
              <Typography variant="caption">
                {userQuery?.user.description}
              </Typography>
            </Box>
          </Box>

          {following ? (
            <Button className={classes.mainButton} onClick={toggleFollow}>
              已关注
            </Button>
          ) : (
            <Button className={classes.mainButton} onClick={toggleFollow}>
              关注
            </Button>
          )}
        </Box>
        <Box className={classes.content}>
          <Typography gutterBottom variant="subtitle2" component="div">
            {topShadow?.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="div"
          >
            {topShadow?.description}
          </Typography>
          <div>
            {/* <Typography variant="caption">观看数： TODO</Typography> */}
            {/* <Typography variant="caption">点赞数： TODO</Typography> */}
            <Typography variant="caption">
              发布于：{moment(topShadow?.create_at).format("YYYY-MM-DD")}
            </Typography>
          </div>
        </Box>
      </div>
      <div className={classes.item}>
        <MediaPlain
          {...topShadow}
          onClickRoot={() => RouterHelper.gotoShadow(topShadow?.id)}
        />
      </div>
    </Box>
  );
};

export default Top;
