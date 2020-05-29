import * as React from "react";
import {
  Drawer,
  IconButton,
  // Icon,
  Typography
  // Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { DrawerProps } from "@material-ui/core/Drawer";
import { Home, Movie, Tv, Person } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
// import clsx from 'clsx';

type CloseSidebarFunc = (...args: any[]) => void;

interface SidebarProps extends DrawerProps {
  closeSidebarHandler?: CloseSidebarFunc;
}

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme);
  return createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
      display: "flex"
    },
    parent: {
      width: theme.custom?.layout.size.parent.width,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
      // backgroundColor: theme.palette.secondary.main,
    },
    child: {
      flex: 1,
      overflow: "hidden",
      padding: theme.spacing(2, 1)
    }
  });
});

const menus = [
  {
    icon: <Home />,
    label: "首页",
    value: "home",
    path: "/home"
  },
  {
    icon: <Movie />,
    label: "电影",
    value: "movie",
    path: "/movie-home"
  },
  {
    icon: <Tv />,
    label: "剧集",
    value: "tv",
    path: "/tv-home"
  },
  {
    icon: <Person />,
    label: "我的",
    value: "user",
    path: "/personal"
  }
];

const minor_menus = [
  {
    icon: <Home />,
    label: "首页",
    value: "minor_home",
    path: "/home"
  },
  {
    icon: <Movie />,
    label: "电影",
    value: "minor_movie",
    path: "/movie-home"
  },
  {
    icon: <Tv />,
    label: "剧集",
    value: "minor_tv",
    path: "/tv-home"
  }
];

export default function Sidebar(props: SidebarProps) {
  const { closeSidebarHandler, ...rest } = props;
  const classes = useStyles();
  const [selected, setSelected] = React.useState("home");

  return (
    <Drawer {...rest} onClose={closeSidebarHandler}>
      <div className={classes.toolbar}></div>
      <div className={classes.root}>
        <div className={classes.parent}>
          {menus.map((menu, index) => (
            <div key={index}>
              <IconButton
                color={selected === menu.value ? "primary" : "default"}
                onClick={() => setSelected(menu.value)}
              >
                <Skeleton
                  width="1em"
                  height="1em"
                  variant="circle"
                  animation="wave"
                />
                {/* <Icon>{menu.icon}</Icon> */}
              </IconButton>
            </div>
          ))}
        </div>
        <div className={classes.child}>
          {minor_menus.map((child, index) => {
            return (
              <div key={index}>
                <Typography variant="subtitle1" gutterBottom>
                  {/* {child.label} */}
                  <Skeleton
                    width="70%"
                    height="100%"
                    animation="wave"
                  ></Skeleton>
                </Typography>
              </div>
            );
          })}
        </div>
      </div>

      {/* <List>
        {menus.map((menu, index) => (
          <ListItem
            onClick={() => setSelected(menu.value)}
            selected={selected === menu.value}
            button
            key={menu.label}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List> */}
      {/* <Divider variant="middle" /> */}
      {/* <List>
        {minor_menus.map((menu, index) => (
          <ListItem
            onClick={() => setSelected(menu.value)}
            selected={selected === menu.value}
            button
            key={menu.label}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List> */}
    </Drawer>
  );
}
