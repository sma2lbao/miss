import * as React from "react";
import { TextField } from "@material-ui/core";

const Basic: React.FC = () => {
  return (
    <div>
      <form>
        <TextField label="avatar" />
        <TextField label="nickname" />
        <TextField label="address" />
        <TextField label="description" />
      </form>
    </div>
  );
};

export default Basic;
