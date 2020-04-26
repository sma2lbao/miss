import { createMuiTheme, Theme } from "@material-ui/core/styles";
// import * as Colors from '@material-ui/core/colors'
import overrides from "./overrides";
import typography from "./typography";
import palette from "./palette";
import custom, { customOption } from "./custom";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom?: customOption;
  }
}

const theme = createMuiTheme(
  {
    palette,
    overrides,
    typography
  },
  {
    custom
  }
);

export default theme;
