import * as React from "react";
import { Image } from "@/components/base/Image";
import { ShadowContext } from "../..";
import { DEFULAT_SHADOW_COVER } from "@/common/constants/default.constant";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import { useRouterHelper } from "@/hooks";
import { PlayCircleOutline } from "@material-ui/icons";

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
      color: "#fff"
    }
  })
);

export const Top: React.FC = () => {
  const shadowQuery = React.useContext(ShadowContext);
  const classes = useStyles();
  const RouterHelper = useRouterHelper();

  const goShadowPlay = () => {
    RouterHelper.gotoShadowPlay(shadowQuery?.shadow.id);
  };

  return (
    <div className={classes.root}>
      <Image
        aspectRatio={16 / 9}
        src={
          (shadowQuery && shadowQuery.shadow && shadowQuery.shadow.cover) ||
          DEFULAT_SHADOW_COVER
        }
      />
      <div className={classes.main}>
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
  );
};

export default Top;
