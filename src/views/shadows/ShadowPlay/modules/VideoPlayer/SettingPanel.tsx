import * as React from "react";
import {
  Theme,
  Typography,
  ClickAwayListener,
  Popper
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      minHeight: 450,
      backgroundColor: theme.palette.background.paper
    }
  })
);

export default function SettingPanel() {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <div>
        <Typography>Speed</Typography>
        <div
          ref={anchorRef}
          style={{ background: "red" }}
          onMouseEnter={() => setOpen(true)}
          // onClick={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Typography>Normal</Typography>
          <Typography>&gt;</Typography>
          <Popper
            placement="left-end"
            open={open}
            anchorEl={anchorRef.current}
            transition
            disablePortal
          >
            {() => (
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <div
                  style={{ width: 200, height: 40, background: "blue" }}
                  onClick={() => console.log("yi")}
                >
                  yi
                </div>
              </ClickAwayListener>
            )}
          </Popper>
        </div>
      </div>
    </div>
  );
}
