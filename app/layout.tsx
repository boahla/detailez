"use client";
import defaultTheme from "@/themes/default";
import "./globals.css";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useTheme,
  styled,
} from "@mui/material/styles";
import { ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { DrawerHeader, Header, Sidebar } from "@/components/layouts";
import { LAYOUTS_NUMBERS } from "@/datas";

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <CssVarsProvider theme={defaultTheme}>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Header open={open} onClick={handleDrawerOpen} />
            <Sidebar open={open} onClose={handleDrawerClose} />
            <Main open={open}>
              <DrawerHeader />
              {children}
            </Main>
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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
