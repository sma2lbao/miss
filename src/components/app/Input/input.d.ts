import { InputProps } from "@material-ui/core";

const variantProps = [
  "body1",
  "body2",
  "button",
  "caption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "inherit",
  "overline",
  "subtitle1",
  "subtitle2"
] as const;

export interface BaseInputAttributes {
  placeholder?: string;

  variant?: typeof variantProps[number];
}

export interface BaseInputProps extends InputProps, BaseInputAttributes {
  value: any;

  onChange?(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
}
