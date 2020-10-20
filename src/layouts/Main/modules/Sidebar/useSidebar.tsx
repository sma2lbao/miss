import * as React from "react";
import { useMediaQuery } from "@material-ui/core";

export const useSidebar = () => {
  const isLargeDesktop = useMediaQuery("(min-width: 1600px)");
  const [hasExpand, setHasExpand] = React.useState<boolean>(
    isLargeDesktop ? true : false
  );
  const [force, setForce] = React.useState(false);

  React.useEffect(() => {
    setHasExpand(isLargeDesktop && !force ? true : hasExpand);
  }, [isLargeDesktop, hasExpand, force]);

  const handleSetHasExpand = (val: boolean) => {
    setForce(true);
    setHasExpand(val);
  };

  return {
    hasExpand,
    setHasExpand: handleSetHasExpand,
    isLargeDesktop
  };
};
