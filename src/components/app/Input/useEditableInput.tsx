import * as React from "react";
import { BaseInputAttributes } from "./input";
import { EditableInput } from "./EditableInput";

export const useEditableInput = (
  initValue: any
): [any, React.FC<BaseInputAttributes>] => {
  const [value, setValue] = React.useState(initValue);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };
  const node = (attrs: BaseInputAttributes) => {
    return <EditableInput value={value} onChange={onChange} {...attrs} />;
  };

  return [value, node];
};
