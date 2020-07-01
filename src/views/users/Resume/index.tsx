import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tabs, Tab, Typography } from "@material-ui/core";
import {
  Person,
  Work,
  Experience,
  Protfolio,
  SelfEvaluation,
  Education
} from "./modules";

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
      entries.forEach(entry => {
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
      children.forEach(el => io?.observe(el as Element));
    }
    return () => io?.disconnect();
  }, [io]);

  return (
    <div className={classes.root}>
      <div className={classes.person}>
        <Person />
      </div>
      <div id="sections" className={classes.sections}>
        <div id={"section" + 0} data-tab={0} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            工作经历
          </Typography>
          <Work />
        </div>
        <div id={"section" + 1} data-tab={1} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            项目经历
          </Typography>
          <Experience />
        </div>
        <div id={"section" + 2} data-tab={2} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            作品集
          </Typography>
          <Protfolio />
        </div>
        <div id={"section" + 3} data-tab={3} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            自我描述
          </Typography>
          <SelfEvaluation />
        </div>
        <div id={"section" + 4} data-tab={4} className={classes.section}>
          <Typography className={classes.title} variant="h6">
            教育经历
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
          <Tab label="工作经历" />
          <Tab label="项目经历" />
          <Tab label="作品集" />
          <Tab label="自我描述" />
          <Tab label="教育经历" />
        </Tabs>
      </div>
    </div>
  );
}
