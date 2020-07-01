import * as React from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius
    },
    title: {
      padding: theme.spacing(1.5, 2)
    },
    content: {
      padding: theme.spacing(1.5, 2)
    }
  })
);

export default function BasicSetting() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Basic Settings
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <Box>
          <Typography variant="subtitle2">频道描述</Typography>
          <Typography color="textSecondary" variant="body2">
            毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。
          </Typography>
        </Box>
        {/* <Box>
                    <Typography></Typography>
                    <Typography>
                        毕竟西湖六月中，风光不与四时同。接天莲叶无穷碧，映日荷花别样红。
                    </Typography>
                </Box> */}
      </Box>
    </Box>
  );
}
