import * as React from "react";
import { NormalEditor } from "@/components/base/Editor";
import { EditorHandles } from "@/components/base/Editor/editor";

export interface EditAboutHandles {
  about?: string;
}

export const EditAbout = React.forwardRef<EditAboutHandles, unknown>(
  (props, ref) => {
    const [aboutRaw, setAboutRaw] = React.useState("");

    React.useImperativeHandle(ref, () => ({
      about: aboutRaw
    }));
    const editorRef = React.createRef<EditorHandles>();

    const handleBlur = () => {
      const rawString = editorRef.current?.getRawString();
      setAboutRaw(rawString);
    };

    return (
      <div>
        <NormalEditor ref={editorRef} onBlur={handleBlur} />
      </div>
    );
  }
);

export default EditAbout;
