import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  // Typography,
  Box,
  Divider,
  IconButton,
  Icon
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import Search from "./components/Search";
import Account from "./components/Account";
import Notice from "./components/Notice";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: theme.shadows[0]
    },
    menuIcon: {
      margin: theme.spacing(0, 2)
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    search: {
      margin: theme.spacing(0, 1)
    }
  });
});

type OpenSidebarFunc = (...args: any[]) => void;

interface TopbarProps {
  openSidebarHandler?: OpenSidebarFunc;
}

export default function Topbar(props: TopbarProps) {
  const classes = useStyles();
  return (
    <>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <Box display="flex" alignItems="center">
            <div>
              <Icon
                fontSize="large"
                className={clsx("iconfont icon-logo")}
              ></Icon>
            </div>
            <IconButton
              size="small"
              onClick={props.openSidebarHandler}
              className={classes.menuIcon}
            >
              <Menu fontSize="small" />
            </IconButton>
          </Box>
          <Box display="flex" alignItems="center">
            <Search />
            <Notice />
            <Account />
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar></Toolbar>
    </>
  );
}
