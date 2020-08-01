export interface VideoBase {
  id?: number;
  title?: string;
  subtitle?: string;
  cover?: string;
  posters?: string[];
  create_at?: Date;
  duration?: number;
}

export interface Author {
  username: string;
  nickname?: string;
  avatar: string;
}

export interface VideoWithAuthorProps extends VideoBase {
  author?: Author;
}
