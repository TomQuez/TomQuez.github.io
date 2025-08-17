import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0ea5e9" }, // bleu “sky”
    secondary: { main: "#22c55e" }, // vert “emerald”
    background: { default: "#0b1220" }, // foncé pour mieux voir l’effet verre
    text: { primary: "#ffffff" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      'Roboto, ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },
});
