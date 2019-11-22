import { ReactEventHandler } from "react";

// 播放速率
export enum PlayRate {
  S075 = 0.75,
  F125 = 1.25,
  F150 = 1.5,
  F200 = 2.0
}

// 媒体类型
export enum MediaType {
  M3U8 = "m3u8",
  NORMAL = "normal"
}

// Play状态
export enum PlayStatus {
  Loading = 0, // 准备中
  Ready = 1, // 已准备
  Waiting = 2, // 加载中
  Playing = 3, //播放中
  Pause = 4, // 播放暂停
  Ended = 5, // 播放完毕
  Error = 6 // 播放出错
}

export interface ProgressProps {
  duration: number;
  currentTime: number;
  onChange: (value: number) => void;
  cache?: number;
}

export interface VolumeProps {
  volume: number;
  muted: boolean;
  onClickMuted: () => void;
  onVolumeChange: (value: number) => void;
}

export interface ToolProps {
  status: PlayStatus;
  onPlay: () => void;
  onPause: () => void;
}

interface PlayerAttributes {
  autoPlay?: boolean;
  controls?: boolean;
  controlsList?: string;
  crossOrigin?: string;
  loop?: boolean;
  mediaGroup?: string;
  muted?: boolean;
  // playsinline?: boolean;
  preload?: string;
  src: string;

  height?: number | string;
  playsInline?: boolean;
  poster?: string;
  width?: number | string;
  disablePictureInPicture?: boolean;
}

interface VideoType {
  mediaType: MediaType;
}

interface PlayerCallback<T> {
  onError?: ReactEventHandler<T>; // also a Media Event
  onErrorCapture?: ReactEventHandler<T>; // also a Media Event
  // Media Events
  onAbort?: ReactEventHandler<T>;
  onAbortCapture?: ReactEventHandler<T>;
  onCanPlay?: ReactEventHandler<T>;
  onCanPlayCapture?: ReactEventHandler<T>;
  onCanPlayThrough?: ReactEventHandler<T>;
  onCanPlayThroughCapture?: ReactEventHandler<T>;
  onDurationChange?: ReactEventHandler<T>;
  onDurationChangeCapture?: ReactEventHandler<T>;
  onEmptied?: ReactEventHandler<T>;
  onEmptiedCapture?: ReactEventHandler<T>;
  onEncrypted?: ReactEventHandler<T>;
  onEncryptedCapture?: ReactEventHandler<T>;
  onEnded?: ReactEventHandler<T>;
  onEndedCapture?: ReactEventHandler<T>;
  onLoadedData?: ReactEventHandler<T>;
  onLoadedDataCapture?: ReactEventHandler<T>;
  onLoadedMetadata?: ReactEventHandler<T>;
  onLoadedMetadataCapture?: ReactEventHandler<T>;
  onLoadStart?: ReactEventHandler<T>;
  onLoadStartCapture?: ReactEventHandler<T>;
  onPause?: ReactEventHandler<T>;
  onPauseCapture?: ReactEventHandler<T>;
  onPlay?: ReactEventHandler<T>;
  onPlayCapture?: ReactEventHandler<T>;
  onPlaying?: ReactEventHandler<T>;
  onPlayingCapture?: ReactEventHandler<T>;
  onProgress?: ReactEventHandler<T>;
  onProgressCapture?: ReactEventHandler<T>;
  onRateChange?: ReactEventHandler<T>;
  onRateChangeCapture?: ReactEventHandler<T>;
  onSeeked?: ReactEventHandler<T>;
  onSeekedCapture?: ReactEventHandler<T>;
  onSeeking?: ReactEventHandler<T>;
  onSeekingCapture?: ReactEventHandler<T>;
  onStalled?: ReactEventHandler<T>;
  onStalledCapture?: ReactEventHandler<T>;
  onSuspend?: ReactEventHandler<T>;
  onSuspendCapture?: ReactEventHandler<T>;
  onTimeUpdate?: ReactEventHandler<T>;
  onTimeUpdateCapture?: ReactEventHandler<T>;
  onVolumeChange?: ReactEventHandler<T>;
  onVolumeChangeCapture?: ReactEventHandler<T>;
  onWaiting?: ReactEventHandler<T>;
  onWaitingCapture?: ReactEventHandler<T>;
}

export interface PlayerProps
  extends VideoType,
    PlayerAttributes,
    PlayerCallback<any> {}
