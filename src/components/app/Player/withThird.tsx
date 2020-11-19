import * as React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core";
import { YouTube } from "@material-ui/icons";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
// import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      position: "relative",
      width: "100%"
    },
    tool: {
      position: "absolute",
      right: theme.spacing(1),
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      maxHeight: "50%",
      overflow: "auto",
      background: "rgba(0, 0, 0, .1)",
      backdropFilter: "blur(8px)",
      color: "#fff",
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      visibility: "hidden",
      "$wrap:hover &": {
        visibility: "initial"
      }
    },
    grouped: {
      border: "none",
      "&:not(:first-child)": {
        borderRadius: theme.shape.borderRadius
      },
      "&:first-child": {
        borderRadius: theme.shape.borderRadius
      }
    }
  })
);

export interface WithThirdProps {
  youtubeUrl?: string | null;
}

export function withThird<P>(Component: React.FC<P & WithThirdProps>) {
  return (props: P & WithThirdProps) => {
    const classes = useStyles();
    const { youtubeUrl, ...rest } = props;
    const originUrl = rest && (rest as any).url ? (rest as any).url : undefined;
    const [bridgUrl, setBridgUrl] = React.useState<string>(originUrl);
    const [source, setSource] = React.useState<string>();

    const showThird =
      youtubeUrl &&
      rest &&
      (rest as any).url &&
      (rest as any).url !== youtubeUrl;

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      nextValue: string
    ) => {
      setSource(nextValue);
    };
    React.useEffect(() => {
      if (source === "youtube") {
        setBridgUrl(youtubeUrl as string);
      } else {
        setBridgUrl(originUrl);
      }
    }, [source, originUrl, youtubeUrl]);

    return (
      <div className={classes.wrap}>
        <Component {...(rest as P)} url={bridgUrl} />
        {showThird && (
          <div className={classes.tool}>
            <ThemeProvider
              theme={() => {
                return createMuiTheme({
                  palette: { type: "dark" }
                });
              }}
            >
              <ToggleButtonGroup
                classes={{ grouped: classes.grouped }}
                orientation="vertical"
                value={source}
                exclusive
                onChange={handleChange}
              >
                <ToggleButton value="youtube">
                  <YouTube></YouTube>
                </ToggleButton>
              </ToggleButtonGroup>
            </ThemeProvider>
          </div>
        )}
      </div>
    );
  };
}
export default withThird;
