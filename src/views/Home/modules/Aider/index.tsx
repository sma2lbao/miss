import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import { USER_URGES } from "@/apollo/queries";
import { useQuery } from "@apollo/client";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    title: {
      padding: theme.spacing(1, 2)
    }
  })
);

export default function Aider() {
  const classes = useStyles();
  const { data } = useQuery(USER_URGES);
  const users = data?.user_urges;
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6">
        <Skeleton animation="wave" height="100%" width={200} />
      </Typography>
      <List>
        {users &&
          users.map((_, i) => {
            return (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar>
                    <Skeleton
                      width="100%"
                      height="100%"
                      variant="circle"
                      animation="wave"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Skeleton height="100%" width={100} animation="wave" />
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
