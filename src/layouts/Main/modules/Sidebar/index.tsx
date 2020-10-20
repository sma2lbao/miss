import * as React from "react";
import {
  Drawer,
  IconButton,
  // Icon,
  Typography,
  Icon,
  Breadcrumbs,
  Link
  // Divider,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { DrawerProps } from "@material-ui/core/Drawer";
import useMenus, { MenuProps } from "./useMenus";
import clsx from "clsx";
import { useRouterHelper } from "@/hooks";
import { ChevronRight } from "@material-ui/icons";
import { Placeholder } from "@/components/base/Placeholder";

interface SidebarProps extends Omit<DrawerProps, "open" | "onClose"> {
  hasExpand: boolean;
  setHasExpand: Function;
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolbar: theme.mixins.toolbar,
    root: {
      display: "flex"
    },
    parent: {
      // width: theme.custom?.layout.size.parent.width,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    parentIcon: {
      padding: theme.spacing(1)
    },
    child: {
      flex: 1,
      overflow: "hidden",
      padding: theme.spacing(1, 2)
    },
    childWrap: {
      padding: theme.spacing(1, 0)
    },
    childItem: {
      padding: theme.spacing(1, 0)
    },
    active: {
      color: theme.palette.primary.main
    },
    disabled: {
      color: theme.palette.text.disabled
    },
    openWrap: {
      position: "absolute",
      left: "0",
      top: "50%",
      transform: "translateY(-50%)"
    }
  });
});

export const Sidebar = (props: SidebarProps, ref) => {
  const { hasExpand, setHasExpand, ...rest } = props;
  const { menus, pid, cid, parent: parentMenu, child: childMenu } = useMenus();
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
              <div key={idx} className={classes.parentIcon}>
                <IconButton
                  size="medium"
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
                  <div>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link color="inherit">{parentMenu?.label || "--"}</Link>
                      <Link color="inherit">{childMenu?.label || "--"}</Link>
                      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
                    </Breadcrumbs>
                    <div className={classes.childWrap}>
                      {parent?.children.map((child, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => handleChildClick(child)}
                            className={clsx(classes.childItem, {
                              [classes.active]: child.id === cid,
                              [classes.disabled]: child.disabled
                            })}
                          >
                            <Typography variant="subtitle2">
                              {child.label}
                            </Typography>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Placeholder size={80} title="no children router" />
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
