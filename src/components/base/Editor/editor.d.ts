export interface BaseEditorProps {
  raw?: string;

  onChange?: Function;
}

export interface BaseEditorHandles {
  getRawString: Function;
}

export interface EditorHandles extends BaseEditorHandles {}
