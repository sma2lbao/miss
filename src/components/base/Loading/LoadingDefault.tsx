import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { LoadingBaseProps } from "./loading";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "-webkit-background-clip": "text",
      backgroundClip: "text",
      fontWeight: "bold",
      color: "transparent",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "linear-gradient(90deg, #e6e6e6 25%, #d6d6d6 37%, #e6e6e6 63%)",
      backgroundSize: "400% 100%",
      animation: "$skeleton-busy-animate 2s ease infinite",
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: (props: LoadingBaseProps) => {
        return props.width ?? "100%";
      },
      height: (props: LoadingBaseProps) => {
        return props.height ?? "100%";
      },
      flex: 1
    },
    logo: theme.custom.base.icon.large,
    "@keyframes skeleton-busy-animate": {
      "0%": {
        backgroundPosition: "100% 50%"
      },
      "100%": {
        backgroundPosition: "0 50%"
      }
    }
  })
);

export const LoadingDefault: React.FC<LoadingBaseProps> = (
  props: LoadingBaseProps
) => {
  const classes = useStyles(props);
  const { title, subtitle, children } = props;

  return (
    <div className={classes.root}>
      <i className={clsx("iconfont icon-logo", classes.logo)}></i>
      {title && <Typography variant="h4">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </div>
  );
};

LoadingDefault.defaultProps = {
  title: "Loading"
};
