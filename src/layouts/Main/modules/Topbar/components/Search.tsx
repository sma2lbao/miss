import * as React from "react";
import { Search as SearchIcon } from "@material-ui/icons";
import { Theme, InputBase } from "@material-ui/core";
import { createStyles, makeStyles, fade } from "@material-ui/core/styles";
import { useRouterHelper } from "@/hooks";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    search: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      display: "inline-flex",
      alignItems: "center",
      margin: theme.spacing(0, 1)
    },
    icon: {
      pointerEvents: "none",
      margin: theme.spacing(0, 1)
    },
    input: {
      color: "inherit",
      paddingRight: theme.spacing(1),
      transition: theme.transitions.create("width"),
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  });
});

export default function Search() {
  const classes = useStyles();
  const [word, setWord] = React.useState("");
  const RouterHelper = useRouterHelper();

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.keyCode === 13 && word) {
      RouterHelper.gotoSearch(word);
    }
  };

  return (
    <div className={classes.search}>
      <SearchIcon className={classes.icon} />
      <InputBase
        value={word}
        onChange={e => setWord(e.target.value)}
        classes={{ input: classes.input }}
        placeholder="搜索"
        inputProps={{ "aria-label": "Search" }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
