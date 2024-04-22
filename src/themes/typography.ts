import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily:
    "Pretendard, Roboto, Noto Sans KR, Helvetica Neue, Helvetica, Arial, sans-serif",

  h1: { fontWeight: "bold", fontSize: 60, letterSpacing: 0 },
  h2: { fontWeight: "bold", fontSize: 56, letterSpacing: 0 },
  h3: { fontWeight: "bold", fontSize: 48, letterSpacing: 0 },
  h4: { fontWeight: "bold", fontSize: 36, letterSpacing: 0 },
  h5: {
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: "36px",
    letterSpacing: 0,
  },
  h6: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: "32px",
    letterSpacing: 0,
  },

  "lg-bold": {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "28px",
    letterSpacing: -1,
  },
  "lg-regular": {
    fontWeight: "regular",
    fontSize: 20,
    lineHeight: "28px",
    letterSpacing: -1,
  },
  "md-bold": { fontWeight: "bold", fontSize: 18, lineHeight: "28px" },
  "md-regular": { fontWeight: "regular", fontSize: 18, lineHeight: "28px" },
  "nm-bold": { fontWeight: "bold", fontSize: 16, lineHeight: "24px" },
  "nm-regular": { fontWeight: "regular", fontSize: 16, lineHeight: "24px" },
  "sm-bold": { fontWeight: "bold", fontSize: 14, lineHeight: "22px" },
  "sm-regular": { fontWeight: "regular", fontSize: 14, lineHeight: "22px" },
  "xs-bold": { fontWeight: "bold", fontSize: 12, lineHeight: "18px" },
  "xs-regular": { fontWeight: "regular", fontSize: 12, lineHeight: "18px" },
};

export default typography;
