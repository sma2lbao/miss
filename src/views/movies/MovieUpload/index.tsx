import * as React from "react";
import {
  EditAbout,
  EditCast,
  EditMain,
  EditTop,
  EditCastHandles,
  EditTopHandles,
  EditMainHandles,
  EditAboutHandles
} from "./modules";
import {
  ContentScreen,
  AiderScreen,
  FullScreen,
  BodyScreen
} from "@/layouts/PageLayout";
import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Tabs,
  Tab
} from "@material-ui/core";
import { useCreateMovieMutation } from "@/schema";
import { useRouterHelper } from "@/hooks";
import Confirm from "@/components/base/Confirm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1, 6),
      borderRight: `1px solid ${theme.palette.divider}`
    }
  })
);

export const MovieUpload: React.FC = () => {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [tab, setTab] = React.useState(0);
  const topRef = React.createRef<EditTopHandles>();
  const mainRef = React.createRef<EditMainHandles>();
  const aboutRef = React.createRef<EditAboutHandles>();
  const castRef = React.createRef<EditCastHandles>();

  const [create_movie] = useCreateMovieMutation({
    onCompleted() {
      Confirm.dialog({
        title: "提示",
        content: "上传成功。"
      }).then(() => {
        RouterHelper.gotoHome();
      });
    }
  });

  const handleCreateMovie = () => {
    const topFields = topRef.current;
    const mainFields = mainRef.current;
    const aboutFields = aboutRef.current;
    const castFields = castRef.current;

    create_movie({
      variables: {
        movie: {
          title: topFields?.title || "",
          cover: topFields?.cover || "",
          posters: topFields?.posters,
          description: topFields?.description,
          credits: castFields?.credits,
          about: aboutFields?.about,
          sources: mainFields?.mediums
        }
      }
    });
  };

  return (
    <Box>
      <FullScreen>
        <BodyScreen>
          <EditTop ref={topRef} />
        </BodyScreen>
      </FullScreen>
      <BodyScreen>
        <ContentScreen className={classes.main}>
          <Tabs value={tab} onChange={(e, val) => setTab(val)}>
            <Tab label="信息"></Tab>
            <Tab label="相关推荐" disabled></Tab>
            <Tab label="关于"></Tab>
          </Tabs>
          <div>
            <div hidden={tab !== 0}>
              <EditMain ref={mainRef} />
            </div>
            {/* {tab === 1 && <Relative />} */}
            <div hidden={tab !== 2}>
              <EditAbout ref={aboutRef} />
            </div>
            <div>
              <div onClick={handleCreateMovie}>create</div>
            </div>
          </div>
        </ContentScreen>
        <AiderScreen>
          <EditCast ref={castRef} />
        </AiderScreen>
      </BodyScreen>
    </Box>
  );
};
export default MovieUpload;
