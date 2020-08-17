import * as React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { BaseEditorProps } from "./editor";

export const NormalEditor: React.FC<BaseEditorProps> = (
  props: BaseEditorProps
) => {
  //   const { value, onChange } = props;
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return <Editor editorState={editorState} onChange={handleChange} />;
};
