import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5VECe4EbP2tELJXayzUiB_5cvMEb6bsY4qVR1W48L-jUfpPsA";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
      background: theme.palette.background.paper
    },
    gridList: {
      // width: "100%"
    }
  })
);

export default function Protfolio() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={3}>
        <GridListTile>
          <img src={imageUrl} alt="作品图" />
          <GridListTileBar title="标题" subtitle={"副标题"} />
        </GridListTile>
        {/* <GridListTile>
          <img src={imageUrl} />
          <GridListTileBar title="标题" subtitle={"副标题"} />
        </GridListTile>
        <GridListTile>
          <img src={imageUrl} />
          <GridListTileBar title="标题" subtitle={"副标题"} />
        </GridListTile>
        <GridListTile>
          <img src={imageUrl} />
          <GridListTileBar title="标题" subtitle={"副标题"} />
        </GridListTile> */}
      </GridList>
    </div>
  );
}
