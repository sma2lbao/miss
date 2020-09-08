export interface Author {
  username: string;
  nickname?: string | null;
  avatar: string;
}

export interface MediaBase {
  id?: number;
  title?: string;
  subtitle?: string;
  cover?: string;
  posters?: string[];
  create_at?: Date;
  duration?: number;
}

export interface MediaNormalProps extends MediaBase {
  author?: Author;
  loading?: boolean;
}

export interface MediaOwnProps extends MediaBase {}

export interface MediaPlainProps {
  id?: number;
  cover?: string;
  duration?: number;
}
