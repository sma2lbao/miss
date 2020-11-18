import layout, { LayoutOptions } from "./layout";
import base, { BaseOptions } from "./base";

export interface CustomOption {
  layout: LayoutOptions;
  base: BaseOptions;
}

export default {
  layout,
  base
};
