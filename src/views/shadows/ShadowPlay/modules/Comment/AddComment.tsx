import * as React from "react";
import { Input, Button, Box } from "@material-ui/core";

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
    <Box display="flex">
      <Input
        fullWidth
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="随便发点~"
      />
      <Button variant="outlined" onClick={handleSend} disabled={!content}>
        提交
      </Button>
    </Box>
  );
};

export default AddComment;
