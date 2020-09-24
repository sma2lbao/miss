import * as React from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertFromRaw,
  convertToRaw
} from "draft-js";
import "draft-js/dist/Draft.css";
import { BaseEditorProps, BaseEditorHandles } from "./editor";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import { Controls } from "./Controls";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // minHeight: 420,
    },
    editor: {
      minHeight: 220
    }
  })
);

const StyleButton = props => {
  let className = "RichEditor-styleButton";
  if (props.active) {
    className += " RichEditor-activeButton";
  }
  const onToggle = e => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" }
];

const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export const NormalEditor = React.forwardRef<
  BaseEditorHandles,
  BaseEditorProps
>((props, ref) => {
  const classes = useStyles();
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

  const handleKeyCommand = (cmd, state) => {
    const newState = RichUtils.handleKeyCommand(state, cmd);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const mapKeyToEditorCommand = e => {
    // if (e.keyCode === 9 /* TAB */) {
    //   const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
    //   if (newEditorState !== editorState) {
    //     setEditorState(newEditorState);
    //   }
    //   return null;
    // }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = blockType => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = inlineStyle => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  // Custom overrides for "code" style.
  const styleMap = {
    CODE: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2
    }
  };

  function getBlockStyle(block) {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return "";
    }
  }

  return (
    <div className={classes.root}>
      {/* <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      /> */}
      <Controls
        editorState={editorState}
        toggleBlockType={toggleBlockType}
        toggleInlineStyle={toggleInlineStyle}
      />
      <div className={classes.editor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={setEditorState}
          onBlur={onBlur}
          placeholder={placeholder}
          spellCheck={true}
        />
      </div>
    </div>
  );
});
