import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Tab, Box, Tabs } from "@material-ui/core";
import { Main, Relative, Cast, About, Top } from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import { useShadowQuery, ShadowQuery } from "@/schema";
import { useParams } from "react-router";
import { SpecialBox } from "@/components/public/SpecialBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1, 6),
      borderRight: `1px solid ${theme.palette.divider}`
    },
    content: {
      flex: 1
    }
  })
);

export const ShadowContext = React.createContext<ShadowQuery | undefined>(
  undefined
);

enum TabStatus {
  INFO = 0,
  RELATIVE = 1,
  ABOUT = 2
}

export default function Shadow() {
  const { id } = useParams();
  const { data, error, loading } = useShadowQuery({
    variables: {
      id: id
    }
  });

  const classes = useStyles();
  const [tab, setTab] = React.useState(TabStatus.INFO);

  return (
    <Box>
      {data?.shadow ? (
        <ShadowContext.Provider value={data}>
          <FullScreen>
            <BodyScreen>
              <Top />
            </BodyScreen>
          </FullScreen>
          <BodyScreen>
            <ContentScreen className={classes.main}>
              <Tabs value={tab} onChange={(_, val) => setTab(val)}>
                <Tab label="信息"></Tab>
                <Tab label="相关推荐"></Tab>
                <Tab label="关于"></Tab>
              </Tabs>
              <div className={classes.content}>
                <div hidden={tab !== TabStatus.INFO}>
                  <Main />
                </div>
                <div hidden={tab !== TabStatus.RELATIVE}>
                  <Relative />
                </div>
                <div hidden={tab !== TabStatus.ABOUT}>
                  <About html={data?.shadow?.description || ""} />
                </div>
              </div>
            </ContentScreen>
            <AiderScreen>
              <Cast />
            </AiderScreen>
          </BodyScreen>
        </ShadowContext.Provider>
      ) : (
        <SpecialBox error={!!error} loading={loading} />
      )}
    </Box>
  );
}
