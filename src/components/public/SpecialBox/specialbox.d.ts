export interface BaseSpecialBoxProps {
  status?: SpecialBoxStatus;

  component?: React.ElementType<any>;

  placeholder?: boolean;

  placeholderTitle?: string;

  placeholderSubtitle?: string;

  placeholderNode?: React.ReactNode;

  loading?: boolean;

  loadingTitle?: string;

  loadingSubtitle?: string;

  loadingNode?: React.ReactNode;

  error?: boolean;

  errorTitle?: string;

  errorSubtitle?: string;

  errorNode?: React.ReactNode;
}

export interface TextSpecialBoxProps
  extends Omit<
    BaseSpecialBoxProps,
    | "placeholderTitle"
    | "placeholderSubtitle"
    | "loadingTitle"
    | "loadingSubtitle"
    | "errorTitle"
    | "errorSubtitle"
  > {}
