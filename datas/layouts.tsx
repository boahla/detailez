import {
  ChecklistOutlined,
  FormatListBulletedOutlined,
} from "@mui/icons-material";

const LAYOUTS_NUMBERS = {
  drawerWidth: 240,
};

const LAYOUT_SIDEBAR_MENUS = [
  {
    label: "관리중 프로젝트",
    value: "management",
    route: "/",
    icon: <FormatListBulletedOutlined />,
  },
  {
    label: "테스트 프로젝트",
    value: "test-product",
    route: "/test-product",
    icon: <ChecklistOutlined />,
  },
];

export { LAYOUTS_NUMBERS, LAYOUT_SIDEBAR_MENUS };
