export enum SpecialBoxStatus {
  LOADING = "loading",

  ERROR = "error",

  EMPTY = "empty",

  DEFAULT = "default"
}

export interface BaseSpecialBoxProps {
  status?: SpecialBoxStatus;

  emptyTitle?: string;

  emptySubtitle?: string;

  loadingTitle?: string;

  loadingSubtitle?: string;

  errorTitle?: string;

  errorSubtitle?: string;
}
