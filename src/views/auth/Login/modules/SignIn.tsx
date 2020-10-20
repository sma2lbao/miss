import * as React from "react";
import {
  TextField,
  Button,
  IconButton,
  Typography,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useLoginMutation, usePlatformAuthWayQuery } from "@/schema";
import { useAuth } from "@/hooks";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thirdWrap: {
      padding: theme.spacing(2),
      textAlign: "center"
    }
  })
);

export default function SignIn() {
  const classes = useStyles();
  const { verify, setAccessToken } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {
    data: thirdData,
    loading: thirdLoading,
    error: thirdError
  } = usePlatformAuthWayQuery();
  const [login, { loading }] = useLoginMutation({
    onCompleted(data) {
      enqueueSnackbar("登录成功");
      setAccessToken(data?.login);
      verify();
    },
    onError(error) {
      console.log(error);
    }
  });

  const _signIn = function() {
    login({ variables: { username, password } });
  };

  const thirdLogin = function(
    platform: string,
    url: string,
    http_domain: string
  ) {
    const width = 450;
    const height = 450;
    const top = (window.screen.availHeight - height) / 2;
    const left = (window.screen.availWidth - width) / 2;
    const child = window.open(
      http_domain + url,
      platform,
      `width=${width},height=${height},top=${top},left=${left},toolbar=0,menubar=0,location=0,status=0`
    );
    if (child) {
      const timer = setInterval(() => {
        child.postMessage(
          {
            type: "access_token"
          },
          http_domain
        );
      }, 1000);

      window.addEventListener("message", event => {
        const data = event.data;
        if (data && data.type === "access_token_callback") {
          clearInterval(timer);
          child && child.close();
          enqueueSnackbar(
            data.data.access_token ? "登录成功" : data.data.error || "登录失败"
          );
          setAccessToken(data.data.access_token);
          verify();
        }
      });
    }
  };

  React.useEffect(() => {
    verify();
  });

  return (
    <div>
      <Typography variant="h3">Sign In</Typography>
      <form>
        <TextField
          id="username"
          label="用户名"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="请输入用户名"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="password"
          label="密码"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="请输入密码"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={_signIn}
          disabled={loading}
        >
          {loading ? "登录中" : "登录"}
        </Button>
      </form>
      <div className={classes.thirdWrap}>
        <Typography variant="caption" color="textSecondary">
          更多登录方式
        </Typography>
        {thirdData?.platform_auth_way.map((item, idx) => {
          return (
            <div key={idx}>
              <IconButton
                onClick={() =>
                  thirdLogin(item.platform, item.url, item.http_domain)
                }
              >
                {item.platform === "github" && <GitHub />}
              </IconButton>
            </div>
          );
        })}
        {thirdLoading && (
          <Typography variant="caption" color="textSecondary">
            loading
          </Typography>
        )}
        {thirdError && (
          <Typography variant="caption" color="textSecondary">
            oops!
          </Typography>
        )}
      </div>
    </div>
  );
}
