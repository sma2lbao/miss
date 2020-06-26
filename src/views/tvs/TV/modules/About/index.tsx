import * as React from "react";
import { Box } from "@material-ui/core";

export interface AboutProps {
  html?: string;
}

export default function About(props: AboutProps) {
  const defaulHtml = "该资源没有介绍";
  const { html = defaulHtml } = props;
  return (
    <Box>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  );
}
