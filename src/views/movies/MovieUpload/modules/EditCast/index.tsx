import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Box,
  ListSubheader,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MoreVert, AddCircle } from "@material-ui/icons";
import { Placeholder } from "@/components/base/Placeholder";
import { Character } from "@/schema";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

interface ICreditDialogProps {
  children?: React.ReactNode;
  open: boolean;
}

const CreditDialog: React.FC<ICreditDialogProps> = (
  props: ICreditDialogProps
) => {
  const [open, setOpen] = React.useState(props.open);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Create</DialogTitle>
      <DialogContent dividers></DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const EditCast: React.FC = () => {
  const classes = useStyles();
  const [credits] = React.useState<Character[]>([]);

  const handleAddCredit = () => {
    CreditDialog({
      open: true
    });
  };

  return (
    <Box className={classes.root}>
      <List
        subheader={
          <ListSubheader>
            <Typography>演职表</Typography>
            <IconButton onClick={handleAddCredit} size="small">
              <AddCircle fontSize="small" />
            </IconButton>
          </ListSubheader>
        }
      >
        {credits.length ? (
          <>
            {credits.map((item, idx) => {
              return (
                <ListItem key={idx}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar}></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={item.description}
                  />
                  <ListItemSecondaryAction>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </>
        ) : (
          <div>
            <Placeholder title="请添加演职人员" />
          </div>
        )}
      </List>
    </Box>
  );
};

export default EditCast;
