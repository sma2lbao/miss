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
    wrap: () => {
      const keys = Object.keys(theme.mixins.toolbar);
      const height_normal =
        theme.mixins.toolbar?.height || theme.mixins.toolbar?.minHeight || 0;
      const style = {
        marginTop: -height_normal
      };
      keys.forEach(key => {
        const entity: any = theme.mixins.toolbar[key];
        if (
          typeof entity === "object" &&
          (entity?.height || entity?.minHeight)
        ) {
          const height_cur = entity?.height || entity?.minHeight;
          Object.assign(style, {
            [key]: {
              marginTop: -height_cur
            }
          });
        }
      });
      return style;
    },
    clone: {},
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
