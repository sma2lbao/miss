import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "@/components/Image";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: "100%",
      height: "100%"
    }
  })
);

interface SwiperProps {
  images: string[];
}

function Swiper(props: SwiperProps) {
  const classes = useStyles();
  const { images } = props;

  return (
    <div>
      <AutoPlaySwipeableViews enableMouseEvents index={0}>
        {images.map((item, i) => {
          return (
            <div className={classes.image} key={i}>
              <Image src={item} />
            </div>
          );
        })}
      </AutoPlaySwipeableViews>
    </div>
  );
}

Swiper.defaultProps = {
  images: [
    "https://pic1.zhimg.com/v2-cc17d8b31fe162fdbfadba1d18b7836e_1200x500.jpg",
    "http://n.sinaimg.cn/collect/crawl/20160224/ZFh0-fxprucv9824132.jpg"
  ]
} as Partial<SwiperProps>;

export default Swiper;
