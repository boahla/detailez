import { LAYOUTS_NUMBERS } from "@/src/datas";
import { Drawer, styled } from "@mui/material";
import { DrawerHeader } from ".";
import { ReactNode } from "react";

interface SidebarProps {
  open: boolean;
  children: ReactNode;
}

const Sidebar = ({ open, children }: SidebarProps) => {
  return (
    <CustomDrawer variant="persistent" anchor="left" open={open}>
      <DrawerHeader />
      {children}
    </CustomDrawer>
  );
};

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: LAYOUTS_NUMBERS.drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: LAYOUTS_NUMBERS.drawerWidth,
    boxSizing: "border-box",
    border: "none",
  },
}));

export default Sidebar;
