import { Chip, styled } from "@mui/material";

const StatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "status",
})<{
  status?: "default" | "disabled" | "emphasis";
}>(({ theme, status }) => ({
  ...(status === "default" &&
    {
      // backgroundColor: theme.palette.deGreen.main,
    }),
}));

export default StatusChip;
