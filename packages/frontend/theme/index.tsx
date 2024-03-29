// import { createContext, useEffect, useState } from "react";
// import { IThemeContext, IThemeMode } from "./types";
// import { Theme, useMediaQuery, ThemeProvider } from "@mui/material";
// import { AppDarkTheme, AppLightTheme } from "./themes";

// export const ThemeContext = createContext<IThemeContext | null>(null);

// export const ThemeContextProvider: React.FunctionComponent<
//   React.PropsWithChildren
// > = ({ children }) => {
//   const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
//   const [theme, setTheme] = useState<Theme>(AppLightTheme);

//   const SYSTEM_THEME: Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery(
//     "(prefers-color-scheme: dark)"
//   )
//     ? IThemeMode.DARK
//     : IThemeMode.LIGHT;

//   //Default
//   useEffect(() => {
//     switch (SYSTEM_THEME) {
//       case IThemeMode.LIGHT:
//         setTheme(AppLightTheme);
//         break;
//       case IThemeMode.DARK:
//         setTheme(AppDarkTheme);
//         break;
//       default:
//         setTheme(AppLightTheme);
//         break;
//     }
//   }, []);

//   useEffect(() => {
//     switch (themeMode) {
//       case IThemeMode.LIGHT:
//         setTheme(AppLightTheme);
//         break;
//       case IThemeMode.DARK:
//         setTheme(AppDarkTheme);
//         break;
//       case IThemeMode.SYSTEM:
//         switch (SYSTEM_THEME) {
//           case IThemeMode.LIGHT:
//             setTheme(AppLightTheme);
//             break;
//           case IThemeMode.DARK:
//             setTheme(AppDarkTheme);
//             break;
//           default:
//             setTheme(AppLightTheme);
//             break;
//         }
//     }
//   }, [themeMode, SYSTEM_THEME]);

//   const switchThemeMode = (mode: IThemeMode) => {
//     setThemeMode(mode);
//   };

//   return (
//     <ThemeContext.Provider
//       value={{
//         themeMode,
//         switchThemeMode,
//       }}
//     >
//       <ThemeProvider theme={theme}> {children} </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };
