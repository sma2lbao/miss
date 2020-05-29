import * as React from "react";
import SwipeableViews from "react-swipeable-views";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/base/Image";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const TOP_MOVIES = gql`
  query {
    top_movies {
      title
    }
  }
`;

// const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Banner() {
  const { data, error } = useQuery(TOP_MOVIES);
  console.log(data, error);

  // const classes = useStyles();

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
