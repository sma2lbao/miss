import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Recommend, Featured, Topic, Aider } from "./modules";
import { Divider } from "@material-ui/core";
import { BodyScreen, ContentScreen, AiderScreen } from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: "#fff",
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    aider: {
      backgroundColor: "#fff",
      width: "100%",
      padding: theme.spacing(2, 2),
      borderLeft: "1px solid",
      borderColor: theme.palette.divider
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
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <BodyScreen>
      <ContentScreen className={classes.main}>
        <div className={classes.head}>
          <div className={classes.headItem}>
            <Featured />
          </div>
          <div className={classes.headItem}>
            <Topic />
          </div>
        </div>
        <Divider />
        <Recommend />
      </ContentScreen>
      <AiderScreen sticky className={classes.aider}>
        <Aider />
      </AiderScreen>
    </BodyScreen>
  );
}
