import { LAYOUTS_NUMBERS } from "@/src/datas";
import { styled } from "@mui/material";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  minHeight: `${LAYOUTS_NUMBERS.headerHeight}px !important`,
}));
