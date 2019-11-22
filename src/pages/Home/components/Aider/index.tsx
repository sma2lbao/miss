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

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6">
        Top Recommend
      </Typography>
      <List>
        {[1, 2, 3, 4].map((_, i) => {
          return (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar src=""></Avatar>
              </ListItemAvatar>
              <ListItemText primary="姓名" secondary="订阅数" />
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
