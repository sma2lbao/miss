import * as React from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import { useMutation } from "@apollo/react-hooks";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import { GitHub } from "@material-ui/icons";
import { ACCESS_TOKEN } from "@/apollo/mutations";

export default function SignIn() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [access_token, res] = useMutation(ACCESS_TOKEN, {
    onCompleted(data) {
      enqueueSnackbar("登录成功");
      localStorage.setItem("access_token", data.access_token);
      history.push("/home");
    },
    onError(error) {
      console.log(error);
    }
  });
  const { loading } = res;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const _signIn = function() {
    access_token({ variables: { username: username, password: password } });
  };

  const github_login = function() {
    const child = window.open(
      "http://localhost:108/auth/github",
      "github",
      `width=450,height=450,toolbar=0,menubar=0,location=0,status=0`
    );
    if (child) {
      const timer = setInterval(() => {
        child.postMessage(
          {
            type: "access_token",
            signal: "天王盖地虎"
          },
          "http://localhost:108"
        );
      }, 1000);

      window.addEventListener("message", event => {
        const data = event.data;
        if (
          data &&
          data.type === "access_token_callback" &&
          data.signal === "宝塔镇河妖"
        ) {
          clearInterval(timer);
          child && child.close();

          enqueueSnackbar(
            data.data.access_token ? "登录成功" : data.data.error || "登录失败"
          );
          localStorage.setItem("access_token", data.data.access_token);
          history.push("/home");
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
      <IconButton onClick={github_login}>
        <GitHub />
      </IconButton>
    </div>
  );
}
