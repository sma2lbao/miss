import * as React from "react";
import { TextField } from "@material-ui/core";

const Necessary: React.FC = () => {
  return (
    <div>
      <form>
        <TextField label="username" />
        <TextField label="password" />
        <TextField label="email" />
      </form>
    </div>
  );
};

export default Necessary;
