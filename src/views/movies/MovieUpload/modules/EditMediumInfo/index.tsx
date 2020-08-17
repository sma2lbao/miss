import * as React from "react";
import {
  Dialog,
  Toolbar,
  AppBar,
  Button,
  Box,
  Theme,
  makeStyles,
  createStyles
} from "@material-ui/core";
import {
  FullScreen,
  BodyScreen,
  ContentScreen,
  AiderScreen
} from "@/layouts/PageLayout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    body: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      margin: "0 auto"
    },
    content: {
      padding: theme.spacing(2, 5),
      borderRight: `1px solid ${theme.palette.divider}`
    },
    aider: {
      padding: theme.spacing(2, 4),
      height: "100%",
      overflow: "auto"
    }
  })
);

export const EditMediumInfo: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} fullScreen onClose={handleClose}>
        <AppBar>
          <Toolbar>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.root}>
          <FullScreen>
            <BodyScreen>{/* <MoviePlayer /> */}</BodyScreen>
          </FullScreen>
          <BodyScreen className={classes.body}>
            <ContentScreen className={classes.content}>
              {/* <VideoInfo /> */}
              {/* <NextPlay /> */}
            </ContentScreen>
            <AiderScreen sticky className={classes.aider}>
              {/* <Comment /> */}
            </AiderScreen>
          </BodyScreen>
        </Box>
      </Dialog>
    </div>
  );
};
