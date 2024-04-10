import { LAYOUTS_NUMBERS } from "@/src/datas";
import {
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
// import { signOut } from "next-auth/react";
import SignInButton from "@/src/components/layouts/components/SignInButton";
import { useRouter } from "next/navigation";
import Logo from "@/public/logo/detailezLogo.png";
import Image from "next/image";

interface HeaderProps {
  open: boolean;
  onClick: () => void;
}

const Header = ({ open, onClick }: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar
        sx={{
          minHeight: "80px !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: LAYOUTS_NUMBERS.drawerWidth,
          }}
        >
          <Image
            src={Logo}
            alt="img"
            width="124"
            height="26"
            onClick={() => router.push(`/products`)}
            style={{ cursor: "pointer" }}
          />
          <IconButton
            color="info"
            aria-label="open drawer"
            onClick={onClick}
            edge="start"
            sx={{
              bgcolor: `${theme.palette.deGreen3} !important`,
              color: "dePurple1",
              borderRadius: "10px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        <SignInButton />
      </Toolbar>
    </AppBar>
  );
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  boxShadow: "none",
  background: "white",
  zIndex: 1201,
  height: LAYOUTS_NUMBERS.headerHeight,
}));

export default Header;
