import React from "react";
import {
  Icon,
  IconProps,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconWrap: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);

export const Logo = (props: IconProps) => {
  const classes = useStyles();
  return (
    <Icon
      {...props}
      className={clsx("iconfont icon-logo", classes.iconWrap)}
    ></Icon>
  );
};
