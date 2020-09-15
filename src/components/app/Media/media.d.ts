export interface Author {
  username: string;
  nickname?: string | null;
  avatar: string;
}

export interface MediaBase {
  id?: number | string;
  title?: string;
  subtitle?: string;
  cover?: string;
  posters?: readonly string[] | null;
  create_at?: Date;
  duration?: number;
}

export interface MediaNormalProps extends MediaBase {
  author?: Author;
  loading?: boolean;
  disabled?: boolean;
}

export interface MediaOwnProps extends MediaBase {
  disabled?: boolean;
}

export interface MediaPlainProps {
  id?: number;
  cover?: string;
  duration?: number;
}

export interface WithToolProps {
  onDelete?(): void;
}
