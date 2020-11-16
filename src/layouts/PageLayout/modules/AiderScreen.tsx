import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { AiderScreenLayoutProps } from "../layout.d";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: 400,
      flex: 1
      // flexGrow: 1,
      // flexShrink: 1,
      // flexBasis: "auto"
    },
    agent: (props: AiderScreenLayoutProps) => {
      const keys = Object.keys(theme.mixins.toolbar);
      const height_normal =
        theme.mixins.toolbar?.height || theme.mixins.toolbar?.minHeight || 0;
      const top_normal = +height_normal + (props?.top || 0);
      const style: CreateCSSProperties<AiderScreenLayoutProps> = {
        position: "sticky",
        top: top_normal,
        overflow: "auto",
        maxHeight: `calc(100vh - ${top_normal}px)`
      };
      keys.forEach(key => {
        const entity: any = theme.mixins.toolbar[key];
        if (
          typeof entity === "object" &&
          (entity?.height || entity?.minHeight)
        ) {
          const height_current = entity?.height || entity?.minHeight;
          const top_current = +height_current + (props?.top || 0);
          Object.assign(style, {
            [key]: {
              top: top_current,
              maxHeight: `calc(100vh - ${top_current}px)`
            }
          });
        }
      });
      return style;
    },
    root: {}
  })
);

export default function AiderScreen(props: AiderScreenLayoutProps) {
  const classes = useStyles(props);
  const { sticky } = props;
  if (sticky) {
    return (
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.agent)}>
          {/* <div className={clsx(classes.wrap)}>
            <div className={clsx(classes.toolbar)}></div>
          </div> */}
          <div className={clsx(classes.root, props.className)}>
            {props.children}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx(classes.container, props.className)}>
      {props.children}
    </div>
  );
}
