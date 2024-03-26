// "use client";
import "@/src/styles/globals.css";
import { styled } from "@mui/material/styles";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import { DrawerHeader, Header, Sidebar } from "@/src/components/layouts";
import { LAYOUTS_NUMBERS } from "@/src/datas";
import { LayoutContext } from "../context/layout";

export default function CommonLayout({
  sidebar,
  children,
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <LayoutContext.Provider
      value={{
        drawer: open,
        handleDrawerOpen,
        handleDrawerClose,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Header open={open} onClick={() => setOpen((prev) => !prev)} />
        <Sidebar open={open}>{sidebar}</Sidebar>
        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </LayoutContext.Provider>
  );
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  backgroundColor: "#eceff1",
  minHeight: "100vh",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${LAYOUTS_NUMBERS.drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
