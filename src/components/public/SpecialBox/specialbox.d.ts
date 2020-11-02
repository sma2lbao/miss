export interface BaseSpecialBoxProps {
  status?: SpecialBoxStatus;

  component?: React.ElementType<any>;

  placeholder?: boolean;

  placeholderTitle?: string;

  placeholderSubtitle?: string;

  placeholderNode?: any;

  loading?: boolean;

  loadingTitle?: string;

  loadingSubtitle?: string;

  loadingNode?: any;

  error?: boolean;

  errorTitle?: string;

  errorSubtitle?: string;

  errorNode?: any;
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
