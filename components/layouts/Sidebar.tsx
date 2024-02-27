import { LAYOUTS_NUMBERS, LAYOUT_SIDEBAR_MENUS } from "@/datas";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from "@mui/material";
import { DrawerHeader } from ".";
import { useRouter } from "next/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const theme = useTheme();
  const router = useRouter();

  const handleRouteSidebar = (item: any) => {
    router.push(item.route);
  };

  return (
    <CustomDrawer variant="persistent" anchor="left" open={open}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <Divider />
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
    </CustomDrawer>
  );
};

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: LAYOUTS_NUMBERS.drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: LAYOUTS_NUMBERS.drawerWidth,
    boxSizing: "border-box",
  },
}));

export default Sidebar;
