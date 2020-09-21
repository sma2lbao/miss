import * as React from "react";
import { useMediaQuery } from "@material-ui/core";

export const useSidebar = () => {
  const isLargeDesktop = useMediaQuery("(min-width: 1600px)");
  const [hasExpand, setHasExpand] = React.useState(
    isLargeDesktop ? true : false
  );
  //   const [force, setForce] = React.useState(false);

  React.useEffect(() => {
    setHasExpand(isLargeDesktop ? true : hasExpand);
  }, [isLargeDesktop, hasExpand]);

  return {
    hasExpand,
    setHasExpand,
    isLargeDesktop
  };
};
