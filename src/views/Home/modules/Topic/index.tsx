import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
// import { Skeleton } from "@material-ui/lab";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { MediaNormal } from "@/components/app/Media";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import clsx from "clsx";
import { useCurrentTopicQuery } from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      display: "flex",
      alignItems: "flex-end",
      padding: theme.spacing(4, 0)
    },
    headItem: {
      flex: 1,
      overflow: "hidden",
      "& + &": {
        marginLeft: theme.spacing(4)
      }
    },
    bannerRoot: {
      flex: 1,
      overflow: "hidden"
    },
    banner: {
      paddingRight: "50%"
    },
    bannerItem: {
      minHeight: 200,
      margin: theme.spacing(0, 0.25),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  })
);

function Topic() {
  const [index, setIndex] = React.useState(0);
  const classes = useStyles();
  const { data, loading, error } = useCurrentTopicQuery();
  // console.log(data);

  return (
    <>
      {data ? (
        <div className={classes.head}>
          <div className={classes.headItem}>
            <Box>
              <Box mb={3}>
                {/* <Typography variant="h6" gutterBottom>
            每周精选
          </Typography> */}
                <Typography variant="h5" gutterBottom>
                  {data?.current_topic.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data?.current_topic.description}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box>
                  <IconButton size="small" onClick={() => setIndex(index - 1)}>
                    <KeyboardArrowLeft />
                  </IconButton>
                </Box>
                <div className={classes.bannerRoot}>
                  <VirtualizeSwipeableViews
                    className={classes.banner}
                    index={index}
                    onChangeIndex={index => setIndex(index)}
                    enableMouseEvents
                    slideRenderer={params => {
                      // const { key } = params;
                      // const templateIndex = ((index % 6) + 6) % 6;
                      // console.log(mod(index, 3));
                      const items = data?.current_topic.top_movies || [];
                      return (
                        <>
                          {items.map((item, idx) => {
                            return (
                              <div
                                key={idx}
                                className={clsx(classes.bannerItem)}
                              >
                                <MediaNormal />
                              </div>
                            );
                          })}
                        </>
                      );
                    }}
                  />
                </div>
                <Box>
                  <IconButton size="small" onClick={() => setIndex(index + 1)}>
                    <KeyboardArrowRight />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </div>
          <div className={classes.headItem}>
            <MediaNormal />
          </div>
        </div>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </>
  );
}

export default Topic;
