import * as React from "react";
import { useEditableInput, EditableInput } from "@/components/app/Input";

const Test: React.FC = () => {
  const [title, setTitle] = useEditableInput("");

  return (
    <div>
      <EditableInput
        variant="h4"
        value={title}
        onChange={setTitle}
        placeholder="请输入标题"
        rows={1}
      />
    </div>
  );
};

export default Test;
