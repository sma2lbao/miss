import * as React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%"
    }
  })
);

export interface AboutProps {
  html?: string;
}

export default function About(props: AboutProps) {
  const classes = useStyles();
  const defaulHtml = "该资源没有介绍";
  const { html = defaulHtml } = props;
  return (
    <Box className={classes.root}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
