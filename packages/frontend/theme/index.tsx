import * as React from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00255A",
      light: "#E2F1FA",
    },
    secondary: {
      main: "#E2F1FA",
      light: "#FFFFFF",
    },
    error: {
      main: red[200],
    },
    background: {
      default: "#FFFFFF",
    },
    mode: "light",
  },
});

export function MuiThemeProvider(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
