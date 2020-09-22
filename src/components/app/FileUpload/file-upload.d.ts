export interface BaseFileUploadProps {
  custom?: boolean;

  component?: React.ElementType<any>;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}
