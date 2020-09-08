import * as React from "react";

export const useEditableInput = (initValue: any): [any, any] => {
  const [value, setValue] = React.useState(initValue);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
