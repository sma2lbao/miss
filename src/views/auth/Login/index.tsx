import * as React from "react";
import { SignIn, SignUp, Swiper } from "./modules";
import { Button, Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Logo } from "@/components/base/Icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      fontSize: 0,
      overflow: "hidden"
    },
    left: {
      flex: 1.5
      // backgroundColor: theme.palette.primary.main,
    },
    right: {
      flex: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 4),
      overflow: "auto"
    },
    rightHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing(2, 0),
      width: "100%"
    },
    rightMain: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      padding: theme.spacing(0, 8)
    },
    rightFooter: {}
  })
);

export default function Login() {
  const classes = useStyles();
  const [tag, setTag] = React.useState(0);

  return (
    <Box className={classes.root} display="flex">
      <div className={classes.left}>
        <Swiper />
      </div>
      <div className={classes.right}>
        <div className={classes.rightHeader}>
          <Logo fontSize="large" />
          {tag === 1 && (
            <Button variant="outlined" color="primary" onClick={_ => setTag(0)}>
              Sign In
            </Button>
          )}
          {tag === 0 && (
            <Button variant="outlined" color="primary" onClick={_ => setTag(1)}>
              Sign Up
            </Button>
          )}
        </div>
        <div className={classes.rightMain}>
          {tag === 0 && <SignIn />}
          {tag === 1 && <SignUp />}
        </div>
        <div className={classes.rightFooter}></div>
      </div>
    </Box>
  );
}
