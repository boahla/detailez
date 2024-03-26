import "@/src/styles/globals.css";
import { ReactNode } from "react";
import { LAYOUT_SIDEBAR_MENUS } from "@/src/datas";
import CommonLayout from "./CommonLayout";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function BasicLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const handleRouteSidebar = (item: any) => {
    router.push(item.route);
  };

  return (
    <CommonLayout
      sidebar={
        <List>
          {LAYOUT_SIDEBAR_MENUS.map((item, idx) => (
            <ListItem
              key={idx}
              disablePadding
              onClick={() => handleRouteSidebar(item)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      }
    >
      {children}
    </CommonLayout>
  );
}
