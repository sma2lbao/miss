import * as React from "react";
import { Image } from "@/components/base/Image";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  GridList,
  GridListTile,
  IconButton,
  Switch,
  Tooltip,
  Zoom
} from "@material-ui/core";

import { useEditableInput, EditableInput } from "@/components/app/Input";
import { FileUpload } from "@/components/app/FileUpload";
import { PlayCircleOutline, Delete } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { AspectRatioBox } from "@/components/base/AspectRatioBox";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
    },
    aider: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "45%",
      padding: theme.spacing(8)
    },
    aiderContent: {
      width: "50%",
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      maxHeight: "100%",
      background: "rgba(0, 0, 0, .1)",
      backdropFilter: "blur(8px)",
      overflow: "auto"
    },
    main: {
      position: "absolute",
      top: "50%",
      right: 0,
      width: "50%",
      padding: theme.spacing(0, 8),
      transform: "translate(0, -50%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column"
    },
    mainContent: {
      background: "rgba(0, 0, 0, .1)",
      backdropFilter: "blur(8px)",
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius
    },
    poster: {
      position: "relative"
    },
    posterTool: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      visibility: "hidden",
      position: "absolute",
      padding: theme.spacing(1),
      top: 0,
      left: 0,
      width: "100%",
      color: "#fff",
      "$poster:hover &": {
        visibility: "initial"
      }
    }
  })
);

export interface EditTopHandles {
  title: string;

  sub_title?: string;

  description?: string;

  posters?: string[];

  cover: string;
}

export const EditTop = React.forwardRef<EditTopHandles, unknown>(
  (props, ref) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [title, setTitle] = useEditableInput("");
    const [sub_title, setSubTitle] = useEditableInput("");
    const [description, setDescription] = useEditableInput("");
    const [posters, setPosters] = React.useState<string[]>([]);
    const [cover, setCover] = React.useState<string>("");

    React.useEffect(() => {
      if (posters && posters.length > 0) {
        if (!cover || !posters.includes(cover)) setCover(posters[0]);
      } else {
        setCover("");
      }
    }, [cover, posters]);

    React.useImperativeHandle(ref, () => ({
      title,
      sub_title,
      description,
      posters,
      cover
    }));

    const handleAddPoster = imageUrl => {
      if (imageUrl && !posters.includes(imageUrl)) {
        setPosters([...posters, imageUrl]);
      }
    };

    const handleRemovePoster = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const result = window.confirm("delete?");
      if (result) {
        const { dataset } = e.currentTarget;
        if (dataset.idx) {
          posters.splice(+dataset.idx, 1);
          setPosters([...posters]);
        }
      }
    };

    const handleChangeCover = (idx: number) => {
      setCover(posters[idx]);
    };

    return (
      <div className={classes.root}>
        {posters.length ? (
          <AutoPlaySwipeableViews
            onChangeIndex={step => setActiveStep(step)}
            index={activeStep}
          >
            {posters.map((image, idx) => {
              return <Image key={idx} aspectRatio={16 / 9} src={image} />;
            })}
          </AutoPlaySwipeableViews>
        ) : (
          <Image aspectRatio={16 / 9} src={DEFULAT_SHADOW_COVER} />
        )}

        <div className={classes.aider}>
          <div className={classes.aiderContent}>
            <GridList cellHeight="auto" cols={1}>
              {posters.map((poster, idx) => (
                <GridListTile key={poster} cols={1} className={classes.poster}>
                  <Image
                    aspectRatio={16 / 9}
                    src={poster}
                    alt={"poster" + idx}
                  />
                  <div className={classes.posterTool}>
                    <div>
                      <Tooltip
                        TransitionComponent={Zoom}
                        title="设成封面"
                        placement="bottom"
                        arrow
                      >
                        <Switch
                          size="small"
                          color="primary"
                          checked={cover === poster}
                          onChange={() => handleChangeCover(idx)}
                        />
                      </Tooltip>
                    </div>
                    <div data-idx={idx} onClick={handleRemovePoster}>
                      <Tooltip
                        TransitionComponent={Zoom}
                        title="删除"
                        placement="bottom"
                        arrow
                      >
                        <IconButton size="medium">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                </GridListTile>
              ))}
              <GridListTile cols={1}>
                <AspectRatioBox ratio={16 / 9}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <FileUpload onComplete={handleAddPoster} title="上传海报" />
                  </Box>
                </AspectRatioBox>
              </GridListTile>
            </GridList>
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.mainContent}>
            <EditableInput
              variant="h4"
              value={title}
              onChange={setTitle}
              placeholder="请输入标题"
            />
            <EditableInput
              variant="subtitle1"
              value={sub_title}
              onChange={setSubTitle}
              placeholder="请输入副标题"
            />
            <EditableInput
              variant="body2"
              value={description}
              onChange={setDescription}
              placeholder="请输入电影描述..."
            />
            <Box mt={3}>
              <IconButton size="medium" disabled>
                <PlayCircleOutline fontSize="large" />
              </IconButton>
            </Box>
          </div>
        </div>
      </div>
    );
  }
);

export default EditTop;
