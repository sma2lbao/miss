import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Placeholder } from "@/components/base/Placeholder";
import { Button, Box } from "@material-ui/core";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(2),
      background: theme.palette.background.paper
    }
  })
);

export default function H5NotSupported() {
  const classes = useStyles();
  const RouterHelper = useRouterHelper();

  return (
    <div className={classes.root}>
      <Placeholder title="暂未适配移动端，请在电脑端访问。">
        <Box marginTop={1}>
          <Button variant="outlined" onClick={() => RouterHelper.gotoHome()}>
            继续前往
          </Button>
        </Box>
      </Placeholder>
    </div>
  );
}
