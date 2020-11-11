import * as React from "react";
import { AccountCircle } from "@material-ui/icons";
import {
  Menu,
  MenuItem,
  Button,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  Box
} from "@material-ui/core";
import { useAuth, useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    avatar: {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5)
    }
  });
});

export const Account: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { hasLogged, member } = useAuth();
  const RouterHelper = useRouterHelper();
  const classes = useStyles();

  function _close() {
    setAnchorEl(null);
  }

  const handleLogin = () => {
    RouterHelper.redirectAuthLogin();
  };

  return (
    <Box mx={0.5}>
      {hasLogged ? (
        <>
          <div
            onClick={event => {
              setAnchorEl(event.currentTarget);
            }}
          >
            {member?.avatar ? (
              <Avatar
                className={classes.avatar}
                alt={member.username}
                src={member.avatar}
              ></Avatar>
            ) : (
              <Avatar className={classes.avatar} alt={member?.username}>
                <AccountCircle />
              </Avatar>
            )}
          </div>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={_close}
          >
            <MenuItem onClick={_close}>退出</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button onClick={handleLogin}>登录</Button>
        </>
      )}
    </Box>
  );
};

export default Account;
