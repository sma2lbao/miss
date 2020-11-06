import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography, IconButton } from "@material-ui/core";
// import { Skeleton } from "@material-ui/lab";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { MediaNormal } from "@/components/app/Media";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import clsx from "clsx";
import { useCurrentTopicQuery } from "@/schema";
import { SpecialBox } from "@/components/public/SpecialBox";
import { Placeholder } from "@/components/base/Placeholder";
import { useRouterHelper } from "@/hooks";

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
  const RouterHelper = useRouterHelper();

  return (
    <>
      {data ? (
        <div className={classes.head}>
          <div className={classes.headItem}>
            <Box>
              <Box mb={3}>
                <Typography variant="h6" gutterBottom>
                  精选
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {data?.current_topic.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data?.current_topic.description}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                {(() => {
                  const top_shadows = data?.current_topic.top_shadows || [];
                  if (top_shadows.length > 2) {
                    return (
                      <React.Fragment>
                        <div>
                          <IconButton
                            size="small"
                            onClick={() => setIndex(index - 1)}
                          >
                            <KeyboardArrowLeft />
                          </IconButton>
                        </div>
                        <div className={classes.bannerRoot}>
                          <VirtualizeSwipeableViews
                            className={classes.banner}
                            index={index}
                            onChangeIndex={index => setIndex(index)}
                            enableMouseEvents
                            slideRenderer={params => {
                              const { key, index } = params;
                              const items =
                                data?.current_topic.top_shadows || [];
                              const idx = mod(index, items.length);
                              let shadow = items[idx];
                              if (shadow) {
                                return (
                                  <div
                                    key={key}
                                    className={clsx(classes.bannerItem)}
                                  >
                                    <MediaNormal
                                      {...items[idx]}
                                      onClickRoot={() =>
                                        RouterHelper.gotoShadow(shadow.id)
                                      }
                                      onClickAuthor={() => () =>
                                        RouterHelper.gotoProfile(
                                          shadow.author.username
                                        )}
                                    />
                                  </div>
                                );
                              }
                            }}
                          />
                        </div>
                        <div>
                          <IconButton
                            size="small"
                            onClick={() => setIndex(index + 1)}
                          >
                            <KeyboardArrowRight />
                          </IconButton>
                        </div>
                      </React.Fragment>
                    );
                  } else if (
                    top_shadows.length > 0 &&
                    top_shadows.length <= 2
                  ) {
                    return (
                      <React.Fragment>
                        <div className={classes.bannerRoot}>
                          {top_shadows.map((item, idx) => {
                            return (
                              <div
                                key={idx}
                                className={clsx(classes.bannerItem)}
                              >
                                <MediaNormal
                                  {...item}
                                  onClickRoot={() =>
                                    RouterHelper.gotoShadow(item.id)
                                  }
                                  onClickAuthor={() => () =>
                                    RouterHelper.gotoProfile(
                                      item.author.username
                                    )}
                                />
                              </div>
                            );
                          })}
                          {top_shadows.length === 1 && (
                            <div className={clsx(classes.bannerItem)}>
                              <SpecialBox
                                placeholder
                                placeholderTitle="敬请期待"
                              />
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  } else {
                    return <Placeholder title="敬请期待" />;
                  }
                })()}
              </Box>
            </Box>
          </div>
          <div className={classes.headItem}>
            {data.current_topic.top_shadow ? (
              <MediaNormal
                {...data?.current_topic.top_shadow}
                onClickRoot={() =>
                  RouterHelper.gotoShadow(data?.current_topic?.top_shadow?.id)
                }
                onClickAuthor={() => () =>
                  RouterHelper.gotoProfile(
                    data?.current_topic?.top_shadow?.author?.username
                  )}
              />
            ) : (
              <Placeholder title="敬请期待" />
            )}
          </div>
        </div>
      ) : (
        <SpecialBox loading={loading} error={!!error} />
      )}
    </>
  );
}

export default Topic;
