"use client";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { palettes } from "./palette";
import components from "./components";

declare module "@mui/material/styles" {
  type colorDepth = 1 | 2 | 3 | 4;
  interface colorOptions {
    main: string;
    light?: string;
    dark?: string;
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    bg?: string;
  }
  interface Palette {
    black: colorOptions;
    deBlack: colorOptions;
    deGray: colorOptions;
    deGreen: colorOptions;
    dePurple: colorOptions;
    deError: colorOptions;
    dePrimary: colorOptions;
  }
  interface PaletteOptions {
    black: colorOptions;
    deBlack: colorOptions;
    deGray: colorOptions;
    deGreen: colorOptions;
    dePurple: colorOptions;
    deError: colorOptions;
    dePrimary: colorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    rounded: true;
    greyOutlined: true;
  }
  interface ButtonPropsSizeOverrides {
    "extra-small": true;
  }
  interface ButtonPropsColorOverrides {
    deGreen: true;
  }
}

const themeOptions = {
  palette: palettes,
  components: components,
} as ThemeOptions;

const defaultTheme = createTheme(themeOptions);

export default defaultTheme;
