import * as React from "react";
import { NormalEditor } from "@/components/base/Editor";
import { EditorHandles } from "@/components/base/Editor/editor";

export interface EditAboutHandles {}

export const EditAbout = React.forwardRef<EditAboutHandles, unknown>(
  (props, ref) => {
    React.useImperativeHandle(ref, () => ({}));
    const editorRef = React.createRef<EditorHandles>();

    return (
      <div>
        <NormalEditor ref={editorRef} />
      </div>
    );
  }
);

export default EditAbout;
