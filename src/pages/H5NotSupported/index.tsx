import * as React from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) => createStyles({}));

export default function H5NotSupported() {
  // const classes = useStyles();

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography>暂不支持移动端访问，请在PC浏览器访问。</Typography>
    </Box>
  );
}
