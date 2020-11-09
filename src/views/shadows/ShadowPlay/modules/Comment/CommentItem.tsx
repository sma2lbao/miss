import * as React from "react";
import {
  Box,
  Typography,
  Avatar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(2)
    },
    main: {
      flex: 1
    },
    infoItem: {
      "& + &": {
        marginLeft: theme.spacing(2)
      }
    },
    commentText: {
      marginTop: theme.spacing(1)
    }
  })
);

export interface CommentItemProps {
  id?: number | string;

  create_at?: Date;

  content: string;

  author?: {
    avatar?: string;
    nickname?: string;
  };
}

function CommentItem(props) {
  const classes = useStyles();

  return (
    <Box>
      <Box display="flex">
        <Avatar className={classes.avatar} src={props.author.avatar}></Avatar>
        <div className={classes.main}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>{props.author.nickname}</Typography>
            <Typography variant="caption">
              {moment(props.create_at).format("YYYY-MM-DD HH:mm")}
            </Typography>
          </Box>
          <Box display="flex">
            {/* <Typography variant="caption" className={classes.infoItem}>
              like 2
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              dislike 0
            </Typography> */}
          </Box>
        </div>
      </Box>
      <Typography variant="body2" className={classes.commentText}>
        {props.content}
      </Typography>
    </Box>
  );
}

export default CommentItem;
