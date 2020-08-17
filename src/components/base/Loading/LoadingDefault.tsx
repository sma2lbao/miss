import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { LoadingBaseProps } from "./loading";

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
    logo: {
      fontSize: 90
    },
    title: {
      fontSize: 16
    },
    subtitle: {
      fontSize: 12
    },
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
  const { title, subtitle } = props;

  return (
    <div className={classes.root}>
      <i className={clsx("iconfont icon-logo", classes.logo)}></i>
      {title && <div className={classes.title}>{title}</div>}
      {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
    </div>
  );
};
