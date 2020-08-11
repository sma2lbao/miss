import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { MeContext } from "..";
import { useUpdateUserMutation } from "@/schema";

const Basic: React.FC = () => {
  const meQuery = React.useContext(MeContext);
  const [avatar, setAvatar] = React.useState(meQuery?.me.avatar);
  const [nickname, setNickname] = React.useState(meQuery?.me.nickname);
  const [address, setAddress] = React.useState(meQuery?.me.address);
  const [description, setDescription] = React.useState(meQuery?.me.description);
  const [updateUser] = useUpdateUserMutation({
    variables: {
      user: {
        avatar,
        nickname,
        address,
        description
      }
    }
  });

  return (
    <div>
      <form>
        <TextField
          onChange={e => setAvatar(e.target.value)}
          label="avatar"
          placeholder={meQuery?.me.avatar}
        />
        <TextField
          onChange={e => setNickname(e.target.value)}
          label="nickname"
          placeholder={meQuery?.me.nickname ?? ""}
        />
        <TextField
          onChange={e => setAddress(e.target.value)}
          label="address"
          placeholder={meQuery?.me.address ?? ""}
        />
        <TextField
          onChange={e => setDescription(e.target.value)}
          label="description"
          placeholder={meQuery?.me.description ?? ""}
        />
      </form>
      <Button onClick={() => updateUser()}>保存</Button>
    </div>
  );
};

export default Basic;
