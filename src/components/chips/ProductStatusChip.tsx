import { Chip, styled } from "@mui/material";

const ProductStatusChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "type",
})<{
  type?: string | undefined;
  //  "default" | "disabled" | "emphasis";
}>(({ theme, type }) => ({
  ...(type === "disabled" && {
    backgroundColor: theme.palette.deGray[3],
    color: theme.palette.dePurple[2],
  }),
  ...(type === "emphasis" && {
    backgroundColor: theme.palette.deGreen[1],
    color: "white",
  }),
  ...(type === "default" && {
    backgroundColor: theme.palette.deGreen[4],
    color: theme.palette.deGreen[1],
  }),
}));

export default ProductStatusChip;
