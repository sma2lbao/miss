import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function Cast() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List>
        {[1, 2, 3, 4].map((_, i) => {
          return (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar src=""></Avatar>
              </ListItemAvatar>
              <ListItemText primary="姓名" secondary="介绍" />
              <ListItemSecondaryAction>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
