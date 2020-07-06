import * as React from "react";
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Chip
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { Face } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "flex",
      // alignItems: "center",
    }
  })
);

export default function Filter() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div>
        <Typography variant="caption">地区</Typography>
        <div>
          <ToggleButtonGroup value={1}>
            <ToggleButton value={1}>其他</ToggleButton>
            <ToggleButton value={2}>其他</ToggleButton>
            <ToggleButton value={3}>其他</ToggleButton>
            <ToggleButton value={4}>其他</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div>
        <Typography variant="caption">地区</Typography>
        <div>
          <ToggleButtonGroup value={1}>
            <ToggleButton value={1}>其他</ToggleButton>
            <ToggleButton value={2}>其他</ToggleButton>
            <ToggleButton value={3}>其他</ToggleButton>
            <ToggleButton value={4}>其他</ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>

      <div>
        <Typography variant="caption">标签</Typography>
        <div>
          <Chip
            color="secondary"
            size="small"
            onDelete={() => {}}
            icon={<Face />}
          />
        </div>
      </div>
    </Box>
  );
}
