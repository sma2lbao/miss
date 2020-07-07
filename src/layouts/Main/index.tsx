import * as React from "react";
import {
  makeStyles,
  createStyles,
  Theme
  // useTheme
} from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { Sidebar, Topbar } from "./modules";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    },
    drawer: {
      width: 290
    },
    shiftMain: {
      marginLeft: 290
    },
    main: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    }
  })
);

interface MainProps {
  children?: React.ReactNode;
  hideSidebar?: boolean;
}

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { children, hideSidebar } = props;
  const classes = useStyles();
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isDesktop = useMediaQuery("(min-width: 1600px)");
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <div className={classes.root}>
      <Topbar
        openSidebarHandler={() => setOpenSidebar(hideSidebar ? false : true)}
      />
      <div>
        {!hideSidebar && (
          <Sidebar
            classes={{ paper: classes.drawer }}
            open={openSidebar}
            variant={isDesktop ? "persistent" : "temporary"}
            closeSidebarHandler={() => setOpenSidebar(false)}
          />
        )}
        <main
          className={clsx(classes.main, {
            [classes.shiftMain]: openSidebar && isDesktop
          })}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export const MainWithoutSidebar: React.FC = props => {
  return <Main hideSidebar>{props.children}</Main>;
};

export default Main;
