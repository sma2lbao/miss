import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  ListSubheader
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MoreVert, AddCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

const Cast: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <List
        subheader={
          <ListSubheader>
            <div>演职表</div>
            <div>
              <IconButton>
                <AddCircle />
              </IconButton>
              <IconButton>
                <AddCircle />
              </IconButton>
              <IconButton>
                <AddCircle />
              </IconButton>
            </div>
          </ListSubheader>
        }
      >
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
};

export default Cast;
