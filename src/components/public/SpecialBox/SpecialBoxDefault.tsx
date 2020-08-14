import * as React from "react";
import { BaseSpecialBoxProps, SpecialBoxStatus } from "./specialbox";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import Exception from "@/components/base/Exception";
import Placeholder from "@/components/base/Placeholder";
import Loading from "@/components/base/Loading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

export const SpecialBoxDefault: React.FC<BaseSpecialBoxProps> = (
  props: BaseSpecialBoxProps
) => {
  const classes = useStyles();
  const {
    status,
    emptyTitle,
    emptySubtitle,
    loadingTitle,
    loadingSubtitle,
    errorTitle,
    errorSubtitle
  } = props;
  return (
    <div className={classes.root}>
      {status === SpecialBoxStatus.LOADING && (
        <Loading title={loadingTitle} subtitle={loadingSubtitle} />
      )}
      {status === SpecialBoxStatus.ERROR && (
        <Exception title={errorTitle} subtitle={errorSubtitle} />
      )}
      {status === SpecialBoxStatus.EMPTY && (
        <Placeholder title={emptyTitle} subtitle={emptySubtitle} />
      )}
    </div>
  );
};
