import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

export default function Cast() {
  return (
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
  );
}
