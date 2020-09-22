import * as React from "react";
import ReactDOM from "react-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogProps
} from "@material-ui/core";

interface ConfirmProps extends Omit<DialogProps, "open"> {
  title?: string;
  content: string;
  cancel?: boolean;
  cancelText?: string;
  confirmText?: string;
}

interface ConfirmEventProps {
  onConfirm?(): void;
  onCancel?(): void;
}

const ShowDialog = (props: ConfirmEventProps & ConfirmProps) => {
  const [open, setOpen] = React.useState(true);
  const handleCancel = () => {
    setOpen(false);
    props.onCancel && props.onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    props.onConfirm && props.onConfirm();
  };

  const handleClose = () => {
    setOpen(false);
    props.onCancel && props.onCancel();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {props.title && <DialogTitle>{props.title}</DialogTitle>}
        <DialogContent>
          <DialogContentText>{props.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.cancel && (
            <Button onClick={handleCancel} color="primary">
              {props.cancelText || "取消"}
            </Button>
          )}
          <Button onClick={handleConfirm} color="primary" autoFocus>
            {props.confirmText || "确定"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const Confirm = {
  dialog: function(options: ConfirmProps): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const mountPoint = document.createElement("div");
      document.body.appendChild(mountPoint);
      const clear = () => {
        mountPoint.remove();
      };
      const onConfirm = () => {
        resolve(true);
        clear();
      };
      const onCancel = () => {
        resolve(false);
        clear();
      };
      ReactDOM.render(
        <div>
          <ShowDialog {...options} onConfirm={onConfirm} onCancel={onCancel} />
        </div>,
        mountPoint
      );
    });
  }
};

export default Confirm;
