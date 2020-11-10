import * as React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Box,
  ListSubheader,
  Badge
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AddCircle, Delete, Edit } from "@material-ui/icons";
import { Placeholder } from "@/components/base/Placeholder";
import { Character } from "@/schema";
import { EditableInput } from "@/components/app/Input";
import { FileUpload } from "@/components/app/FileUpload";

export interface CharacterEdit extends Character {
  // status:
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    subheaderWrap: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  })
);

export interface EditCastHandles {
  credits: CharacterEdit[];
}

export const EditCast = React.forwardRef<EditCastHandles, unknown>(
  (props, ref) => {
    const classes = useStyles();
    const [credits, setCredits] = React.useState<CharacterEdit[]>([]);

    React.useImperativeHandle(ref, () => ({
      credits
    }));

    const handleAddCredit = () => {
      setCredits([
        ...credits,
        {
          avatar: "",
          name: "",
          description: "",
          tags: []
        }
      ]);
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
      const { dataset, value } = e.target;
      if (dataset.idx && dataset.key) {
        const cur = credits[dataset.idx];
        cur[dataset.key] = value;
        setCredits([...credits]);
      }
    };

    const handleChangeAvatar = (idx: number, url: string) => {
      const cur = credits[idx];
      Object.assign(cur, { avatar: url });
      setCredits([...credits]);
    };

    const handleDelete = (idx: number) => {
      credits.splice(idx, 1);
      setCredits([...credits]);
    };

    return (
      <Box className={classes.root}>
        <List
          subheader={
            <ListSubheader className={classes.subheaderWrap}>
              演职表
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
                      <FileUpload
                        custom
                        onComplete={url => handleChangeAvatar(idx, url)}
                      >
                        <Badge
                          overlap="circle"
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          badgeContent={<Edit fontSize="small" />}
                        >
                          <Avatar src={item.avatar}></Avatar>
                        </Badge>
                      </FileUpload>
                    </ListItemAvatar>
                    <div>
                      <EditableInput
                        inputProps={{ "data-idx": idx, "data-key": "name" }}
                        value={item.name}
                        onChange={handleChange}
                        placeholder="请输入名字"
                        rowsMax={1}
                      />

                      <EditableInput
                        inputProps={{
                          "data-idx": idx,
                          "data-key": "description"
                        }}
                        value={item.description}
                        onChange={handleChange}
                        placeholder="请输入描述"
                        rowsMax={1}
                      />
                    </div>
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => handleDelete(idx)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </>
          ) : (
            <div>
              <Placeholder title="Please add cast." />
            </div>
          )}
        </List>
      </Box>
    );
  }
);

export default EditCast;
