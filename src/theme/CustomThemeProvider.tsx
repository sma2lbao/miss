import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core/styles";
// import * as Colors from '@material-ui/core/colors'
import overrides from "./overrides";
import typography from "./typography";
import palette from "./palette";
import custom, { CustomOption } from "./custom";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: CustomOption;
  }
}

const CustomThemeContext = React.createContext<
  [Theme, (payload: ThemeOptions, customPayload?: CustomOption) => void]
>([createMuiTheme(), () => {}]);

export const CustomThemeProvider: React.FC = props => {
  const [customTheme, setCustomTheme] = React.useState<Theme>(() => {
    return createMuiTheme(
      {
        palette,
        overrides,
        typography
      },
      {
        custom
      }
    );
  });

  const handleChangeCustomTheme = (
    payload: ThemeOptions,
    customPayload?: CustomOption
  ) => {
    console.log("theme before: ", payload);
    const newCustomTheme = createMuiTheme(
      {
        palette,
        overrides,
        typography,
        ...payload
      },
      {
        custom,
        ...customPayload
      }
    );
    console.log("theme changing: ", newCustomTheme);
    setCustomTheme(newCustomTheme);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <CustomThemeContext.Provider
        value={[customTheme, handleChangeCustomTheme]}
      >
        {props.children}
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useCustomTheme = (): [
  Theme,
  (payload: ThemeOptions, customPayload?: CustomOption) => void
] => {
  const [custom, changeCustom] = React.useContext(CustomThemeContext);
  return [custom, changeCustom];
};

export default CustomThemeProvider;
