import * as React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { useSnackbar } from "notistack";
import {
  useHasUsernameQuery,
  useSendRegisterEmailMutation,
  useCreateUserWithCodeMutation
} from "@/schema";

export default function SignIn() {
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
    },
    onError(error) {
      console.error(error);
      enqueueSnackbar("发送失败");
    }
  });
  const _sendVerifyCode = function() {
    send_register_email({ variables: { email: email } });
  };

  // 注册
  const [create_user_with_code] = useCreateUserWithCodeMutation({
    onError(error) {
      console.error(error);
      enqueueSnackbar("注册失败");
    },
    onCompleted(data) {
      console.log(data);
      enqueueSnackbar("注册成功");
    }
  });
  const _signUp = function() {
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

  return (
    <div>
      <form>
        <TextField
          id="username"
          label="用户名"
          required
          value={username}
          onChange={_changeUsername}
          placeholder="请输入用户名"
          fullWidth
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
          margin="normal"
        />
        <Box>
          <TextField
            id="code"
            label="验证码"
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder="请输入验证码"
            margin="normal"
          />
          <Button variant="contained" onClick={_sendVerifyCode}>
            获取验证码
          </Button>
        </Box>
        <Button variant="contained" fullWidth onClick={_signUp}>
          注册
        </Button>
      </form>
    </div>
  );
}
