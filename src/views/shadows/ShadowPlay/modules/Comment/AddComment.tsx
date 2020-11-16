import * as React from "react";
import { Input, Button } from "@material-ui/core";

export interface AddCommentProps {
  onSubmit?: (text: string, callbacak: () => void) => void;
}

export const AddComment = (props: AddCommentProps) => {
  const [content, setContent] = React.useState<string>("");

  const reset = () => {
    setContent("");
  };

  const handleSend = () => {
    props.onSubmit && props.onSubmit(content, reset);
  };

  return (
    <div>
      <Input
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder=""
      />
      <Button variant="outlined" onClick={handleSend} disabled={!content}>
        提交
      </Button>
    </div>
  );
};

export default AddComment;
