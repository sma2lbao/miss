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
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatQuote,
  FormatListBulleted,
  FormatListNumbered,
  Code
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "inline-flex",
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
  // { label: "H1", style: "header-one", value: "h1", icon: <FormatBold /> },
  // { label: "H2", style: "header-two", value: "h2", icon: <FormatBold /> },
  // { label: "H3", style: "header-three", value: "h3", icon: <FormatBold /> },
  // { label: "H4", style: "header-four", value: "h4", icon: <FormatBold /> },
  // { label: "H5", style: "header-five", value: "h5", icon: <FormatBold /> },
  // { label: "H6", style: "header-six", value: "h6", icon: <FormatBold /> },
  {
    label: "Blockquote",
    style: "blockquote",
    value: "blockquote",
    icon: <FormatQuote />
  },
  {
    label: "UL",
    style: "unordered-list-item",
    value: "ul",
    icon: <FormatListBulleted />
  },
  {
    label: "OL",
    style: "ordered-list-item",
    value: "ol",
    icon: <FormatListNumbered />
  },
  {
    label: "CodeBlock",
    style: "code-block",
    value: "codeblock",
    icon: <Code />
  }
];

const INLINE_STYLES = [
  { label: "Bold", style: "BOLD", value: "bold", icon: <FormatBold /> },
  { label: "Italic", style: "ITALIC", value: "italic", icon: <FormatItalic /> },
  {
    label: "Underline",
    style: "UNDERLINE",
    value: "underline",
    icon: <FormatUnderlined />
  }
  // {
  //   label: "Monospace",
  //   style: "CODE",
  //   value: "code",
  //   icon: <FormatQuote />,
  // },
];

export const Controls = props => {
  const classes = useStyles();
  const [inlines, setInlines] = React.useState<string[]>([]);
  const [blocktype, setBlocktype] = React.useState<string>();
  const { toggleBlockType, toggleInlineStyle } = props;
  // const selection = editorState.getSelection();
  // const blockType = editorState
  //   .getCurrentContent()
  //   .getBlockForKey(selection.getStartKey())
  //   .getType();
  // const currentStyle = editorState.getCurrentInlineStyle();

  const handleInlineFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    const { style } = event.currentTarget.dataset;
    if (style) {
      toggleInlineStyle(style);
    }
    setInlines(newFormats);
  };

  const handleBlocktypeFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormat
  ) => {
    const { style } = event.currentTarget.dataset;
    if (style) {
      toggleBlockType(style);
    }
    setBlocktype(newFormat);
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <ToggleButtonGroup
        value={inlines}
        onChange={handleInlineFormat}
        classes={{ grouped: classes.grouped }}
      >
        {INLINE_STYLES.map(type => (
          <ToggleButton
            data-style={type.style}
            key={type.value}
            value={type.value}
          >
            {type.icon}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Divider flexItem orientation="vertical" className={classes.divider} />
      <ToggleButtonGroup
        value={blocktype}
        exclusive
        onChange={handleBlocktypeFormat}
        classes={{ grouped: classes.grouped }}
      >
        {BLOCK_TYPES.map(type => (
          <ToggleButton
            data-style={type.style}
            key={type.value}
            value={type.value}
          >
            {type.icon}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Paper>
  );
};
