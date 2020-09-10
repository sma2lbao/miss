export interface BaseFileUploadProps {
  onComplete?(url: string): void;

  onError?(error?: any): void;
}
