import * as React from "react";
import { BaseSpecialBoxProps } from "./specialbox";
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
    empty,
    emptyTitle,
    emptySubtitle,
    emptyNode: EmptyNode,
    loading,
    loadingTitle,
    loadingSubtitle,
    loadingNode: LoadingNode,
    error,
    errorTitle,
    errorSubtitle,
    errorNode: ErrorNode
  } = props;
  return (
    <div className={classes.root}>
      {loading &&
        (LoadingNode ? (
          <LoadingNode />
        ) : (
          <Loading title={loadingTitle} subtitle={loadingSubtitle} />
        ))}
      {error &&
        (ErrorNode ? (
          <ErrorNode />
        ) : (
          <Exception title={errorTitle} subtitle={errorSubtitle} />
        ))}
      {empty &&
        (EmptyNode ? (
          <EmptyNode />
        ) : (
          <Placeholder title={emptyTitle} subtitle={emptySubtitle} />
        ))}
    </div>
  );
};
