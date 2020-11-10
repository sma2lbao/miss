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
    component,
    placeholder,
    placeholderTitle,
    placeholderSubtitle,
    placeholderNode: PlaceholderNode,
    loading,
    loadingTitle,
    loadingSubtitle,
    loadingNode: LoadingNode,
    error,
    errorTitle,
    errorSubtitle,
    errorNode: ErrorNode
  } = props;

  const Tag = component || "div";

  console.log(LoadingNode);

  return (
    <Tag className={classes.root}>
      {loading &&
        (LoadingNode ? (
          LoadingNode
        ) : (
          <Loading title={loadingTitle} subtitle={loadingSubtitle} />
        ))}
      {error &&
        (ErrorNode ? (
          ErrorNode
        ) : (
          <Exception title={errorTitle} subtitle={errorSubtitle} />
        ))}
      {placeholder &&
        !error &&
        !loading &&
        (PlaceholderNode ? (
          PlaceholderNode
        ) : (
          <Placeholder
            title={placeholderTitle}
            subtitle={placeholderSubtitle}
          />
        ))}
    </Tag>
  );
};
