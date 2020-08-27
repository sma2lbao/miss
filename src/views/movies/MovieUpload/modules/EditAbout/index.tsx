import * as React from "react";
import { NormalEditor } from "@/components/base/Editor";

export interface EditAboutHandles {}

export const EditAbout: React.RefForwardingComponent<
  EditAboutHandles,
  any
> = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));

  return (
    <div>
      <NormalEditor />
    </div>
  );
});

export default EditAbout;
