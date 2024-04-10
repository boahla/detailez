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
import { usePathname, useRouter } from "next/navigation";

export default function BasicLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const path = usePathname();

  const handleRouteSidebar = (item: any) => {
    router.push(item.route);
  };

  return (
    <CommonLayout
      sidebar={
        <List sx={{ pl: 2, pt: 4 }}>
          {LAYOUT_SIDEBAR_MENUS.map((item, idx) => (
            <ListItem
              key={idx}
              disablePadding
              onClick={() => handleRouteSidebar(item)}
              sx={{
                borderRadius: "10px",
                color: "dePurple1",
                mb: 1,
                "& svg": {
                  color: "dePurple1",
                },
                "& .MuiButtonBase-root:hover": {
                  borderRadius: "10px",
                },
                ...(item.route === path && {
                  bgcolor: "deGray4",
                }),
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "24px !important", mr: 1 }}>
                  {item.icon}
                </ListItemIcon>
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
