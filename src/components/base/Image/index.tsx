import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: (props: ImageProp) => {
        return props.height || "auto";
      },
      width: (props: ImageProp) => {
        return props.width || "100%";
      },
      fontSize: 0,
      overflow: "hidden"
    },
    aspect: {
      paddingTop: (props: ImageProp) => {
        if (props.aspectRatio) {
          return `calc(1 / ${props.aspectRatio} * 100%)`;
        } else {
          return 0;
        }
      },
      position: "relative",
      backgroundColor: "transparent"
    },
    image: {
      position: (props: ImageProp) => {
        if (props.aspectRatio) {
          return "absolute";
        } else {
          return "relative";
        }
      },
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      objectFit: "cover"
    },
    container: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  })
);

interface ImageProp {
  aspectRatio?: number; // 宽高比
  src?: string;
  classes?: Object;
  width?: number | string;
  height?: number | string;
  alt?: string;
}

enum ImageStatus {
  Loading = 0,
  Success = 1,
  Failuare = -1
}

export const Image: React.FC<ImageProp> = (props: ImageProp) => {
  const classes = useStyles(props);
  const { src, alt } = props;

  // status: 0:加载中 1: 加载成功 -1:加载失败
  const [status, setStatus] = React.useState(ImageStatus.Loading);

  const _loadImage = () => {
    setStatus(ImageStatus.Success);
  };

  const _loadImageFail = () => {
    setStatus(ImageStatus.Failuare);
  };

  return (
    <div className={classes.root}>
      {props.aspectRatio && (
        <div className={classes.aspect}>
          {src && status !== ImageStatus.Failuare && (
            <img
              alt={alt}
              className={classes.image}
              src={src}
              onLoad={_loadImage}
              onError={_loadImageFail}
            />
          )}
          {status !== ImageStatus.Success && (
            <div className={classes.container}>
              {status === ImageStatus.Loading && (
                <Skeleton
                  variant="rect"
                  animation="wave"
                  height="100%"
                  width="100%"
                />
              )}
              {status === ImageStatus.Failuare && (
                <Skeleton
                  variant="rect"
                  animation="wave"
                  height="100%"
                  width="100%"
                />
              )}
            </div>
          )}
        </div>
      )}
      {!props.aspectRatio && (
        <>
          {src && status !== ImageStatus.Failuare && (
            <img
              className={classes.image}
              src={src}
              alt=""
              onLoad={_loadImage}
              onError={_loadImageFail}
            />
          )}
          {status !== ImageStatus.Success && (
            <div className={classes.container}>
              {status === ImageStatus.Loading && (
                <Skeleton
                  variant="rect"
                  animation="wave"
                  height="100%"
                  width="100%"
                />
              )}
              {status === ImageStatus.Failuare && (
                <Skeleton
                  variant="rect"
                  animation="wave"
                  height="100%"
                  width="100%"
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Image;
