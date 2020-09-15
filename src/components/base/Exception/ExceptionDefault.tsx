import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { BaseExceptionProps } from "./exception";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: (props: BaseExceptionProps) => {
        return props.width ?? "100%";
      },
      height: (props: BaseExceptionProps) => {
        return props.height ?? "100%";
      },
      flex: 1
    },
    icon: theme.custom.base.icon.large
  })
);

export const ExceptionDefault: React.FC<BaseExceptionProps> = (
  props: BaseExceptionProps
) => {
  const classes = useStyles(props);
  const { title, subtitle, children } = props;
  return (
    <div className={classes.root}>
      <div>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
      </div>
      {title && <Typography variant="h4">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </div>
  );
};
