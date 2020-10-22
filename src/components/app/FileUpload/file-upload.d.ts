export interface BaseFileUploadProps {
  custom?: boolean;

  children?: React.ReactNode;

  title?: string;

  component?: React.ElementType<any>;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}
