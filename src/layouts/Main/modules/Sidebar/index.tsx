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
import { Home, Movie, Person, HourglassEmpty } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import clsx from "clsx";
import { useHistory } from "react-router";

type CloseSidebarFunc = (...args: any[]) => void;

interface SidebarProps extends DrawerProps {
  closeSidebarHandler?: CloseSidebarFunc;
}

const useStyles = makeStyles((theme: Theme) => {
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
    label: "Home",
    value: "home",
    path: "",
    children: [
      {
        icon: <HourglassEmpty />,
        label: "Home",
        value: "home",
        path: "/home"
      },
      {
        icon: <HourglassEmpty />,
        label: "History Topics",
        value: "topic",
        path: "/topics",
        disabled: true
      }
    ]
  },
  {
    icon: <Movie />,
    label: "Movie",
    value: "movie",
    path: "/movie-home",
    children: []
  },
  {
    icon: <Person />,
    label: "My",
    value: "user",
    path: "",
    children: [
      {
        icon: <HourglassEmpty />,
        label: "My Homepage",
        value: "personal",
        path: "/personal"
      },
      {
        icon: <HourglassEmpty />,
        label: "Setting",
        value: "setting",
        path: "/setting",
        disabled: true
      }
    ]
  }
];

export default function Sidebar(props: SidebarProps) {
  const { closeSidebarHandler, ...rest } = props;
  const classes = useStyles();
  const history = useHistory();
  const [parentSelected, setParentSelected] = React.useState("home");
  const childMenus = React.useMemo(() => {
    const currParentMenu = menus.find(menu => menu.value === parentSelected);
    const currChildMenu = currParentMenu?.children || [];
    return currChildMenu;
  }, [parentSelected]);

  const [childSelected, setChildSelected] = React.useState(() => {
    return childMenus.length ? childMenus[0].value : "";
  });
  React.useEffect(() => {
    const currParentMenu = menus.find(menu => menu.value === parentSelected);
    if (currParentMenu && currParentMenu.path) {
      history.push(currParentMenu.path);
    } else if (childMenus.length && childSelected) {
      const currentChildMenu = childMenus.find(
        child => child.value === childSelected
      );
      if (currentChildMenu?.path) {
        history.push(currentChildMenu.path);
      }
    }
  }, [parentSelected, childSelected, history, childMenus]);

  return (
    <Drawer {...rest} onClose={closeSidebarHandler}>
      <div className={classes.toolbar}></div>
      <div className={classes.root}>
        <div className={classes.parent}>
          {menus.map((menu, index) => (
            <div key={index}>
              <IconButton
                color={parentSelected === menu.value ? "primary" : "default"}
                onClick={() => setParentSelected(menu.value)}
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
          {childMenus.map((child, index) => {
            return (
              <div
                key={index}
                onClick={() => setChildSelected(child.value)}
                className={clsx({ active: child.value === childSelected })}
              >
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
      <div onClick={closeSidebarHandler}>close menu</div>
    </Drawer>
  );
}
