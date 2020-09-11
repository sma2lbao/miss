export interface BaseFileUploadProps {
  component?: React.ElementType<any>;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}
