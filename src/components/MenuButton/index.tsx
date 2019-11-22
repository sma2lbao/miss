import * as React from "react";
import {
  Box,
  ButtonGroup,
  Button,
  makeStyles,
  Theme,
  createStyles,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow
} from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

export interface MenuButtonProps {
  options: any[];
}

export default function MenuButton(props: MenuButtonProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  return (
    <Box className={classes.root}>
      <ButtonGroup ref={anchorRef} variant="contained">
        <Button>选择一</Button>
        <Button size="small" onClick={() => setOpen(!open)}>
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
        {() => (
          <Grow>
            <Paper>
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <MenuList>
                  {props.options.map((item, i) => {
                    return <MenuItem key={i}>{item}</MenuItem>;
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
