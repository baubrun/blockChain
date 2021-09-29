import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      dark: "#4b636e",
      light: "#cedce3",
      main: "#78909c",
      contrastText: "#fafafa",
    },
    secondary: {
      light: "#Light",
      main: "#5c6bc0",
      dark: "#26418f",
      contrastText: "#ffffff",
    },
  },
});

export default customTheme;
