import * as React from "react";
import { Input, makeStyles, Theme, createStyles } from "@material-ui/core";
import { BaseInputProps } from "./input";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {},
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
    inherit: {}
  });
});

export const EditableInput: React.FC<BaseInputProps> = props => {
  const { value, onChange, placeholder, variant = "body1" } = props;
  const classes = useStyles();
  return (
    <Input
      classes={{
        root: classes.root
      }}
      className={classes[variant]}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
