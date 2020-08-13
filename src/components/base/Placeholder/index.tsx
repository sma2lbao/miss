import * as React from "react";
import { IPlaceholderProps } from "./placeholder.d";
import { PlaceholderType } from "./constants";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: 120
    }
  })
);

export const Placeholder: React.FC<IPlaceholderProps> = (
  props: IPlaceholderProps
) => {
  const classes = useStyles();
  const { image, title, subtitle, type } = props;
  return (
    <div>
      {type === PlaceholderType.DEFAULT && (
        <div>
          {image ? (
            <img src={image} alt="placeholder" />
          ) : (
            <div>
              <i className={clsx("iconfont icon-404", classes.icon)}></i>
            </div>
          )}
          {title && <div>{title}</div>}
          {subtitle && <div>{subtitle}</div>}
        </div>
      )}
    </div>
  );
};
Placeholder.defaultProps = {
  type: PlaceholderType.DEFAULT
};
export default Placeholder;
