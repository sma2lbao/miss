import * as React from "react";
import { IPlaceholderProps } from "./placeholder.d";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 120
    }
  })
);

export const PlaceholderDefault: React.FC<IPlaceholderProps> = (
  props: IPlaceholderProps
) => {
  const classes = useStyles();
  const { title, subtitle } = props;
  return (
    <div>
      <div>
        <div>
          <i className={clsx("iconfont icon-404", classes.icon)}></i>
        </div>
        {title && <div>{title}</div>}
        {subtitle && <div>{subtitle}</div>}
      </div>
    </div>
  );
};
