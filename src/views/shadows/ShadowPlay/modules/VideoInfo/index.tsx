import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton, Avatar, Button } from "@material-ui/core";
import { ThumbUpAlt, ThumbDownAlt, MoreVert } from "@material-ui/icons";
import { ShadowPlayContext } from "../..";
import moment from "moment";
import { useFollowHelper } from "@/hooks";
import {
  useCreateOrUpdateVoteMutation,
  VoteStatus,
  useVoteLazyQuery
} from "@/schema";

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
  const [shadowPlayQuery, shadowMedium] = React.useContext(ShadowPlayContext);
  const { following, toggleFollow } = useFollowHelper({
    owner_uid: shadowPlayQuery?.shadow.author.uid as string
  });
  const [voteQuery, { data }] = useVoteLazyQuery({
    fetchPolicy: "network-only",
    variables: {
      medium_id: Number(shadowMedium?.id)
    }
    // skip: !shadowMedium?.id,
  });

  const [create_or_update_vote] = useCreateOrUpdateVoteMutation({
    update(cache) {
      // const newStatus = data?.create_or_update_vote.status;
      // console.log("before: ", cache);
      cache.modify({
        fields: {
          vote() {},
          shadow() {}
        }
      });
    }
  });

  const handleVote = (status: VoteStatus) => {
    let report_status = status;
    if (data?.vote.status === report_status && status !== VoteStatus.Default) {
      report_status = VoteStatus.Default;
    }
    create_or_update_vote({
      variables: {
        vote: {
          medium_id: shadowMedium ? +shadowMedium.id : -1,
          status: report_status
        }
      }
    });
  };

  React.useEffect(() => {
    if (shadowMedium?.id) {
      voteQuery();
    }
  }, [shadowMedium, voteQuery]);

  return (
    <div>
      <Box className={classes.header}>
        <div>
          <Typography variant="subtitle1">
            {shadowPlayQuery?.shadow.title}
          </Typography>
          <Box display="flex">
            {/* <Typography variant="caption" className={classes.infoItem}>
              观看: TODO
            </Typography> */}
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
            <IconButton
              color={
                data?.vote.status === VoteStatus.Likd ? "primary" : "default"
              }
              size="small"
              onClick={() => handleVote(VoteStatus.Likd)}
            >
              <ThumbUpAlt fontSize="small" />
            </IconButton>
            <Typography className={classes.toolText}>
              {shadowMedium?.vote_like_count}
            </Typography>
          </Box>
          <Box className={classes.toolBox}>
            <IconButton
              color={
                data?.vote.status === VoteStatus.Dislike ? "primary" : "default"
              }
              size="small"
              onClick={() => handleVote(VoteStatus.Dislike)}
            >
              <ThumbDownAlt fontSize="small" />
            </IconButton>
            <Typography className={classes.toolText}>
              {shadowMedium?.vote_dislike_count}
            </Typography>
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
