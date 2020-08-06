import * as React from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import { useSnackbar } from "notistack";
// import { GitHub } from "@material-ui/icons";
import { useLoginMutation, usePlatformAuthWayQuery } from "@/schema";
import { useRouterHelper } from "@/hooks";
import { GitHub } from "@material-ui/icons";

export default function SignIn() {
  const RouterHelper = useRouterHelper();

  const { data: queryData, loading: queryLoading } = usePlatformAuthWayQuery();
  console.log(queryData, queryLoading);
  const { enqueueSnackbar } = useSnackbar();
  const [login, res] = useLoginMutation({
    onCompleted(data) {
      enqueueSnackbar("登录成功");
      localStorage.setItem("access_token", data?.login);
      RouterHelper.gotoHome();
    },
    onError(error) {
      console.log(error);
    }
  });
  const { loading } = res;

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const _signIn = function() {
    login({ variables: { username, password } });
  };

  const thirdLogin = function(platform: string, url: string) {
    const targetOrigin = process.env.REACT_APP_HTTP_DOMAIN_URL || "";
    const child = window.open(
      targetOrigin + url,
      platform,
      `width=450,height=450,toolbar=0,menubar=0,location=0,status=0`
    );
    if (child) {
      const timer = setInterval(() => {
        child.postMessage(
          {
            type: "access_token"
          },
          targetOrigin
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
          localStorage.setItem("access_token", data.data.access_token);
          // history.push("/home");
          RouterHelper.gotoHome();
        }
      });
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="username"
          label="用户名"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="请输入用户名"
          fullWidth
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
          margin="normal"
        />
        <Button variant="contained" onClick={_signIn} disabled={loading}>
          {loading ? "登录中" : "登录"}
        </Button>
      </form>
      {queryData?.platform_auth_way.map((item, idx) => {
        return (
          <div key={idx}>
            <IconButton onClick={() => thirdLogin(item.platform, item.url)}>
              <GitHub />
            </IconButton>
          </div>
        );
      })}
      {/* <IconButton >
        <GitHub />
      </IconButton> */}
    </div>
  );
}
