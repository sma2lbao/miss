export enum BaseExceptionStatus {
  ERROR = 100000,
  ENTITY_NOT_FOUND = 100404
}

export enum MediumExceptionStatus {
  ERROR = 200000,
  MEDIUM_NOT_FOUND = 200404
}

export enum UserExceptionStatus {
  ERROR = 300000,
  REGISTER_OTP_DIFFERENT = 300001,
  REGISTER_OTP_NOT_EXPIRED = 300002,
  USER_UNAUTHORIZED = 300401,
  USER_NOT_FOUND = 300404
}

export enum FollowExceptionStutus {
  ERROR = 400000,
  FOLLOWER_OWNER_REPEAT = 400001,
  FOLLOW_NOT_FOUND = 400404
}

export enum ShadowExceptionStatus {
  ERROR = 500000,
  MEDIUM_NOT_FOUND = 500404
}

export type ExceptionStatus =
  | BaseExceptionStatus
  | MediumExceptionStatus
  | UserExceptionStatus
  | FollowExceptionStutus
  | ShadowExceptionStatus;
