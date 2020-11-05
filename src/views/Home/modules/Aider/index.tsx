import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Typography
  // Button,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useUserUrgesQuery } from "@/schema";
import { useRouterHelper } from "@/hooks";
import { SpecialBox } from "@/components/public/SpecialBox";

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
  const RouterHelper = useRouterHelper();

  const { data, loading, error } = useUserUrgesQuery();
  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h6">
          贡献榜
        </Typography>
        <List>
          {data?.user_urges.length ? (
            data.user_urges.map((user, i) => {
              return (
                <ListItem
                  key={i}
                  onClick={() => RouterHelper.gotoProfile(user?.username)}
                >
                  <ListItemAvatar>
                    <Avatar src={user.avatar}></Avatar>
                  </ListItemAvatar>
                  <ListItemText>
                    <Typography noWrap>{user.nickname}</Typography>
                    <Typography noWrap variant="caption">
                      {user.description}
                    </Typography>
                  </ListItemText>
                  <ListItemSecondaryAction>
                    {/* <Button>
                      <Typography>关注</Typography>
                    </Button> */}
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })
          ) : (
            <SpecialBox loading={loading} error={!!error} />
          )}
        </List>
      </div>
    </>
  );
}
