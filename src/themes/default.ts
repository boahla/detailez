"use client";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { palettes } from "./palette";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    black: string;
    deBlack: string;
    deGray1: string;
    deGray2: string;
    deGray3: string;
    deGray4: string;
    deGreen1: string;
    deGreen2: string;
    deGreen3: string;
    deGreen4: string;
    dePurple1: string;
    dePurple2: string;
    deError: string;
    dePrimary: string;
  }
  interface Palette {
    black: string;
    deBlack: string;
    deGray1: string;
    deGray2: string;
    deGray3: string;
    deGray4: string;
    deGreen1: string;
    deGreen2: string;
    deGreen3: string;
    deGreen4: string;
    dePurple1: string;
    dePurple2: string;
    deError: string;
    dePrimary: string;
  }
}

const defaultTheme = extendTheme({
  colorSchemes: palettes,
});

export default defaultTheme;
