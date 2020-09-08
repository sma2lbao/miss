import * as React from "react";
import { Input } from "@material-ui/core";
import { BaseInputProps } from "./input";

export const EditableInput: React.FC<BaseInputProps> = props => {
  const { value, onChange, placeholder } = props;
  return (
    <Input
      //   inputProps={{ "data-key": "title" }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
