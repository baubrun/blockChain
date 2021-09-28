import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      dark: "#4b636e",
      light: "#a7c0cd",
      main: "#78909c",
      contrastText: "#fafafa",
    },
    secondary: {
      light: "#6ff9ff",
      main: "#26c6da",
      dark: "#0095a8",
      contrastText: "#000000",
    },
  },
});

export default customTheme;
