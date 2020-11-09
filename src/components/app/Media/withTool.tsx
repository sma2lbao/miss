import * as React from "react";
import { WithToolProps } from "./media";
import { makeStyles, Theme, createStyles, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      position: "relative"
    },
    tool: {
      position: "absolute",
      left: 10,
      top: 10
    }
  })
);

export function withTool<P>(Component: React.FC<P & WithToolProps>) {
  return (props: P & WithToolProps) => {
    const classes = useStyles();
    const { onDelete, ...rest } = props;

    return (
      <div className={classes.wrap}>
        <Component {...(rest as P)} />
        <div className={classes.tool}>
          <IconButton onClick={onDelete}>
            <Delete></Delete>
          </IconButton>
        </div>
      </div>
    );
  };
}
export default withTool;
