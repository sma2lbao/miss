import * as React from "react";
import {
  Input,
  makeStyles,
  Theme,
  createStyles,
  InputAdornment,
  IconButton,
  ClickAwayListener
} from "@material-ui/core";
import { BaseInputProps, InputStatus } from "./input.d";
import { Edit } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      color: "inherit"
    },
    input: {
      borderColor: "transparent"
    },
    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,
    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,
    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,
    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,
    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,
    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,
    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,
    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,
    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,
    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,
    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,
    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,
    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,
    /* Styles applied to the root element if `variant="inherit"`. */
    inherit: {},

    normalRoot: {
      position: "relative"
    },

    toolIcon: {
      position: "relative",
      top: theme.spacing(-1),
      cursor: "pointer"
    }
  });
});

export const EditableInput: React.FC<BaseInputProps> = props => {
  const { value, onChange, placeholder, variant = "inherit", ...rest } = props;
  const classes = useStyles();
  const [status, setStatus] = React.useState<InputStatus>(InputStatus.NORMAL);

  const handleClickAway = () => {
    if (status !== InputStatus.NORMAL) {
      setStatus(InputStatus.NORMAL);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Input
        classes={{
          root: classes.root
        }}
        fullWidth
        multiline
        className={classes[variant]}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        startAdornment={
          status === InputStatus.NORMAL ? (
            <InputAdornment position="start">
              <IconButton
                size="small"
                color="inherit"
                onClick={() => setStatus(InputStatus.EDITING)}
              >
                <Edit fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        readOnly={status === InputStatus.NORMAL}
        disableUnderline={status === InputStatus.NORMAL}
        // onBlur={() => setStatus(InputStatus.NORMAL)}
      />
    </ClickAwayListener>
  );
};
