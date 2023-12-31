import * as React from "react";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00255A",
      light: "E2F1FA",
    },
    secondary: {
      main: "#DAD1FF",
      light: "#F2F0FC",
    },
    error: {
      main: red[200],
    },
    background: {
      default: "#F2EFF8",
    },
    mode: "light",
  },
});

export function MuiThemeProvider(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
