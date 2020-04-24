import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  GridList,
  GridListTile
  // CardActions,
  // Button
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export interface ProjectItemProps {
  logo?: string;
  name?: string;
  title?: string;
  remain?: string;
  address?: string;
  content?: string;
  pictures?: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      boxShadow: theme.shadows[0],
      borderRadius: 0
    },
    logo: {
      borderRadius: theme.shape.borderRadius,
      width: 60,
      height: 60
    },
    pictureWrap: {
      padding: theme.spacing(2)
    }
  })
);

function ProjectItem(props: ProjectItemProps) {
  const classes = useStyles();
  // const { content } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar src={props.logo} className={classes.logo} />}
        title={props.title}
        subheader={
          <>
            <Typography variant="subtitle2" color="primary">
              {props.name}
            </Typography>
            <Typography variant="body2">{props.remain}</Typography>
          </>
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          dangerouslySetInnerHTML={{ __html: props.content || "" }}
        />
      </CardContent>
      <GridList cellHeight={140} cols={3} className={classes.pictureWrap}>
        {props.pictures &&
          props.pictures.map((item, i) => {
            return (
              <GridListTile key={i}>
                <img src={item} alt="" />
              </GridListTile>
            );
          })}
      </GridList>
      {/* <CardActions>
        <Button size="small" color="primary">
          download
        </Button>
      </CardActions> */}
    </Card>
  );
}

ProjectItem.defaultProps = {
  logo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBouYESt5VYCK60K5uhGZhG-TfP29I6NjM2tBpYdM1sYXQQLyw",
  name: "名称",
  title: "标题",
  remain: "2019年10月12日",
  address: "地点",
  content: `忆昔洛阳董糟丘，为余天津桥南造酒楼。

  黄金白璧买歌笑，一醉累月轻王侯。
  
  海内贤豪青云客，就中与君心莫逆。
  
  回山转海不作难，倾情倒意无所惜。
  
  我向淮南攀桂枝，君留洛北愁梦思。
  
  不忍别，还相随。
  
  相随迢迢访仙城，三十六曲水回萦。
  
  一溪初入千花明，万壑度尽松风声。
  
  银鞍金络到平地，汉东太守来相迎。
  
  紫阳之真人，邀我吹玉笙。
  
  餐霞楼上动仙乐，嘈然宛似鸾凤鸣。
  
  袖长管催欲轻举，汉东太守醉起舞。
  
  手持锦袍覆我身，我醉横眠枕其股。
  
  当筵意气凌九霄，星离雨散不终朝，分飞楚关山水遥。
  
  余既还山寻故巢，君亦归家渡渭桥。
  
  君家严君勇貔虎，作尹并州遏戎虏。
  
  五月相呼渡太行，摧轮不道羊肠苦。
  
  行来北凉岁月深，感君贵义轻黄金。
  
  琼杯绮食青玉案，使我醉饱无归心。
  
  时时出向城西曲，晋祠流水如碧玉。
  
  浮舟弄水箫鼓鸣，微波龙鳞莎草绿。
  
  兴来携妓恣经过，其若杨花似雪何！
  
  红妆欲醉宜斜日，百尺清潭写翠娥。
  
  翠娥婵娟初月辉，美人更唱舞罗衣。
  
  清风吹歌入空去，歌曲自绕行云飞。
  
  此时行乐难再遇，西游因献《长杨赋》。
  
  北阙青云不可期，东山白首还归去。
  
  渭桥南头一遇君，酂台之北又离群。
  
  问余别恨今多少，落花春暮争纷纷。
  
  言亦不可尽，情亦不可及。
  
  呼儿长跪缄此辞，寄君千里遥相忆。`,
  pictures: [
    "http://g.search2.alicdn.com/img/bao/uploaded/i4/i1/740968665/TB1U1uCi.l7MKJjSZFDXXaOEpXa_!!0-item_pic.jpg",
    "http://g.search2.alicdn.com/img/bao/uploaded/i4/i1/740968665/TB1U1uCi.l7MKJjSZFDXXaOEpXa_!!0-item_pic.jpg",
    "http://g.search2.alicdn.com/img/bao/uploaded/i4/i1/740968665/TB1U1uCi.l7MKJjSZFDXXaOEpXa_!!0-item_pic.jpg"
  ]
} as Partial<ProjectItemProps>;

export default ProjectItem;
