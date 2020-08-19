import * as React from "react";
import { NormalEditor } from "@/components/base/Editor";

export const EditAbout = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));

  return (
    <div>
      <NormalEditor />
    </div>
  );
});
