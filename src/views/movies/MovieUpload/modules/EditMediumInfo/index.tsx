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
  Input
} from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";
import { Image } from "@/components/base/Image";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";

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
    sourceWrap: {}
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
  const [medium, setMedium] = React.useState({
    name: "",
    url: "",
    alias_name: "",
    description: "",
    cover: ""
  });

  React.useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const reset = () => {
    setOpen(false);
    setMedium({
      name: "",
      url: "",
      alias_name: "",
      description: "",
      cover: ""
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { dataset, value } = e.target;
    if (dataset.key) {
      setMedium({
        ...medium,
        [dataset.key]: value
      });
    }
  };

  const handleChangeCover = () => {
    const imageUrl = prompt("image url.");
    if (imageUrl) {
      setMedium({
        ...medium,
        cover: imageUrl
      });
    }
  };

  const handleChangeSource = () => {
    const sourceUrl = prompt("source url.");
    if (sourceUrl) {
      setMedium({
        ...medium,
        cover: sourceUrl
      });
    }
  };

  const handleSave = () => {
    onSave && onSave(medium);
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
        <AppBar position="relative">
          <Toolbar>
            <Button onClick={handleSave} color="inherit">
              save
            </Button>
            <Button onClick={handleCancle} color="inherit">
              cancle
            </Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.root}>
          <FullScreen>
            <BodyScreen>
              <div className={classes.sourceWrap}>
                <Image aspectRatio={16 / 9} src={DEFULAT_MOVIE_COVER} />
                <div onClick={handleChangeCover}>add cover</div>
                <div onClick={handleChangeSource}>add source</div>
              </div>
            </BodyScreen>
          </FullScreen>
          <BodyScreen className={classes.body}>
            <ContentScreen className={classes.content}>
              {/* <VideoInfo /> */}
              {/* <NextPlay /> */}
              <Input
                inputProps={{ "data-key": "name" }}
                value={medium.name}
                onChange={handleChange}
                placeholder="name"
              />
              <Input
                inputProps={{ "data-key": "alias_name" }}
                value={medium.alias_name}
                onChange={handleChange}
                placeholder="alias_name"
              />
              <Input
                rows={4}
                inputProps={{ "data-key": "description" }}
                value={medium.description}
                onChange={handleChange}
                placeholder="description..."
              />
            </ContentScreen>
            <AiderScreen sticky className={classes.aider}>
              {/* <Comment /> */}
            </AiderScreen>
          </BodyScreen>
        </Box>
      </Dialog>
    </div>
  );
};
