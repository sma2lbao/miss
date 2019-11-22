import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { IconButton, ClickAwayListener } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import Controls from "./Controls";
import Progress from "./Progress";
import Volume from "./Volume";
import Tool from "./Tool";
import SettingPanel from "./SettingPanel";
import {
  PlayerProps,
  PlayRate,
  PlayStatus,
  MediaType
} from "./player.interface";
import moment from "moment";
import Hls from "hls.js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      minHeight: 700
    },
    setting: {},
    wrap: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    position: {
      position: "absolute",
      right: 0,
      bottom: `calc(100% + ${theme.spacing(1)}px)`
    }
  })
);

function VideoPlayer(props: PlayerProps) {
  const {
    // 业务相关
    mediaType,
    src,
    // 事件相关
    onDurationChange,
    onTimeUpdate,
    onProgress,
    onVolumeChange,
    onLoadedMetadata,
    onRateChange,
    onWaiting,
    onPlaying,
    onPause,
    onEnded,
    onError,
    onCanPlay,
    ...rest
  } = props;

  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const classes = useStyles();
  const [openSetting, setOpenSetting] = React.useState(false);
  const [videoInfo, setVideoInfo] = React.useState({
    status: PlayStatus.Loading, // 是否可以播放(需初始化)
    volume: 1, // 音量值(需初始化)
    muted: false, // 是否静音(需初始化)
    playbackRate: 1, // 播放速率
    duration: 0, // 时长信息（ms）
    currentTime: 0, // (ms)
    cache: 0 // 已缓存的长度（ms）
  });
  const [source, setSource] = React.useState(
    mediaType === MediaType.M3U8 ? "" : src
  );

  React.useEffect(() => {
    if (mediaType === MediaType.M3U8 && videoRef.current) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
    }
    // window.player = videoRef.current
  }, []);

  // 全屏播放
  const fullscreen = () => {
    videoRef.current &&
      videoRef.current.requestFullscreen({
        navigationUI: "hide"
      });
  };

  // 画中画
  const pipscreen = () => {
    // if (videoRef.current && videoRef.current.requestPictureInPicture) {
      // videoRef.current.requestPictureInPicture();
    // }
  };

  // 播放
  const play = function() {
    videoRef.current && videoRef.current.play();
  };

  // 暂停
  const pause = function() {
    videoRef.current && videoRef.current.pause();
  };

  // 跳跃
  const seek = function(num: number, type: "ms" | "s" = "ms") {
    let result = num;
    // 转换成秒
    if (type === "ms") {
      result = result / 1000;
    }
    if (videoRef.current) {
      videoRef.current.currentTime = result;
    }
  };

  // 设置音量数值
  const volume = (num: number, type: "small" | "percent" = "small") => {
    let result = num;
    // 转换成小数
    if (type === "percent") {
      result = result / 100.0;
    }
    if (videoRef.current) {
      videoRef.current.volume = result;
    }
  };

  // 设置是否静音
  const muted = (val: boolean) => {
    if (videoRef.current) {
      videoRef.current.muted = val;
    }
  };

  // 设置播放速率
  const rate = (val: PlayRate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = val;
    }
  };

  // 处理时长信息
  const durationHandler = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    onDurationChange && onDurationChange(e);
    // 转换成毫秒
    const duration = e.currentTarget.duration * 1000;
    setVideoInfo({
      ...videoInfo,
      duration
    });
  };

  // 处理当前播放点
  const timeUpdateHandler = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    onTimeUpdate && onTimeUpdate(e);
    // 转换成毫秒
    const currentTime = e.currentTarget.currentTime * 1000;
    setVideoInfo({
      ...videoInfo,
      currentTime
    });
  };

  // 处理缓存点
  const progressHandler = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    onProgress && onProgress(e);
    const { buffered, duration } = e.currentTarget;
    if (!buffered || buffered.length === 0) {
      return;
    }
    const end = buffered.end(buffered.length - 1);
    const cache = end > duration ? duration * 1000 : end * 1000;
    setVideoInfo({
      ...videoInfo,
      cache
    });
  };

  // 处理音量
  const volumeHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onVolumeChange && onVolumeChange(e);
    setVideoInfo({
      ...videoInfo,
      volume: +e.currentTarget.volume,
      muted: !!e.currentTarget.muted
    });
  };

  // 速率处理
  const rateHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onRateChange && onRateChange(e);
    setVideoInfo({
      ...videoInfo,
      playbackRate: +e.currentTarget.playbackRate
    });
  };

  // 加载处理
  const waitingHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onWaiting && onWaiting(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Waiting
    });
  };

  // 播放处理
  const playingHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onPlaying && onPlaying(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Playing
    });
  };

  // 暂停处理
  const pauseHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onPause && onPause(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Pause
    });
  };

  // 播放完成处理
  const endedHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onEnded && onEnded(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Ended
    });
  };

  // 播放出错处理
  const errorHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onError && onError(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Error
    });
  };

  // 能播放处理
  const canplayHandler = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    onCanPlay && onCanPlay(e);
    setVideoInfo({
      ...videoInfo,
      status: PlayStatus.Ready
    });
  };

  // 处理video需要初始化获取的信息
  const loadedMetadataHandler = (
    e: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    onLoadedMetadata && onLoadedMetadata(e);
    const { volume, muted, playbackRate } = e.currentTarget;
    // console.dir(e.currentTarget)
    setVideoInfo({
      ...videoInfo,
      volume,
      muted,
      playbackRate
    });
  };

  return (
    <div className={classes.root}>
      <video
        {...rest}
        src={source}
        ref={videoRef}
        // 状态事件
        onWaiting={waitingHandler}
        onPlaying={playingHandler}
        onPause={pauseHandler}
        onEnded={endedHandler}
        onError={errorHandler}
        onCanPlay={canplayHandler}
        // 其他事件
        onLoadedMetadata={loadedMetadataHandler}
        onVolumeChange={volumeHandler}
        onProgress={progressHandler}
        onTimeUpdate={timeUpdateHandler}
        onDurationChange={durationHandler}
        onRateChange={rateHandler}
      />
      <Tool status={videoInfo.status} onPlay={play} onPause={pause} />
      <Volume
        volume={videoInfo.volume}
        muted={videoInfo.muted}
        onClickMuted={() => muted(!videoInfo.muted)}
        onVolumeChange={val => volume(val)}
      />
      <Progress
        duration={videoInfo.duration} // 时长信息（ms）
        currentTime={videoInfo.currentTime} // (ms)
        onChange={(value: number) => seek(value)}
      />
      <ClickAwayListener onClickAway={() => setOpenSetting(false)}>
        <div className={classes.wrap}>
          <IconButton
            className={classes.setting}
            size="small"
            onClick={() => setOpenSetting(true)}
          >
            <Settings />
          </IconButton>
          {openSetting && (
            <div className={classes.position}>
              <SettingPanel />
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

VideoPlayer.defaultProps = {
  autoPlay: false,
  controls: false,
  controlsList: "nodownload nofullscreen noremoteplayback",
  loop: false,
  muted: false,
  playsInline: false,
  width: 200,
  height: 100,
  preload: "auto"
} as Partial<PlayerProps>;

export default VideoPlayer;
