"use client";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { palettes } from "./palette";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    black: string;
    deBlack: string;
    deGray: object;
    deGreen: object;
    dePurple: object;
    deError: string;
    dePrimary: string;
  }
  interface Palette {
    black: string;
    deBlack: string;
    deGray: object;
    deGreen: object;
    dePurple: object;
    deError: string;
    dePrimary: string;
  }
}

const defaultTheme = extendTheme({
  colorSchemes: palettes,
});

export default defaultTheme;
