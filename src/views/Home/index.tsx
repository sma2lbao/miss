import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Recommend, Topic, Aider } from "./modules";
import { Divider, Collapse, Link } from "@material-ui/core";
import {
  BodyScreen,
  ContentScreen,
  AiderScreen,
  FullScreen
} from "@/layouts/PageLayout";
import { useReactiveVar } from "@apollo/client";
import { noticeFlagVar } from "@/graphql/variables";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette.background.paper,
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8)
    },
    aider: {
      backgroundColor: theme.palette.background.paper,
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
    },
    alertWrap: {
      flex: 1
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const notice_flag = useReactiveVar(noticeFlagVar);

  return (
    <FullScreen>
      <BodyScreen>
        <Collapse in={notice_flag} className={classes.alertWrap}>
          <Alert severity="warning" onClose={() => noticeFlagVar(false)}>
            {/* <AlertTitle>重要消息</AlertTitle> */}
            网站功能正在完善中，如果在使用过程中遇到任何问题欢迎提bug。
            <Link
              target="_blank"
              href="https://github.com/sma2lbao/miss/issues"
              color="inherit"
            >
              <strong>去提Bug！</strong>
            </Link>
          </Alert>
        </Collapse>
      </BodyScreen>
      <BodyScreen>
        <ContentScreen className={classes.main}>
          <Topic />
          <Divider />
          <Recommend />
        </ContentScreen>
        <AiderScreen sticky className={classes.aider}>
          <Aider />
        </AiderScreen>
      </BodyScreen>
    </FullScreen>
  );
}
