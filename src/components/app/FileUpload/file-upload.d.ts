export interface BaseFileUploadProps {
  custom?: boolean;

  children?: React.ReactNode;

  title?: string;

  maxSize?: number;

  component?: React.ElementType<any>;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}

export interface DialogFileUploadProps {
  custom?: boolean;

  children?: React.ReactNode;

  title?: string;

  children?: React.ReactNode;

  onComplete?(url: string): void;

  onError?(error?: any): void;
}
