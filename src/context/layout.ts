import { createContext } from "react";

interface LayoutContextProps {
  drawer: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
}

export const LayoutContext = createContext<LayoutContextProps | null>(null);
