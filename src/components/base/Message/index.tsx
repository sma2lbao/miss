import * as React from "react";
import * as ReactDOM from "react-dom";
import { SnackbarProvider, useSnackbar, OptionsObject } from "notistack";

type SnackbarProps = {
  message: React.ReactNode;
  options?: OptionsObject | undefined;
};

// add a <div> child to body under which to mount the snackbars
const mountPoint = document.createElement("div");
document.body.appendChild(mountPoint);

const ShowSnackbar = (props: SnackbarProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, options } = props;
  enqueueSnackbar(message, options);
  return <div></div>;
};

export const Message = {
  success: function(msg: React.ReactNode) {
    this.toast(msg, { variant: "success" });
  },
  warning: function(msg: React.ReactNode) {
    this.toast(msg, { variant: "warning" });
  },
  info: function(msg: React.ReactNode) {
    this.toast(msg, { variant: "info" });
  },
  error: function(msg: React.ReactNode) {
    this.toast(msg, { variant: "error" });
  },
  toast: function(msg: React.ReactNode, opts?: OptionsObject | undefined) {
    console.log("msg: ", msg, opts, mountPoint);
    ReactDOM.render(
      <div>
        <SnackbarProvider maxSnack={3}>
          <ShowSnackbar message={msg} options={opts} />
        </SnackbarProvider>
      </div>,
      mountPoint
    );
  }
};

export default Message;
