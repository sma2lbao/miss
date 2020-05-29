import * as React from "react";
import { AccountCircle } from "@material-ui/icons";
import { IconButton, Menu, MenuItem } from "@material-ui/core";

export default function Account() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  function _close() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={event => {
          setAnchorEl(event.currentTarget);
        }}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={_close}
      >
        <MenuItem onClick={_close}>Resume</MenuItem>
      </Menu>
    </>
  );
}
