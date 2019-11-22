import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Typography } from "@material-ui/core";
import Person from "./components/Person";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Protfolio from "./components/Protfolio";
import SelfEvaluation from "./components/SelfEvaluation";
import Education from "./components/Education";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      height: "100vh"
      // overflow: "hidden"
    },
    person: {
      minWidth: 275,
      backgroundColor: theme.palette.background.paper,
      alignSelf: "flex-start",
      marginRight: theme.spacing(2)
    },
    nav: {
      minWidth: 275,
      backgroundColor: theme.palette.background.paper,
      alignSelf: "flex-start",
      marginLeft: theme.spacing(2)
    },
    sections: {
      flexGrow: 1,
      maxWidth: 900,
      minWidth: 600,
      overflow: "-moz-scrollbars-none",
      overflowY: "auto",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        width: "0 !important"
      }
    },
    title: {
      padding: theme.spacing(1, 2),
      background: theme.palette.background.paper
    },
    section: {
      // minHeight: 300
      "& + $section": {
        marginTop: theme.spacing(2)
      }
    },
    indicator: {
      // display: 'none',
      left: 0,
      right: 0
    }
  });
});

export default function Rusume() {
  const classes = useStyles();
  const [ctrl, setCtrl] = React.useState({
    tab: 0,
    type: "click"
  });
  const io = new IntersectionObserver(
    entries => {
      entries.map(entry => {
        const dom = entry.target as HTMLElement;
        if (entry.isIntersecting && dom.dataset.tab) {
          setCtrl({
            type: "scroll",
            tab: +dom.dataset.tab
          });
        }
      });
    },
    {
      threshold: [1]
    }
  );
  React.useEffect(() => {
    const dom = document.getElementById("section" + ctrl.tab);
    if (dom && ctrl.type === "click") {
      dom.scrollIntoView({ behavior: "smooth" });
    }
  }, [ctrl]);

  React.useEffect(() => {
    const parent = document.getElementById("sections");
    if (parent) {
      const children = parent.childNodes;
      children.forEach(el => io.observe(el as Element));
    }
    return () => io.disconnect();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.person}>
        <Person />
      </div>
      <div id="sections" className={classes.sections}>
        <div id={"section" + 0} data-tab={0} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            段落一
          </Typography>
          <Work />
        </div>
        <div id={"section" + 1} data-tab={1} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            段落二
          </Typography>
          <Experience />
        </div>
        <div id={"section" + 2} data-tab={2} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            段落三
          </Typography>
          <Protfolio />
        </div>
        <div id={"section" + 3} data-tab={3} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            段落四
          </Typography>
          <SelfEvaluation />
        </div>
        <div id={"section" + 4} data-tab={4} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            段落五
          </Typography>
          <Education />
        </div>
      </div>
      <div className={classes.nav}>
        <Tabs
          orientation="vertical"
          classes={{ indicator: classes.indicator }}
          value={ctrl.tab}
          onChange={(e, val) => setCtrl({ tab: val, type: "click" })}
        >
          <Tab label="第一段" />
          <Tab label="第二段" />
          <Tab label="第三段" />
          <Tab label="第四段" />
          <Tab label="第五段" />
        </Tabs>
      </div>
    </div>
  );
}
