import * as React from "react";
import { useUploadFileOssMutation } from "@/schema";
import { BaseFileUploadProps } from "./file-upload";

export const FileUpload: React.FC<BaseFileUploadProps> = props => {
  const { onComplete, onError, children, component } = props;

  const inputRef = React.createRef<HTMLInputElement>();

  const [upload_file_oss, { loading }] = useUploadFileOssMutation({
    onCompleted(data) {
      onComplete && onComplete(data.upload_file_oss);
    },
    onError(error) {
      onError && onError(error.message);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      validity,
      files: [file]
    } = e.currentTarget;
    if (validity.valid) {
      upload_file_oss({ variables: { file } });
    }
  };

  const handleClick = () => {
    if (!loading) {
      inputRef.current?.click();
    }
  };

  const Tag = component || "div";

  return (
    <Tag role="button" onClick={handleClick}>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept="*"
        onChange={handleChange}
      />
      {children}
    </Tag>
  );
};
