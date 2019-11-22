import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";
import Image from "@/components/Image";
import About from "./components/About";
import Cast from "./components/Cast";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    poster: {
      width: "100%"
    },
    content: {
      width: 1200
    },
    aider: {
      width: 430
    }
  })
);

export default function Movie() {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  return (
    <Box display="flex">
      <div className={classes.content}>
        <Tabs value={tab} onChange={(e, val) => setTab(val)}>
          <Tab label="Tv"></Tab>
          <Tab label="Related Videos"></Tab>
          <Tab label="About"></Tab>
        </Tabs>
        <div>{tab === 2 && <About />}</div>
      </div>
      <div className={classes.aider}>
        <Cast />
      </div>
    </Box>
  );
}
