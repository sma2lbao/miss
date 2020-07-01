import * as React from "react";
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius
    },
    title: {
      padding: theme.spacing(1.5, 2)
    },
    content: {
      padding: theme.spacing(1.5, 2)
    }
  })
);

export default function Playlist() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Video Manager
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PlayCircleFilledIcon />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
              // secondary={secondary ? 'Secondary text' : null}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
