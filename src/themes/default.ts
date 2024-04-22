"use client";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { palettes } from "./palette";
import components from "./components";
import { CSSProperties } from "react";
import typography from "./typography";

//palette
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

//typography
declare module "@mui/material/styles" {
  interface TypographyVariants {
    "lg-bold": CSSProperties;
    "lg-regular": CSSProperties;
    "md-bold": CSSProperties;
    "md-regular": CSSProperties;
    "nm-bold": CSSProperties;
    "nm-regular": CSSProperties;
    "sm-bold": CSSProperties;
    "sm-regular": CSSProperties;
    "xs-bold": CSSProperties;
    "xs-regular": CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    "lg-bold": CSSProperties;
    "lg-regular": CSSProperties;
    "md-bold": CSSProperties;
    "md-regular": CSSProperties;
    "nm-bold": CSSProperties;
    "nm-regular": CSSProperties;
    "sm-bold": CSSProperties;
    "sm-regular": CSSProperties;
    "xs-bold": CSSProperties;
    "xs-regular": CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "lg-bold": true;
    "lg-regular": true;
    "md-bold": true;
    "md-regular": true;
    "nm-bold": true;
    "nm-regular": true;
    "sm-bold": true;
    "sm-regular": true;
    "xs-bold": true;
    "xs-regular": true;
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
  typography: typography,
} as ThemeOptions;

const defaultTheme = createTheme(themeOptions);

export default defaultTheme;
