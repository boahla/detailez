import {
  ChecklistOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

const LAYOUTS_NUMBERS = {
  drawerWidth: 260,
  headerHeight: 80,
};

const LAYOUT_SIDEBAR_MENUS = [
  {
    label: "관리중 프로젝트",
    value: "management",
    route: "/products",
    icon: <FormatListBulletedOutlined />,
  },
  {
    label: "테스트 프로젝트",
    value: "tests",
    route: "/tests",
    icon: <ChecklistOutlined />,
  },
];

export { LAYOUTS_NUMBERS, LAYOUT_SIDEBAR_MENUS };
