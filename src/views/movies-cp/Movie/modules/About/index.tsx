import * as React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    },
    default: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(5),
      color: theme.palette.text.secondary
    },
    emptyIcon: {
      fontSize: 150
      // marginBottom: theme.spacing(3)
    }
  })
);

export interface AboutProps {
  html?: string;
}

export default function About(props: AboutProps) {
  const classes = useStyles();
  // const defaulHtml = "该资源没有介绍";
  const { html } = props;
  return (
    <Box className={classes.root}>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <Box className={classes.default}>
          <i className={clsx("iconfont icon-404", classes.emptyIcon)}></i>
          <Typography>该资源没有介绍</Typography>
        </Box>
      )}
    </Box>
  );
}
