import * as React from "react";
import { IPlaceholderProps } from "./placeholder.d";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Icon,
  Box
} from "@material-ui/core";

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
      flex: 1,
      padding: theme.spacing(2, 0)
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
      <Box mb={1}>
        <Icon className={clsx("iconfont icon-logo", classes.icon)}></Icon>
      </Box>
      {/* </div> */}
      {title && <Typography variant="h6">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </div>
  );
};
