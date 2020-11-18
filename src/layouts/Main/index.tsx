import * as React from "react";
import {
  makeStyles,
  createStyles,
  Theme
  // useTheme
} from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Sidebar, Topbar } from "./modules";
import clsx from "clsx";
import { useSidebar } from "./modules/Sidebar/useSidebar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      backgroundColor: theme.palette.background.default
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
      }),
      // minHeight: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
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
  const { isLargeDesktop, hasExpand, setHasExpand } = useSidebar();
  return (
    <div className={classes.root}>
      <Topbar />
      <div>
        {!hideSidebar && (
          <Sidebar
            hasExpand={hasExpand}
            setHasExpand={setHasExpand}
            variant={isLargeDesktop ? "persistent" : "temporary"}
            classes={{ paper: classes.drawer }}
          />
        )}
        <main
          className={clsx(classes.main, {
            [classes.shiftMain]: hasExpand && isLargeDesktop && !hideSidebar
          })}
        >
          <Toolbar />
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
