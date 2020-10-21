import * as React from "react";
import { useUploadFileOssMutation } from "@/schema";
import { BaseFileUploadProps } from "./file-upload";
import {
  Box,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { IPlaceholderProps } from "@/components/base/Placeholder/placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: (props: IPlaceholderProps) => {
        return props.width ?? "100%";
      },
      height: (props: IPlaceholderProps) => {
        return props.height ?? "100%";
      },
      color: theme.palette.text.secondary,
      flex: 1
    },
    icon: theme.custom.base.icon.small
  })
);

export const FileUpload: React.FC<BaseFileUploadProps> = props => {
  const { onComplete, onError, children, component, custom, title } = props;
  const classes = useStyles(props);

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
      {custom ? (
        { children }
      ) : (
        <Box className={classes.root}>
          <div>
            <CloudUpload className={classes.icon} />
            {/* <CircularProgress className={classes.icon} /> */}
          </div>
          <Typography variant="h6">{loading ? "上传中..." : title}</Typography>
        </Box>
      )}
    </Tag>
  );
};

FileUpload.defaultProps = {
  custom: false,
  title: "点击上传"
};
