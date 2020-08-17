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
import { Menu, AddCircle } from "@material-ui/icons";
import Search from "./components/Search";
import Account from "./components/Account";
import Notice from "./components/Notice";
import clsx from "clsx";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: theme.shadows[0]
    },
    icon: {
      marginLeft: theme.spacing(2)
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

type ToggleidebarFunc = (...args: any[]) => void;

interface TopbarProps {
  toggleSidebar?: ToggleidebarFunc;
}

export default function Topbar(props: TopbarProps) {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
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
              onClick={props.toggleSidebar}
              className={classes.icon}
            >
              <Menu fontSize="small" />
            </IconButton>
            <IconButton
              onClick={RouterHelper.gotoMovieUpload}
              size="small"
              className={classes.icon}
            >
              <AddCircle fontSize="small" />
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
      {/* <Toolbar></Toolbar> */}
    </>
  );
}
