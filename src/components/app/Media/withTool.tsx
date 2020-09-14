import * as React from "react";
import { WithToolProps } from "./media";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: "relative"
    },
    toolbar: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }
  });

const withTool: React.FC<WithToolProps & WithStyles<typeof styles>> = props => {
  const { children, classes } = props;
  return (
    <div className={classes.root}>
      <div>{children}</div>
      <div className={classes.toolbar}>
        <div>delete</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(withTool);
