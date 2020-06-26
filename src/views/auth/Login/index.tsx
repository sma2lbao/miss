import * as React from "react";
import { SignIn, SignUp, Swiper } from "./modules";
import { Button, Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      fontSize: 0,
      overflow: "hidden"
    },
    left: {
      flex: 1,
      backgroundColor: theme.palette.primary.main
    },
    right: {
      flex: 1,
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    main: {
      width: 300
    }
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
        <div className={classes.main}>
          <Button onClick={_ => setTag(0)}>登录</Button>
          <Button onClick={_ => setTag(1)}>注册</Button>
          <div>
            {tag === 0 && <SignIn />}
            {tag === 1 && <SignUp />}
          </div>
        </div>
      </div>
    </Box>
  );
}
