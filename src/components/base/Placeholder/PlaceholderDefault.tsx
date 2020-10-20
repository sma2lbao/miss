import * as React from "react";
import { IPlaceholderProps } from "./placeholder.d";
import clsx from "clsx";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: (props: IPlaceholderProps) => {
        return props.width ?? "100%";
      },
      height: (props: IPlaceholderProps) => {
        return props.height ?? "100%";
      },
      color: theme.palette.text.secondary,
      flex: 1
    },
    icon: (props: IPlaceholderProps) =>
      props.size ? { fontSize: props.size } : theme.custom.base.icon.large
  })
);

export const PlaceholderDefault: React.FC<IPlaceholderProps> = (
  props: IPlaceholderProps
) => {
  const classes = useStyles(props);
  const { title, subtitle, children } = props;
  return (
    <div className={classes.root}>
      <div>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
      </div>
      {title && <Typography variant="h6">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </div>
  );
};
