import * as React from "react";
import { Editor, EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import { BaseEditorProps, BaseEditorHandles } from "./editor";

export const NormalEditor = React.forwardRef<
  BaseEditorHandles,
  BaseEditorProps
>((props, ref) => {
  const { raw, onBlur, placeholder } = props;
  const [editorState, setEditorState] = React.useState(() =>
    raw
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(raw)))
      : EditorState.createEmpty()
  );

  React.useImperativeHandle(ref, () => ({
    getRawString: () => {
      return JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    }
  }));

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  );
});
