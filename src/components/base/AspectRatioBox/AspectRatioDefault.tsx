import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface AspectRationProps {
  ratio?: number;

  children?: React.ReactNode;

  height?: string | number;

  width?: string | number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: (props: AspectRationProps) => {
        return props.height || "auto";
      },
      width: (props: AspectRationProps) => {
        return props.width || "100%";
      },
      //   fontSize: 0,
      overflow: "hidden"
    },
    aspect: {
      paddingTop: (props: AspectRationProps) => {
        return `calc(1 / ${props.ratio} * 100%)`;
      },
      position: "relative",
      backgroundColor: "transparent"
    },
    container: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      overflow: "hidden"
    }
  })
);

export const AspectRatioDefault: React.FC<AspectRationProps> = (
  props: AspectRationProps
) => {
  const classes = useStyles(props);
  const { children, ratio } = props;

  return (
    <div className={classes.root}>
      {ratio ? (
        <div className={classes.aspect}>
          <div className={classes.container}>{children}</div>
        </div>
      ) : (
        <div className={classes.root}>{children}</div>
      )}
    </div>
  );
};

export default AspectRatioDefault;
