import * as React from "react";
import { useSnackbar, OptionsObject, WithSnackbarProps } from "notistack";

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};

export const Message = {
  success: function(msg: React.ReactNode, opts?: OptionsObject) {
    this.toast(msg, { ...opts, variant: "success" });
  },
  warning: function(msg: React.ReactNode, opts?: OptionsObject) {
    this.toast(msg, { ...opts, variant: "warning" });
  },
  info: function(msg: React.ReactNode, opts?: OptionsObject) {
    this.toast(msg, { ...opts, variant: "info" });
  },
  error: function(msg: React.ReactNode, opts?: OptionsObject) {
    this.toast(msg, { ...opts, variant: "error" });
  },
  toast: function(msg: React.ReactNode, opts?: OptionsObject | undefined) {
    useSnackbarRef.enqueueSnackbar(msg, opts);
  }
};

export default Message;
