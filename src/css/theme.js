import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      dark: "#0095a8",
      light: "#6ff9ff",
      main: "#26c6da",
      contrastText: "#f9f9f9",
    },
    secondary: {
      light: "#cfcfcf",
      main: "#9e9e9e",
      dark: "#707070",
      contrastText: "#f9f9f9",
    },
  },
});

export default customTheme;
