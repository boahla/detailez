import { tcIssueStatus, tcIssueStatusLabel } from "@/src/datas/products";
import { Chip, useTheme } from "@mui/material";

const TCIssueChip = ({ value }: { value: tcIssueStatus }) => {
  const theme = useTheme();
  return (
    <Chip
      icon={tcIssueStatusLabel[value].icon}
      label={tcIssueStatusLabel[value].label}
      sx={{
        minWidth: 52,
        border: `solid 1px ${
          value === "pass"
            ? theme.palette.deGreen[1]
            : value === "cancel"
            ? theme.palette.deGray[1]
            : value === "hold"
            ? theme.palette.dePrimary.main
            : value === "error"
            ? theme.palette.deError.main
            : "black"
        } !important`,
        color: `${
          value === "pass"
            ? theme.palette.deGreen[1]
            : value === "cancel"
            ? theme.palette.deGray[1]
            : value === "hold"
            ? theme.palette.dePrimary.main
            : value === "error"
            ? theme.palette.deError.main
            : "black"
        } !important`,
        bgcolor: `${
          value === "pass"
            ? theme.palette.deGreen[4]
            : value === "cancel"
            ? theme.palette.deGray[4]
            : value === "hold"
            ? theme.palette.dePrimary.bg
            : value === "error"
            ? theme.palette.deError.bg
            : "black"
        } !important`,
        fontWeight: 700,
        "& svg": {
          color: `${
            value === "pass"
              ? theme.palette.deGreen[1]
              : value === "cancel"
              ? theme.palette.deGray[1]
              : value === "hold"
              ? theme.palette.dePrimary.main
              : value === "error"
              ? theme.palette.deError.main
              : "black"
          } !important`,
        },
      }}
    />
  );
};

export default TCIssueChip;
