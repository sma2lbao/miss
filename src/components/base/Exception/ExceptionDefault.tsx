import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { BaseExceptionProps } from "./exception";
import { Box, Icon, Typography } from "@material-ui/core";

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
      color: theme.palette.text.secondary,
      flex: 1,
      padding: theme.spacing(2, 0)
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
      <Box mb={1}>
        <Icon className={clsx("iconfont icon-404", classes.icon)}></Icon>
      </Box>
      {title && <Typography variant="h6">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </div>
  );
};

ExceptionDefault.defaultProps = {
  title: "糟糕，出错啦"
};
