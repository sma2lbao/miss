import * as React from "react";
import { Input, Button } from "@material-ui/core";

export interface AddCommentProps {
  onSubmit?: (text: string) => void;
}

export const AddComment = (props: AddCommentProps) => {
  const [content, setContent] = React.useState<string>("");

  const handleSend = () => {
    props.onSubmit && props.onSubmit(content);
  };

  return (
    <div>
      <Input
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder=""
      />
      <Button onClick={handleSend} disabled={!content}>
        Send
      </Button>
    </div>
  );
};

export default AddComment;
