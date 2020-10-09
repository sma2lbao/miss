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
      minHeight: 220,
      border: `1px solid ${theme.palette.divider}`
    }
  })
);

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
