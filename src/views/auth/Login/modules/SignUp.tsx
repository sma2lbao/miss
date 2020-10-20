import * as React from "react";
import { TextField, Button, Box, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import {
  useHasUsernameQuery,
  useSendRegisterEmailMutation,
  useCreateUserWithCodeMutation
} from "@/schema";
import { useAuth } from "@/hooks";

export default function SignIn() {
  const { verify } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");

  const { data, loading } = useHasUsernameQuery({
    variables: {
      username: username
    }
  });
  console.log("_changeUsername: ", username, data, loading);

  // 发送验证码
  const [send_register_email] = useSendRegisterEmailMutation({
    onCompleted() {
      enqueueSnackbar("发送成功");
    }
  });
  const _sendVerifyCode = function() {
    send_register_email({ variables: { email: email } });
  };

  // 注册
  const [create_user_with_code] = useCreateUserWithCodeMutation({
    onCompleted(data) {
      enqueueSnackbar("注册成功");
      verify();
    }
  });
  const _signUp = () => {
    create_user_with_code({
      variables: {
        user: {
          username,
          password,
          email,
          code
        }
      }
    });
  };

  const _changeUsername = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(e.target.value);
  };

  React.useEffect(() => {
    verify();
  });

  return (
    <div>
      <Typography variant="h3">Sign Up</Typography>
      <form>
        <TextField
          id="username"
          label="用户名"
          required
          value={username}
          onChange={_changeUsername}
          placeholder="请输入用户名"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="password"
          label="密码"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="请输入密码"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="email"
          label="邮箱"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="请输入邮箱"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <TextField
            id="code"
            label="验证码"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="请输入验证码"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" onClick={_sendVerifyCode}>
            获取验证码
          </Button>
        </Box>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={_signUp}
        >
          注册
        </Button>
      </form>
    </div>
  );
}
