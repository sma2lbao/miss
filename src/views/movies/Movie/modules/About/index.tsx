import * as React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Placeholder } from "@/components/base/Placeholder";

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
    }
  })
);

export interface AboutProps {
  html?: string;
}

export default function About(props: AboutProps) {
  const classes = useStyles();
  const defaulHtml = "该资源没有介绍";
  const { html } = props;
  return (
    <Box className={classes.root}>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <Placeholder title={defaulHtml} />
      )}
    </Box>
  );
}
