import * as React from "react";
import SwipeableViews from "react-swipeable-views";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";

// const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Banner() {
  return (
    <div>
      <SwipeableViews enableMouseEvents resistance>
        <div>
          <Image src="http://static.runoob.com/images/demo/demo4.jpg" />
        </div>
        <div>
          <Image src="http://static.runoob.com/images/demo/demo4.jpg" />
        </div>
        <div>
          <Image src="http://static.runoob.com/images/demo/demo4.jpg" />
        </div>
      </SwipeableViews>
    </div>
  );
}
