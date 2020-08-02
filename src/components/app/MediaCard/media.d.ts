export interface Author {
  username: string;
  nickname?: string;
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
  author?: Author;
}

export interface MediaNormalProps extends MediaBase {}
