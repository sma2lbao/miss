import * as React from "react";
import { Image } from "@/components/base/Image";
import { ShadowContext } from "../..";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import { useRouterHelper } from "@/hooks";
import { PlayCircleOutline } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "100%"
    },
    main: {
      position: "absolute",
      top: "50%",
      right: 0,
      width: "50%",
      padding: theme.spacing(0, 8),
      transform: "translate(0, -50%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column"
    },
    mainContent: {
      background: "rgba(0, 0, 0, .1)",
      backdropFilter: "blur(8px)",
      padding: theme.spacing(4),
      borderRadius: theme.shape.borderRadius
    }
  })
);

export const Top: React.FC = () => {
  const shadowQuery = React.useContext(ShadowContext);
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  const [activeStep, setActiveStep] = React.useState(0);

  const goShadowPlay = () => {
    RouterHelper.gotoShadowPlay(shadowQuery?.shadow.id);
  };

  return (
    <div className={classes.root}>
      {shadowQuery &&
      shadowQuery.shadow &&
      shadowQuery.shadow.posters?.length ? (
        <AutoPlaySwipeableViews
          onChangeIndex={step => setActiveStep(step)}
          index={activeStep}
        >
          {shadowQuery.shadow.posters.map((image, idx) => {
            return <Image key={idx} aspectRatio={16 / 9} src={image} />;
          })}
        </AutoPlaySwipeableViews>
      ) : (
        <Image aspectRatio={16 / 9} src={DEFULAT_SHADOW_COVER} />
      )}

      <div className={classes.main}>
        <div className={classes.mainContent}>
          <Typography gutterBottom variant="h4" component="div">
            {shadowQuery?.shadow.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            {shadowQuery?.shadow.sub_title}
          </Typography>
          {/* <div></div> */}
          <Typography variant="body2" component="div">
            {shadowQuery?.shadow.description}
          </Typography>
          <Box mt={3}>
            <IconButton onClick={goShadowPlay}>
              <PlayCircleOutline />
            </IconButton>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Top;
