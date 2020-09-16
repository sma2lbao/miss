import * as React from "react";
import { Image } from "@/components/base/Image";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Box,
  GridList,
  GridListTile
} from "@material-ui/core";

import { useEditableInput, EditableInput } from "@/components/app/Input";
import { FileUpload } from "@/components/app/FileUpload";

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
      padding: theme.spacing(2),
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
    posters: {},
    posterTool: {
      display: "none"
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

    const handleChangeCover = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const { dataset } = e.currentTarget;
      if (dataset.idx) {
        setCover(posters[dataset.idx]);
      }
    };

    return (
      <div className={classes.root}>
        <Image aspectRatio={16 / 9} src={DEFULAT_MOVIE_COVER} />
        <div className={classes.aider}>
          <div className={classes.aiderContent}>
            <GridList cellHeight="auto" className={classes.posters} cols={1}>
              {posters.map((poster, idx) => (
                <GridListTile key={poster} cols={1}>
                  <Image
                    aspectRatio={16 / 9}
                    src={poster}
                    alt={"poster" + idx}
                  />
                  <div className={classes.posterTool}>
                    <div data-idx={idx} onClick={handleRemovePoster}>
                      remove poster
                    </div>
                    <div data-idx={idx} onClick={handleChangeCover}>
                      {cover === poster ? "is cover" : "isn't cover"}
                    </div>
                  </div>
                </GridListTile>
              ))}
              <GridListTile cols={1}>
                <FileUpload onComplete={handleAddPoster}>add poster</FileUpload>
              </GridListTile>
            </GridList>
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.mainContent}>
            <Typography gutterBottom variant="h4" component="div">
              <EditableInput
                variant="h4"
                value={title}
                onChange={setTitle}
                placeholder="movie title"
              />
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              <EditableInput
                value={sub_title}
                onChange={setSubTitle}
                placeholder="请输入副标题"
              />
            </Typography>
            <Typography variant="body2" component="div">
              <EditableInput
                value={description}
                onChange={setDescription}
                placeholder="请输入电影描述..."
              />
            </Typography>
            <Box mt={3}>
              <Button disabled size="large" variant="contained" color="primary">
                播放
              </Button>
            </Box>
          </div>
        </div>
      </div>
    );
  }
);

export default EditTop;
