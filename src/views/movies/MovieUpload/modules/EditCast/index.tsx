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
  Input
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AddCircle, Delete } from "@material-ui/icons";
import { Placeholder } from "@/components/base/Placeholder";
import { Character } from "@/schema";

interface CharacterEdit extends Character {
  // status:
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export const EditCast = React.forwardRef((props, ref) => {
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
      setCredits([...credits, cur]);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { dataset } = e.currentTarget;
    if (dataset.idx) {
      const newCredits = credits.splice(+dataset.idx, 1);
      setCredits([...newCredits]);
    }
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
                  {
                    <div>
                      <ListItemAvatar>
                        <Avatar src={item.avatar}></Avatar>
                      </ListItemAvatar>
                    </div>
                  }
                  <ListItemText
                    primary={
                      <div>
                        <Input
                          data-idx={idx}
                          data-key="name"
                          onChange={handleChange}
                          value={item.name}
                          placeholder="请输入名字"
                        />
                      </div>
                    }
                    secondary={
                      <div>
                        <Input
                          data-idx={idx}
                          data-key="description"
                          value={item.description}
                          placeholder="请输入描述"
                        />
                      </div>
                    }
                  />
                  <ListItemSecondaryAction>
                    {/* <IconButton>
                      <Edit />
                    </IconButton> */}
                    {/* <IconButton>
                      <Done />
                    </IconButton> */}
                    <IconButton data-idx={idx} onClick={handleDelete}>
                      <Delete />
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
});

export default EditCast;
