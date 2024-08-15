"use client";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    theme?: any;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#282828",
    },
    secondary: {
      main: "#b6283f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    theme: {
      blue: "#68C8F1",
      green: "#6EC38C",
      brightGreen: "#00D600",
      lightGreen: "#5ceb38",
      yellow: "#FFF79C",
      goldenYellow: "#F1D668",
      softYellow: "#fbe255",
      pink: "#EE83A2",
      orange: "#FF6F00",
      kidyOrange: "#ff6b00", // "kidy" como referência
      red: "#E41340",
      brightRed: "#ff0000",
      lightGray: "#ebebeb",
      black: "#282828",
      warmOrange: "#eba038",
      brightPink: "#f83d5e",
      coralOrange: "#f06e45",
      sunnyOrange: "#FFA719",
      lightOrange: "#FFBC47",
      brightYellow: "#FFE419",
      darkRed: "#B9252B",
      brightBlue: "#0094FF",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif',
  },
});

export default theme;
