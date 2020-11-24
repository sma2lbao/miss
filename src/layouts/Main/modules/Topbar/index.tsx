import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  // Typography,
  Divider,
  IconButton,
  Zoom,
  Tooltip,
  Box,
  NoSsr
} from "@material-ui/core";
import { AddCircle, Brightness1, Brightness2 } from "@material-ui/icons";
import Search from "./components/Search";
import Account from "./components/Account";
// import ColorPicker from "./components/ColorPicker";
// import Notice from "./components/Notice";
import { useRouterHelper } from "@/hooks";
import { Logo } from "@/components/base/Icons";
import { useCustomTheme } from "@/theme";

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

export default function Topbar() {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [customTheme, changeCustomTheme] = useCustomTheme();
  const changeThemeType = (type: "dark" | "light") => {
    // theme.palette.type = type;
    changeCustomTheme({
      palette: {
        type: type
      }
    });
  };

  return (
    <>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <NoSsr>
            <Box display="flex" alignItems="center">
              <Logo fontSize="large" onClick={RouterHelper.gotoHome} />
              <IconButton
                onClick={RouterHelper.gotoShadowUpload}
                size="small"
                className={classes.icon}
              >
                <AddCircle fontSize="small" />
              </IconButton>
            </Box>
          </NoSsr>
          <Box display="flex" alignItems="center">
            {/* <ColorPicker /> */}
            <Search />
            {/* <Notice /> */}
            <>
              <Tooltip
                TransitionComponent={Zoom}
                title="切换模式"
                placement="bottom"
                enterDelay={600}
                arrow
              >
                {customTheme.palette.type === "dark" ? (
                  <IconButton onClick={() => changeThemeType("light")}>
                    <Brightness1 color="inherit" />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => changeThemeType("dark")}>
                    <Brightness2 color="inherit" />
                  </IconButton>
                )}
              </Tooltip>
            </>
            <Account />
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      {/* <Toolbar></Toolbar> */}
    </>
  );
}
