import * as React from "react";
import Top from "./components/Top";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Divider } from "@material-ui/core";
import Videos from "./components/Videos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      backgroundColor: theme.palette.background.paper,
      height: "100%"
    },
    main: {
      maxWidth: 1200
    },
    aider: {
      width: "430px"
    }
  })
);

export default function Profile() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <div className={classes.page}>
      <div className={classes.aider}></div>
      <div className={classes.main}>
        <Top />
        <Divider />
        <div>
          <Tabs value={tab} onChange={(e, value) => setTab(value)}>
            <Tab label="视频"></Tab>
            <Tab label="列表"></Tab>
            <Tab label="社区"></Tab>
          </Tabs>
          <div>{tab === 0 && <Videos />}</div>
        </div>
      </div>
    </div>
  );
}
