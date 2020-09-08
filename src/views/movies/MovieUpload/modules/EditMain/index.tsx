import React from "react";
import {
  Box,
  Typography,
  GridList,
  GridListTile,
  Button
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MediaNormal } from "@/components/app/Media";
import { EditMediumInfo } from "../EditMediumInfo";
// import Placeholder from "@/components/base/Placeholder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 0)
    },
    box: {
      padding: theme.spacing(2, 0),

      "& + &": {
        borderTop: `1px solid ${theme.palette.divider}`
      }
    }
  })
);

export interface EditMainHandles {
  mediums: any[];
}

export const EditMain = React.forwardRef<EditMainHandles, unknown>(
  (props, ref) => {
    const classes = useStyles();
    const [openMedium, setOpenMedium] = React.useState(false);
    const [mediums, setMediums] = React.useState<any>([]);

    React.useImperativeHandle(ref, () => ({
      mediums: mediums
    }));

    const handleSave = medium => {
      setMediums([...mediums, medium]);
    };

    return (
      <>
        <Box className={classes.root}>
          <Box className={classes.box}>
            <Typography variant="subtitle1" gutterBottom>
              相关资源
            </Typography>
            <GridList cellHeight="auto" cols={4}>
              {mediums.map((item, idx) => {
                return (
                  <GridListTile cols={1} key={idx}>
                    <MediaNormal {...item} />
                  </GridListTile>
                );
              })}

              <Button onClick={() => setOpenMedium(true)}>添加</Button>
            </GridList>
          </Box>
          {/* <Box className={classes.box}>
        <Typography variant="subtitle1">精彩点评</Typography>
      </Box> */}
        </Box>
        <EditMediumInfo
          open={openMedium}
          onSave={handleSave}
          onCancel={() => setOpenMedium(false)}
        />
      </>
    );
  }
);

export default EditMain;
