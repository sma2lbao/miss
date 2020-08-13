import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton, Avatar, Button } from "@material-ui/core";
import { ThumbUpAlt, ThumbDownAlt, MoreVert } from "@material-ui/icons";
import { MoviePlayContext } from "../..";
import moment from "moment";
import {
  useIsFollowingLazyQuery,
  useCreateFollowMutation,
  useRemoveFollowMutation
} from "@/schema";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1)
    },
    infoItem: {
      "& + &": {
        marginLeft: theme.spacing(1)
      }
    },
    toolBox: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(2)
    },
    toolText: {
      marginLeft: theme.spacing(0.5)
    },
    description: {
      marginBottom: theme.spacing(1)
    }
  })
);

export default function VideoInfo() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const moviePlayQuery = React.useContext(MoviePlayContext);

  const [following, setFollowing] = React.useState(false);

  const [isFollowing] = useIsFollowingLazyQuery({
    onCompleted(data) {
      setFollowing(data.is_following);
    }
  });

  React.useEffect(() => {
    if (moviePlayQuery?.movie.author.uid) {
      isFollowing({
        variables: {
          owner_uid: moviePlayQuery.movie.author.uid as string
        }
      });
    }
  }, [isFollowing, moviePlayQuery]);

  const [createFollow] = useCreateFollowMutation({
    onCompleted() {
      enqueueSnackbar("关注成功");
    }
  });
  const [removeFollow] = useRemoveFollowMutation({
    onCompleted() {
      enqueueSnackbar("取消成功");
    }
  });

  const toggleFollow = () => {
    if (moviePlayQuery?.movie.author.uid) {
      if (following) {
        removeFollow({
          variables: {
            follow: {
              owner_uid: moviePlayQuery?.movie.author.uid
            }
          }
        });
      } else {
        createFollow({
          variables: {
            follow: {
              owner_uid: moviePlayQuery?.movie.author.uid
            }
          }
        });
      }
    }
  };

  return (
    <div>
      <Box className={classes.header}>
        <div>
          <Typography variant="subtitle1">
            {moviePlayQuery?.movie.title}
          </Typography>
          <Box display="flex">
            <Typography variant="caption" className={classes.infoItem}>
              观看: TODO
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              发布时间:{" "}
              {moment(moviePlayQuery?.movie.create_at).format(
                "YYYY-MM-DD HH:mm"
              )}
            </Typography>
          </Box>
        </div>
        <Box display="flex" alignItems="center">
          <Box className={classes.toolBox}>
            <IconButton size="small">
              <ThumbDownAlt />
            </IconButton>
            <Typography className={classes.toolText}>TODO</Typography>
          </Box>
          <Box className={classes.toolBox}>
            <IconButton size="small">
              <ThumbUpAlt />
            </IconButton>
            <Typography className={classes.toolText}>TODO</Typography>
          </Box>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>
      </Box>
      <Typography className={classes.description} variant="body2">
        {moviePlayQuery?.movie.description}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Avatar src={moviePlayQuery?.movie.author.avatar}></Avatar>
          <Box ml={1}>
            <Typography variant="subtitle2">
              {moviePlayQuery?.movie.author.nickname}
            </Typography>
            <Typography variant="caption">
              {moviePlayQuery?.movie.author.description}
            </Typography>
          </Box>
        </Box>
        {following ? (
          <Button onClick={toggleFollow}>已关注</Button>
        ) : (
          <Button onClick={toggleFollow}>关注</Button>
        )}
      </Box>
    </div>
  );
}
