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
  ListSubheader,
  Typography
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";
import { MovieContext } from "../..";
import { Placeholder } from "@/components/base/Placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

const Cast: React.FC = () => {
  const classes = useStyles();
  const movieQuery = React.useContext(MovieContext);

  return (
    <Box className={classes.root}>
      <List
        subheader={
          <ListSubheader>
            <Typography>演职表</Typography>
          </ListSubheader>
        }
      >
        {movieQuery?.movie?.credits?.length ? (
          <>
            {movieQuery.movie.credits.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar}></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="" secondary="" />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </>
        ) : (
          <div>
            <Placeholder title="暂无演职员信息" />
          </div>
        )}
      </List>
    </Box>
  );
};

export default Cast;
