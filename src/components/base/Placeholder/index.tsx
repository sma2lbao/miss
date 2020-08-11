import * as React from "react";
import { IPlaceholderProps } from "./placeholder";

export const Placeholder: React.FC<IPlaceholderProps> = (
  props: IPlaceholderProps
) => {
  return (
    <div>
      {props.title && <div>{props.title}</div>}
      {props.subtitle && <div>{props.subtitle}</div>}
    </div>
  );
};

export default Placeholder;
