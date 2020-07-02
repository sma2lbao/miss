import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { AiderScreenLayoutProps } from "../layout.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 400,
      flex: 1
    },
    agent: (props: AiderScreenLayoutProps) => {
      return {
        position: "sticky",
        top: props?.top || 0
      };
    },
    wrap: {
      marginTop: "-100%"
    },
    toolbar: theme.mixins.toolbar,
    root: {
      maxWidth: 400,
      flex: 1
    }
  })
);

export default function AiderScreen(props: AiderScreenLayoutProps) {
  const classes = useStyles(props);
  const { sticky } = props;
  if (sticky) {
    return (
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.agent)}>
          <div className={clsx(classes.wrap)}>
            <div className={clsx(classes.toolbar)}></div>
          </div>
          <div className={clsx(classes.root, props.className)}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx(classes.root, props.className)}>{props.children}</div>
  );
}
