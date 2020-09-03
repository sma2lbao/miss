import * as React from "react";
import { Image } from "@/components/base/Image";
import { DEFULAT_MOVIE_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Button, Box, Input } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
    },
    main: {
      position: "absolute",
      top: "50%",
      right: 0,
      width: "50%",
      padding: theme.spacing(0, 8),
      transform: "translate(0, -50%)",
      color: "#fff"
    }
  })
);

export interface EditTopHandles {
  title: string;

  sub_title?: string;

  description?: string;
}

export const EditTop: React.RefForwardingComponent<
  EditTopHandles,
  any
> = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [movie, setMovie] = React.useState({
    title: "",
    sub_title: "",
    description: ""
  });

  React.useImperativeHandle(ref, () => ({
    movie
  }));

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { dataset, value } = e.target;
    console.log(e.target.dataset);
    if (dataset.key) {
      setMovie({
        ...movie,
        [dataset.key]: value
      });
    }
  };

  return (
    <div className={classes.root}>
      <Image aspectRatio={16 / 9} src={DEFULAT_MOVIE_COVER} />
      <div className={classes.main}>
        <Typography gutterBottom variant="h4" component="div">
          <Input
            inputProps={{ "data-key": "title" }}
            value={movie.title}
            onChange={handleChange}
            // placeholder="请输入名字"
          />
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          <Input
            inputProps={{ "data-key": "sub_title" }}
            value={movie.sub_title}
            onChange={handleChange}
            // placeholder="请输入名字"
          />
        </Typography>
        {/* <div></div> */}
        <Typography variant="body2" component="div">
          <Input
            rows={4}
            inputProps={{ "data-key": "description" }}
            value={movie.description}
            onChange={handleChange}
            // placeholder="请输入名字"
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
});

export default EditTop;
