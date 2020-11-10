import * as React from "react";
import {
  Dialog,
  Toolbar,
  AppBar,
  Button,
  Box,
  Theme,
  makeStyles,
  createStyles,
  Fab
} from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";
import { Image } from "@/components/base/Image";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import { Placeholder } from "@/components/base/Placeholder";
import { FileUpload } from "@/components/app/FileUpload";
import ImageIcon from "@material-ui/icons/Image";
import { MovieCreation } from "@material-ui/icons";
import { ShadowPlayer } from "@/components/app/Player";
import { EditInfo, EditInfoHandles } from "./EditInfo";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    body: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      margin: "0 auto"
    },
    content: {
      padding: theme.spacing(2, 5),
      borderRight: `1px solid ${theme.palette.divider}`
    },
    aider: {
      padding: theme.spacing(2, 4),
      height: "100%",
      overflow: "auto"
    },
    sourceWrap: {
      width: "100%",
      position: "relative"
    },
    toolbarWrap: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    imageFab: {
      position: "absolute",
      left: theme.spacing(4),
      bottom: theme.spacing(4)
    },
    shadowFab: {
      position: "absolute",
      right: theme.spacing(4),
      bottom: theme.spacing(4)
    }
  })
);

export interface EditMediumInfoProp {
  open: boolean;

  onSave?(medium: unknown): void;

  onCancel?(): void;
}

export const EditMediumInfo: React.FC<EditMediumInfoProp> = (
  props: EditMediumInfoProp
) => {
  const { onSave, onCancel } = props;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const [cover, setCover] = React.useState("");

  const infoRef = React.createRef<EditInfoHandles>();

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const reset = () => {
    setOpen(false);
    setUrl("");
    setCover("");
  };

  const handleChangeCover = imageUrl => {
    if (imageUrl) {
      setCover(imageUrl);
    }
  };

  const handleChangeSource = sourceUrl => {
    if (sourceUrl) {
      setUrl(sourceUrl);
    }
  };

  const handleSave = () => {
    onSave &&
      onSave({
        url,
        cover,
        name: infoRef.current?.name,
        sub_name: infoRef.current?.sub_name,
        description: infoRef.current?.description
      });
    handleCancle();
  };

  const handleCancle = () => {
    setOpen(false);
    onCancel && onCancel();
    reset();
  };

  return (
    <div>
      <Dialog open={open} fullScreen onClose={handleCancle}>
        <AppBar position="fixed">
          <Toolbar className={classes.toolbarWrap}>
            <Button onClick={handleSave} color="inherit">
              保存
            </Button>
            <Button onClick={handleCancle} color="inherit">
              取消
            </Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.root}>
          <Toolbar />
          <FullScreen>
            <BodyScreen>
              <div className={classes.sourceWrap}>
                {url ? (
                  <ShadowPlayer
                    url={url}
                    light={cover ? cover : DEFULAT_SHADOW_COVER}
                  />
                ) : (
                  <Image
                    aspectRatio={16 / 9}
                    src={cover ? cover : DEFULAT_SHADOW_COVER}
                  />
                )}
                <FileUpload custom onComplete={handleChangeCover}>
                  <Fab
                    color={url ? "primary" : "default"}
                    size="medium"
                    className={classes.imageFab}
                  >
                    <ImageIcon />
                  </Fab>
                </FileUpload>
                <FileUpload custom onComplete={handleChangeSource}>
                  <Fab
                    color={cover ? "primary" : "default"}
                    size="medium"
                    className={classes.shadowFab}
                  >
                    <MovieCreation />
                  </Fab>
                </FileUpload>
              </div>
            </BodyScreen>
          </FullScreen>
          <BodyScreen className={classes.body}>
            <ContentScreen className={classes.content}>
              <EditInfo ref={infoRef} />
            </ContentScreen>
            <AiderScreen sticky className={classes.aider}>
              <Placeholder title="评论区" />
            </AiderScreen>
          </BodyScreen>
        </Box>
      </Dialog>
    </div>
  );
};
