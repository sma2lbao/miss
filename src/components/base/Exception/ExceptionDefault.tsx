import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { BaseExceptionProps } from "./exception";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    icon: {
      fontSize: 80
    }
  })
);

export const ExceptionDefault: React.FC<BaseExceptionProps> = (
  props: BaseExceptionProps
) => {
  const classes = useStyles();
  const { title, subtitle } = props;
  return (
    <div className={classes.root}>
      <div>
        <i className={clsx("iconfont icon-404", classes.icon)}></i>
      </div>
      {title && <div>{title}</div>}
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
};
