import * as React from "react";
import { Input } from "@material-ui/core";

export default function AddComment() {
  return (
    <div>
      <Input
        // defaultValue="Hello world"
        placeholder="请输入评论"
      />
    </div>
  );
}