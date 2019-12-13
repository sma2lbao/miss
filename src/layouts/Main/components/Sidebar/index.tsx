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
      <List>
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
      </List>
      <Divider variant="middle" />
      <List>
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
      </List>
    </Drawer>
  );
}
