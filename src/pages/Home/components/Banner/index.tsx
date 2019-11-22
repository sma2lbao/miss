import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Image from "@/components/Image";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const TOP_MOVIES = gql`
  query {
    top_movies {
      title
    }
  }
`;

const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function Banner() {
  const { loading, data, error } = useQuery(TOP_MOVIES);
  console.log(data, error);

  const classes = useStyles();

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
