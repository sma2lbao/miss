import * as React from "react";
import { EditableInput, useEditableInput } from "@/components/app/Input";

const Test: React.FC = () => {
  const [title, setTitle] = useEditableInput("");

  return (
    <div>
      <EditableInput
        // variant="h4"
        value={title}
        onChange={setTitle}
        placeholder="请输入"
      />
    </div>
  );
};

export default Test;
