export interface BaseEditorProps {
  raw?: string;

  placeholder?: string;

  onBlur?(e: SyntheticEvent): void;
}

export interface BaseEditorHandles {
  getRawString: Function;
}

export interface EditorHandles extends BaseEditorHandles {}
