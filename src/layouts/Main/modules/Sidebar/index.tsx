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
import { ChevronRight } from "@material-ui/icons";

interface SidebarProps extends Omit<DrawerProps, "open" | "onClose"> {
  hasExpand: boolean;
  setHasExpand: React.Dispatch<React.SetStateAction<boolean>>;
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
    },
    openWrap: {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)"
    },
    active: {
      color: theme.palette.primary.main
    }
  });
});

export const Sidebar = (props: SidebarProps, ref) => {
  const { hasExpand, setHasExpand, ...rest } = props;
  const { menus, pid, cid } = useMenus();
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [vid, setVid] = React.useState<number | undefined>(pid);
  React.useEffect(() => {
    setVid(pid);
  }, [pid]);

  const handleParentClick = (parent: MenuProps) => {
    setVid(parent.id);
    if (parent.path && !parent.disabled && parent.id !== pid) {
      RouterHelper.push(parent.path);
    }
  };

  const handleChildClick = (child: MenuProps) => {
    if (child.path && !child.disabled && child.id !== cid) {
      RouterHelper.push(child.path);
    }
  };

  const handleCloseDrawer = () => {
    setHasExpand(false);
  };

  const handleOpenDrawer = () => {
    setHasExpand(true);
  };

  return (
    <>
      <Drawer {...rest} open={hasExpand} onClose={handleCloseDrawer}>
        <div className={classes.toolbar}></div>
        <div className={classes.root}>
          <div className={classes.parent}>
            {menus.map((parent, idx) => (
              <div key={idx}>
                <IconButton
                  color={
                    pid === parent.id
                      ? "primary"
                      : vid === parent.id
                      ? "secondary"
                      : "default"
                  }
                  onClick={() => handleParentClick(parent)}
                >
                  <Icon>{parent.icon}</Icon>
                </IconButton>
              </div>
            ))}
          </div>
          {menus.map((parent, idx) => {
            return (
              <div
                key={idx}
                className={classes.child}
                hidden={parent.id !== vid}
              >
                {parent.children ? (
                  parent?.children.map((child, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => handleChildClick(child)}
                        className={clsx({
                          [classes.active]: child.id === cid
                        })}
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
        <div onClick={handleCloseDrawer}>close menu</div>
      </Drawer>
      <div className={classes.openWrap} hidden={hasExpand}>
        <IconButton onClick={handleOpenDrawer}>
          <ChevronRight />
        </IconButton>
        {/* open menu */}
      </div>
    </>
  );
};

export default Sidebar;
