import layout, { LayoutOptions } from "./layout";
import base, { BaseOptions } from "./base";

export interface customOption {
  layout: LayoutOptions;
  base: BaseOptions;
}

export default {
  layout,
  base
};
