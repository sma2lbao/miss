import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Recommend from "./components/Recommend";
import Featured from "./components/Featured";
import Topic from "./components/Topic";
import Banner from "./components/Banner";
import Aider from "./components/Aider";
import { Divider, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    view: {
      height: "100%",
      display: "flex",
      justifyContent: "center"
    },
    main: {
      maxWidth: 1200,
      flex: 3,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
      // borderRight: theme.palette.divider
      // display: 'none'
    },
    head: {
      display: "flex",
      alignItems: "flex-end",
      padding: theme.spacing(4, 0)
    },
    headItem: {
      flex: 1,
      overflow: "hidden",
      "& + &": {
        marginLeft: theme.spacing(4)
      }
    },
    aider: {
      maxWidth: 430,
      width: "100%",
      height: "100%",
      backgroundColor: "#fff"
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.view}>
      <div className={classes.main}>
        <div className={classes.head}>
          <div className={classes.headItem}>
            <Featured />
          </div>
          {/* <div className={classes.headItem}>
            <Topic />
          </div> */}
        </div>
        {/* <Divider /> */}
        {/* <Recommend /> */}
      </div>
      {/* <div className={classes.aider}>
        <Aider />
      </div> */}
    </div>
  );
}
