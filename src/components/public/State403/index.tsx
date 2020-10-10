import * as React from "react";
import { makeStyles, Theme, createStyles, Button } from "@material-ui/core";
import Exception from "@/components/base/Exception";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      overflowY: "auto"
    }
  })
);

export const State403: React.FC = () => {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();
  return (
    <div className={classes.root}>
      <Exception title="禁止访问">
        <Button onClick={RouterHelper.gotoHome}>返回首页</Button>
      </Exception>
    </div>
  );
};

export default State403;
