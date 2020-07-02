import * as React from "react";
import {
  Box,
  Typography,
  Avatar,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

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

function CommentItem() {
  const classes = useStyles();

  return (
    <Box>
      <Box display="flex">
        <Avatar className={classes.avatar}>L</Avatar>
        <div className={classes.main}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>
              <Skeleton animation="wave" height="100%" width={90} />
            </Typography>
            <Typography variant="caption">
              <Skeleton animation="wave" height="100%" width={200} />
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" className={classes.infoItem}>
              {/* like 2 */}
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              {/* dislike 0 */}
            </Typography>
          </Box>
        </div>
      </Box>
      <Typography variant="body2" className={classes.commentText}>
        <Skeleton animation="wave" height="100%" />
      </Typography>
    </Box>
  );
}

export default CommentItem;
