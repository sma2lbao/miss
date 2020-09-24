import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Divider,
  Paper
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatColorFill,
  ArrowDropDown
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
      border: `1px solid ${theme.palette.divider}`,
      flexWrap: "wrap"
    },
    divider: {
      margin: theme.spacing(1, 0.5)
    },
    grouped: {
      margin: theme.spacing(0.5),
      border: "none",
      "&:not(:first-child)": {
        borderRadius: theme.shape.borderRadius
      },
      "&:first-child": {
        borderRadius: theme.shape.borderRadius
      }
    }
  })
);

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

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" }
];

export const Controls = props => {
  const classes = useStyles();
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <Paper elevation={0} className={classes.paper}>
      <ToggleButtonGroup classes={{ grouped: classes.grouped }}>
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeft />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenter />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRight />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustify />
        </ToggleButton>
      </ToggleButtonGroup>
      <Divider flexItem orientation="vertical" className={classes.divider} />
      <ToggleButtonGroup classes={{ grouped: classes.grouped }}>
        <ToggleButton value="bold" aria-label="bold">
          <FormatBold />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalic />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlined />
        </ToggleButton>
        <ToggleButton value="color" aria-label="color" disabled>
          <FormatColorFill />
          <ArrowDropDown />
        </ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
};
