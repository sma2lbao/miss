import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import Image from "@/components/Image";
// import Duration from "@/components/Duration";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      width: "100%"
    },
    poster: {
      position: "relative"
    },
    avatar: {
      width: 56,
      height: 56,
      border: "3px solid #fff",
      position: "absolute",
      bottom: -28,
      right: 10
    },
    duration: {
      position: "absolute",
      left: 10,
      bottom: 10
    }
  })
);

interface TopicProps {
  id: number;
  title: string;
  subtitle?: string;
  posters: string[];
  create_at: Date;
  duration?: number;
  description?: string;
  author: {
    username: string;
    nickname?: string;
    avatar: string;
  };
}

function Topic(props: TopicProps) {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.poster}>
        <Image
          aspectRatio={16 / 9}
          src={props.posters ? props.posters[0] : ""}
        />
        {/* {props.duration && (
          <Duration
            classes={{ root: classes.duration }}
            duration={props.duration}
          />
        )} */}
        {/* <Avatar
          className={classes.avatar}
          src={props.author && props.author.avatar}
        ></Avatar> */}
      </div>
      <Box p={1}>
        <Typography variant="body1" color="textSecondary">
          {/* {props.author.username} */}
          <Skeleton animation="wave" height="100%" width={60} />
        </Typography>
        <Typography variant="subtitle1">
          {/* {props.title} */}
          <Skeleton animation="wave" height="100%" width={100} />
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {/* {props.description || "暂无简介"} */}
          <Skeleton animation="wave" height="100%" width={400} />
          <Skeleton animation="wave" height="100%" width={100} />
        </Typography>
      </Box>
    </Box>
  );
}

Topic.defaultProps = {
  title: "卜算子·咏梅",
  subtitle: "",
  posters: [
    // "https://p3.ifengimg.com/2019_01/f7138d51-fa84-41d5-9a9b-90d03f69e020_3D28F77295E1A575FA4383C991A08E5B3712CD3D_w5000_h2143.jpg",
  ],
  create_at: new Date(),
  duration: 312312,
  description:
    "驿外断桥边，寂寞开无主。已是黄昏独自愁，更著风和雨。无意苦争春，一任群芳妒。零落成泥碾作尘，只有香如故。",
  author: {
    username: "sma2lbao",
    nickname: "nickname",
    avatar: ""
  }
} as Partial<TopicProps>;

export default Topic;
