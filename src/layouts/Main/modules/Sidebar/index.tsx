import * as React from "react";
import {
  Drawer,
  IconButton,
  // Icon,
  Typography,
  Icon
  // Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { DrawerProps } from "@material-ui/core/Drawer";
import useMenus, { MenuProps } from "./useMenus";
import clsx from "clsx";
import { useRouterHelper } from "@/hooks";

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

export default function Sidebar(props: SidebarProps) {
  const { closeSidebarHandler, ...rest } = props;
  const [menus] = useMenus();
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [pid, setPid] = React.useState(1000);
  const [cid, setCid] = React.useState(1001);

  const handleParentClick = (parent: MenuProps) => {
    setPid(parent.id);
    if (parent.path && !parent.disabled) {
      RouterHelper.push(parent.path);
    }
  };

  const handleChildClick = (child: MenuProps) => {
    setCid(child.id);
    if (child.path && !child.disabled) {
      RouterHelper.push(child.path);
    }
  };

  return (
    <Drawer {...rest} onClose={closeSidebarHandler}>
      <div className={classes.toolbar}></div>
      <div className={classes.root}>
        <div className={classes.parent}>
          {menus.map((parent, idx) => (
            <div key={idx}>
              <IconButton
                color={pid === parent.id ? "primary" : "default"}
                onClick={() => handleParentClick(parent)}
              >
                <Icon>{parent.icon}</Icon>
              </IconButton>
            </div>
          ))}
        </div>
        {menus.map((parent, idx) => {
          return (
            <div key={idx} className={classes.child} hidden={parent.id !== pid}>
              {parent.children ? (
                parent?.children.map((child, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleChildClick(child)}
                      className={clsx({ active: child.id === cid })}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        {child.label}
                      </Typography>
                    </div>
                  );
                })
              ) : (
                <div>no children router</div>
              )}
            </div>
          );
        })}
      </div>
      <div onClick={closeSidebarHandler}>close menu</div>
    </Drawer>
  );
}
