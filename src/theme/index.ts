import { createMuiTheme } from "@material-ui/core/styles";
// import * as Colors from '@material-ui/core/colors'

import overrides from "./overrides";
import typography from "./typography";
import palette from "./palette";

const theme = createMuiTheme({
  palette,
  overrides,
  typography
});

export default theme;
