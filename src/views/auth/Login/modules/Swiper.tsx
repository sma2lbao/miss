import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "@/components/base/Image";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      display: "flex"
    },
    image: {
      width: "100%",
      height: "100%"
      // objectFit: "cover",
    }
  })
);

interface SwiperProps {
  images: string[];
}

function Swiper(props: SwiperProps) {
  const classes = useStyles();
  const { images } = props;
  const [idx, setIdx] = React.useState(0);

  const handleChangeIndex = (idx: number) => {
    setIdx(idx);
  };

  return (
    <AutoPlaySwipeableViews
      className={classes.root}
      enableMouseEvents
      onChangeIndex={handleChangeIndex}
      index={idx}
    >
      {images.map((item, i) => {
        return (
          <div className={classes.image} key={i}>
            <Image height="100%" src={item} />
          </div>
        );
      })}
    </AutoPlaySwipeableViews>
  );
}

Swiper.defaultProps = {
  images: ["http://sma2lbao.cn/files/miss/2020/11/16/1605512904911"]
} as Partial<SwiperProps>;

export default Swiper;
