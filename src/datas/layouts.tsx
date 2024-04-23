import {
  ChecklistOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

const LAYOUTS_NUMBERS = {
  drawerWidth: 260 - 24,
  headerHeight: 80,
};

const LAYOUT_SIDEBAR_MENUS = [
  {
    label: "프로젝트 관리",
    value: "management",
    route: "/products",
    icon: <FormatListBulletedOutlined />,
  },
  {
    label: "초대된 프로젝트",
    value: "tests",
    route: "/tests",
    icon: <ChecklistOutlined />,
  },
];

export { LAYOUTS_NUMBERS, LAYOUT_SIDEBAR_MENUS };
