import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton, Avatar } from "@material-ui/core";
import { ThumbUpAlt, ThumbDownAlt, MoreVert } from "@material-ui/icons";
import moment from "moment";
import { EditableInput, useEditableInput } from "@/components/app/Input";
import { useAuth } from "@/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    header: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(1)
    },
    infoItem: {
      "& + &": {
        marginLeft: theme.spacing(1)
      }
    },
    toolBox: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(2)
    },
    toolText: {
      marginLeft: theme.spacing(0.5)
    },
    description: {
      marginBottom: theme.spacing(1)
    }
  })
);

export interface EditInfoHandles {
  name?: string;

  alias_name?: string;

  description?: string;
}

export const EditInfo = React.forwardRef<EditInfoHandles, unknown>(
  (props, ref) => {
    const classes = useStyles();
    const [name, setName] = useEditableInput("");
    const [alias_name, setAliasName] = useEditableInput("");
    const [description, setDescription] = useEditableInput("");
    const { member } = useAuth();

    React.useImperativeHandle(ref, () => ({
      name,
      alias_name,
      description
    }));

    return (
      <div>
        <Box className={classes.header}>
          <div>
            <Typography variant="subtitle1">
              <EditableInput
                value={name}
                onChange={setName}
                placeholder="name"
              />
              <EditableInput
                value={alias_name}
                onChange={setAliasName}
                placeholder="alias_name"
              />
            </Typography>
            <Box display="flex">
              <Typography variant="caption" className={classes.infoItem}>
                观看: TODO
              </Typography>
              <Typography variant="caption" className={classes.infoItem}>
                发布时间: {moment(Date.now()).format("YYYY-MM-DD HH:mm")}
              </Typography>
            </Box>
          </div>
          <Box display="flex" alignItems="center">
            <Box className={classes.toolBox}>
              <IconButton size="small">
                <ThumbDownAlt fontSize="small" />
              </IconButton>
              <Typography className={classes.toolText}>TODO</Typography>
            </Box>
            <Box className={classes.toolBox}>
              <IconButton size="small">
                <ThumbUpAlt fontSize="small" />
              </IconButton>
              <Typography className={classes.toolText}>TODO</Typography>
            </Box>
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Typography className={classes.description} variant="body2">
          <EditableInput
            value={description}
            onChange={setDescription}
            placeholder="description..."
          />
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Avatar src={member?.avatar}></Avatar>
            <Box ml={1}>
              <Typography variant="subtitle2">{member?.nickname}</Typography>
              <Typography variant="caption">{member?.description}</Typography>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
);

export default EditInfo;
