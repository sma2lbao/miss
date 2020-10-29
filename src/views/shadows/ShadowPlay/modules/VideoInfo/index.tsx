import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton, Avatar, Button } from "@material-ui/core";
import { ThumbUpAlt, ThumbDownAlt, MoreVert } from "@material-ui/icons";
import { ShadowPlayContext } from "../..";
import moment from "moment";
import { useFollowHelper } from "@/hooks";
import { useCreateOrUpdateVoteMutation, VoteStatus } from "@/schema";
import { useParams } from "react-router-dom";

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
  const shadowPlayQuery = React.useContext(ShadowPlayContext);
  const { following, toggleFollow } = useFollowHelper({
    owner_uid: shadowPlayQuery?.shadow.author.uid as string
  });
  const [create_or_update_vote] = useCreateOrUpdateVoteMutation();
  const { id } = useParams();

  const handleVote = () => {
    create_or_update_vote({
      variables: {
        vote: {
          medium_id: id,
          status: VoteStatus.Likd
        }
      }
    });
  };

  return (
    <div>
      <Box className={classes.header}>
        <div>
          <Typography variant="subtitle1">
            {shadowPlayQuery?.shadow.title}
          </Typography>
          <Box display="flex">
            <Typography variant="caption" className={classes.infoItem}>
              观看: TODO
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              发布时间:{" "}
              {moment(shadowPlayQuery?.shadow.create_at).format(
                "YYYY-MM-DD HH:mm"
              )}
            </Typography>
          </Box>
        </div>
        <Box display="flex" alignItems="center">
          <Box className={classes.toolBox}>
            <IconButton size="small" onClick={handleVote}>
              <ThumbDownAlt fontSize="small" />
            </IconButton>
            <Typography className={classes.toolText}>TODO</Typography>
          </Box>
          <Box className={classes.toolBox}>
            <IconButton size="small" onClick={handleVote}>
              <ThumbUpAlt fontSize="small" />
            </IconButton>
            <Typography className={classes.toolText}>TODO</Typography>
          </Box>
          <IconButton size="small">
            <MoreVert fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Typography className={classes.description} variant="body2">
        {shadowPlayQuery?.shadow.description}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Avatar src={shadowPlayQuery?.shadow.author.avatar}></Avatar>
          <Box ml={1}>
            <Typography variant="subtitle2">
              {shadowPlayQuery?.shadow.author.nickname}
            </Typography>
            <Typography variant="caption">
              {shadowPlayQuery?.shadow.author.description}
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
