import * as React from "react";
import { Input, makeStyles, Theme, createStyles } from "@material-ui/core";
import { BaseInputProps } from "./input";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    input: {
      borderColor: "transparent"
    }
  })
);

export const EditableInput: React.FC<BaseInputProps> = props => {
  const { value, onChange, placeholder } = props;
  const classes = useStyles();
  return (
    <Input
      classes={{
        root: classes.root
      }}
      //   inputProps={{ "data-key": "title" }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
