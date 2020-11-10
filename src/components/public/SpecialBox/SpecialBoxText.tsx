import * as React from "react";
import { TextSpecialBoxProps } from "./specialbox";
import { SpecialBoxDefault } from "./SpecialBoxDefault";
import { Typography } from "@material-ui/core";

export const SpecialBoxText: React.FC<TextSpecialBoxProps> = (
  props: TextSpecialBoxProps
) => {
  console.log(props);
  const { component, placeholderNode, loadingNode, errorNode, ...rest } = props;
  return (
    <SpecialBoxDefault
      component={component || "span"}
      placeholderNode={<Typography variant="inherit">敬请期待</Typography>}
      loadingNode={<Typography variant="inherit">loading</Typography>}
      errorNode={<Typography variant="inherit">出错啦</Typography>}
      {...rest}
    />
  );
};
