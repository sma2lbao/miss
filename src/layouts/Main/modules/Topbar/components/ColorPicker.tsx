import * as React from "react";
import { useCustomTheme } from "@/theme";
import { purple } from "@material-ui/core/colors";

export const ColorPicker: React.FC = () => {
  const [, changeCustomTheme] = useCustomTheme();

  const changeThemeColor = () => {
    changeCustomTheme({
      palette: {
        primary: {
          main: purple[500]
        },
        secondary: {
          main: "#f44336"
        }
      }
    });
  };

  return (
    <div>
      <div onClick={changeThemeColor}>改变颜色</div>
    </div>
  );
};

export default ColorPicker;
