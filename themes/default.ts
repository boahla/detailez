"use client";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    black: string;
    deBlack: string;
    deGray: object;
    deGreen: object;
    dePurple: object;
    deError: string;
    dePrimary: string;
    bg: {
      deGreen: object;
      dePurple: object;
      deGray: object;
      error: string;
      primary: string;
    };
  }
  interface Palette {
    black: string;
    deBlack: string;
    deGray: object;
    deGreen: object;
    dePurple: object;
    deError: string;
    dePrimary: string;
    bg: {
      deGreen: object;
      dePurple: object;
      deGray: object;
      error: string;
      primary: string;
    };
  }
}

const defaultTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        black: "#211C60",
        deBlack: "#2A2A2C",
        deGray: {
          1: "#7A7A86",
          2: "#B5B5C0",
          3: "#E2E3EC",
          4: "#F2F3F7",
        },
        deGreen: {
          1: "#46C18E",
          2: "#93E3C2",
          3: "#C8EDDD",
          4: "#E9F9F3",
        },
        dePurple: {
          1: "#5E6296",
          2: "#9FA1C0",
        },
        deError: "#F44336",
        dePrimary: "#1565C0",
        bg: {
          deGreen: {
            1: "#46C18E",
            2: "#93E3C2",
            3: "#C8EDDD",
            4: "#E9F9F3",
          },
          dePurple: { 1: "#5E6296", 2: "#9FA1C0" },
          deGray: {
            2: "#B5B5C0",
            3: "#E2E3EC",
            4: "#F2F3F7",
            5: "#FAFAFD",
          },
          error: "#FBE9E7",
          primary: "#E3F2FD",
        },
      },
    },
    // dark: {
    //   palette: {
    //     extra: "123",
    //     // extra: defaultTheme.colorSchemes.dark.palette.primary, // how do I do this?
    //   },
    // },
  },
});

export default defaultTheme;
