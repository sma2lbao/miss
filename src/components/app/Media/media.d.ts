export interface Author {
  username: string;
  nickname?: string | null;
  avatar: string;
}

export interface MediaBase {
  id?: number | string;
  title?: string;
  alias_title?: string;
  subtitle?: string;
  name?: string | null;
  alias_name?: string | null;
  cover?: string;
  posters?: readonly string[] | null;
  create_at?: Date;
  description?: string | null;
  duration?: number | null;
}

export interface MediaEvent {
  onClickRoot?: (e: React.MouseEvent) => void;
  onClickAuthor?: (e: React.MouseEvent) => void;
}

export interface MediaNormalProps extends MediaBase, MediaEvent {
  author?: Author;
  loading?: boolean;
  disabled?: boolean;
}

export interface MediaOwnProps extends MediaBase, MediaEvent {
  disabled?: boolean;
}

export interface MediaPlainProps extends MediaEvent {
  id?: number;
  cover?: string;
  duration?: number;
}

export interface WithToolProps {
  onDelete?(): void;
}
