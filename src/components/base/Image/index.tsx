import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { AspectRatioBox } from "../AspectRatioBox";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      objectFit: (props: ImageProp) => {
        return props.objectFit || "cover";
      },
      width: "100%",
      height: "100%"
    }
  })
);

interface ImageProp {
  aspectRatio?: number; // 宽高比
  src?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  objectFit?: any;
}

enum ImageStatus {
  Loading = 0,
  Success = 1,
  Failuare = -1
}

export const Image: React.FC<ImageProp> = (props: ImageProp) => {
  const classes = useStyles(props);
  const { src, alt, aspectRatio, width, height } = props;

  // status: 0:加载中 1: 加载成功 -1:加载失败
  const [status, setStatus] = React.useState(ImageStatus.Loading);

  const _loadImage = () => {
    setStatus(ImageStatus.Success);
  };

  const _loadImageFail = () => {
    setStatus(ImageStatus.Failuare);
  };

  return (
    <AspectRatioBox ratio={aspectRatio} width={width} height={height}>
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
        <>
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
        </>
      )}
    </AspectRatioBox>
  );
};

export default Image;
