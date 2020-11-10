import * as React from "react";
import {
  Dialog,
  Box,
  Tabs,
  Tab,
  Paper,
  InputBase,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
  Typography
} from "@material-ui/core";
import { FileUpload } from "./FileUpload";
import { Directions, Menu, CloudUpload } from "@material-ui/icons";
import { DialogFileUploadProps } from "./file-upload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      color: theme.palette.text.secondary,
      flex: 1
    },
    paper: {
      display: "flex",
      alignItems: "center"
    },
    icon: theme.custom.base.icon.small,
    tabPane: {
      marginTop: theme.spacing(2)
    }
  })
);

export const DialogFileUpload: React.FC<DialogFileUploadProps> = (
  props: DialogFileUploadProps
) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const [remoteUrl, setRemoteUrl] = React.useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRemoteUrl(event.target.value);
  };

  const handleSubmitRemoteUrl = () => {
    props.onComplete && props.onComplete(remoteUrl);
    setOpen(false);
  };

  const handleCompleteLocalUpload = (url: string) => {
    props.onComplete && props.onComplete(url);
    setOpen(false);
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>
        {props.custom ? (
          <>{props.children}</>
        ) : (
          <Box className={classes.root}>
            <div>
              <CloudUpload className={classes.icon} />
            </div>
            <Typography variant="h6">{props.title}</Typography>
          </Box>
        )}
      </div>
      <Dialog onClose={() => setOpen(false)} open={open}>
        <Box padding={2}>
          <Tabs value={tab} onChange={(_, val) => setTab(val)}>
            <Tab label="本地上传"></Tab>
            <Tab label="粘贴链接"></Tab>
          </Tabs>
          <div className={classes.tabPane}>
            <div hidden={tab !== 0}>
              <FileUpload
                onComplete={handleCompleteLocalUpload}
                onError={props.onError}
              />
            </div>
            <div hidden={tab !== 1}>
              <Paper className={classes.paper} component="form">
                <IconButton disabled>
                  <Menu />
                </IconButton>
                <InputBase
                  value={remoteUrl}
                  onChange={handleChange}
                  fullWidth
                  placeholder="链接地址"
                />
                <IconButton
                  onClick={handleSubmitRemoteUrl}
                  color="primary"
                  disabled={!remoteUrl}
                >
                  <Directions />
                </IconButton>
              </Paper>
            </div>
          </div>
        </Box>
      </Dialog>
    </div>
  );
};
export default DialogFileUpload;

DialogFileUpload.defaultProps = {
  custom: false,
  title: "点击上传"
};
