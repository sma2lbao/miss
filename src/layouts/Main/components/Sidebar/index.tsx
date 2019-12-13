import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Icon
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { DrawerProps } from "@material-ui/core/Drawer";
import { Home, Movie, Tv, ChevronLeft } from "@material-ui/icons";
// import clsx from 'clsx';

type CloseSidebarFunc = (...args: any[]) => void;

interface SidebarProps extends DrawerProps {
  closeSidebarHandler?: CloseSidebarFunc;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar
  })
);

const menus = [
  {
    icon: <Home />,
    label: "首页",
    path: "/home"
  },
  {
    icon: <Movie />,
    label: "电影",
    path: "/movie-home"
  },
  {
    icon: <Tv />,
    label: "剧集",
    path: "/tv-home"
  }
];

const minor_menus = [
  {
    icon: <Home />,
    label: "首页",
    path: "/home"
  },
  {
    icon: <Movie />,
    label: "电影",
    path: "/movie-home"
  },
  {
    icon: <Tv />,
    label: "剧集",
    path: "/tv-home"
  }
];

export default function Sidebar(props: SidebarProps) {
  const { closeSidebarHandler, ...rest } = props;
  const classes = useStyles();

  return (
    <Drawer {...rest} onClose={closeSidebarHandler}>
      <div className={classes.toolbar}></div>
      <List>
        {menus.map((menu, index) => (
          <ListItem button key={menu.label}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
      <List>
        {minor_menus.map((menu, index) => (
          <ListItem button key={menu.label}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
