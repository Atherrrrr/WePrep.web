import { Theme, createTheme } from "@mui/material";
import { red, green } from "@mui/material/colors";

export const AppLightTheme: Theme = createTheme({
  palette: {
    mode: "light",
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
      paper: "#1b2330",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2A93D5",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#E2F1FA",
      light: "#FFF",
    },
    error: {
      main: red[200],
    },
    background: {
      default: "#000",
      paper: "#000",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
  },
});
