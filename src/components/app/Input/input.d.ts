export interface BaseInputAttributes {
  placeholder?: string;
}

export interface BaseInputProps extends BaseInputAttributes {
  value: any;

  onChange?(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}
