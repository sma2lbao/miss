import * as React from "react";
import { Image } from "@/components/base/Image";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Box,
  Input,
  GridList,
  GridListTile
} from "@material-ui/core";

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
      width: "50%"
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
    posters: {}
  })
);

export interface EditTopHandles {
  title: string;

  sub_title?: string;

  description?: string;
}

export const EditTop = React.forwardRef<EditTopHandles, unknown>(
  (props, ref) => {
    const classes = useStyles();
    const [movie, setMovie] = React.useState({
      title: "",
      sub_title: "",
      description: ""
    });
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
      ...movie,
      posters,
      cover
    }));

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const { dataset, value } = e.target;
      if (dataset.key) {
        setMovie({
          ...movie,
          [dataset.key]: value
        });
      }
    };

    const handleAddPoster = () => {
      const imageUrl = prompt("image url.");
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
          <GridList className={classes.posters} cols={1}>
            {posters.map((poster, idx) => (
              <GridListTile key={poster} cols={1}>
                <img src={poster} alt={"poster" + idx} />
                <div data-idx={idx} onClick={handleRemovePoster}>
                  remove poster
                </div>
                <div data-idx={idx} onClick={handleChangeCover}>
                  {cover === poster ? "is cover" : "isn't cover"}
                </div>
              </GridListTile>
            ))}
            <GridListTile cols={1} onClick={handleAddPoster}>
              <img alt="add poster" />
            </GridListTile>
          </GridList>
        </div>
        <div className={classes.main}>
          <Typography gutterBottom variant="h4" component="div">
            <Input
              inputProps={{ "data-key": "title" }}
              value={movie.title}
              onChange={handleChange}
              placeholder="请输入电影名"
            />
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            <Input
              inputProps={{ "data-key": "sub_title" }}
              value={movie.sub_title}
              onChange={handleChange}
              placeholder="请输入副标题"
            />
          </Typography>
          {/* <div></div> */}
          <Typography variant="body2" component="div">
            <Input
              rows={4}
              inputProps={{ "data-key": "description" }}
              value={movie.description}
              onChange={handleChange}
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
    );
  }
);

export default EditTop;
