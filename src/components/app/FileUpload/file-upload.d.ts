export interface BaseFileUploadProps {
  custom?: boolean;

  title?: string;

  component?: React.ElementType<any>;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}
