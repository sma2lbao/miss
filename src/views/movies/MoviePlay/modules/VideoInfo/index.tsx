import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Box, IconButton } from "@material-ui/core";
import { ThumbUpAlt, ThumbDownAlt, MoreVert } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

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

export default function VideoInfo() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.header}>
        <div>
          {/* <Typography variant="subtitle1">白雪歌送武判官归京</Typography> */}
          <Box display="flex">
            <Typography variant="caption" className={classes.infoItem}>
              {/* 观看: 22 */}
            </Typography>
            <Typography variant="caption" className={classes.infoItem}>
              {/* 发布时间: 2019/10/10 */}
            </Typography>
          </Box>
        </div>
        <Box display="flex" alignItems="center">
          <Box className={classes.toolBox}>
            <IconButton size="small">
              <ThumbDownAlt />
            </IconButton>
            {/* <Typography className={classes.toolText}>26.8k</Typography> */}
          </Box>
          <Box className={classes.toolBox}>
            <IconButton size="small">
              <ThumbUpAlt />
            </IconButton>
            {/* <Typography className={classes.toolText}>26.8k</Typography> */}
          </Box>
          <IconButton size="small">
            <MoreVert />
          </IconButton>
        </Box>
      </Box>
      <Typography className={classes.description} variant="body2">
        {/* 北风卷地白草折，胡天八月即飞雪。 忽如一夜春风来，千树万树梨花开。
        散入珠帘湿罗幕，狐裘不暖锦衾薄。 将军角弓不得控，都护铁衣冷难着。(难着
        一作：犹著) 瀚海阑干百丈冰，愁云惨淡万里凝。
        中军置酒饮归客，胡琴琵琶与羌笛。 纷纷暮雪下辕门，风掣红旗冻不翻。
        轮台东门送君去，去时雪满天山路。 山回路转不见君，雪上空留马行处。 */}
        <Skeleton width="100%" height="100%" />
        <Skeleton width="100%" height="100%" />
        <Skeleton width="100%" height="50%" />
      </Typography>

      {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Avatar>岑</Avatar>
          <Box ml={1}>
            <Typography variant="subtitle2">岑参</Typography>
            <Typography variant="caption">唐代</Typography>
          </Box>
        </Box>
        <Button>订阅</Button>
      </Box> */}
    </div>
  );
}
